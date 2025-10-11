// Cliente avanzado con fallback opcional a proxy.
// FIX: en reintento por timeout/abort, se usa un AbortController NUEVO.
// Evitamos reutilizar un signal ya abortado (bug señalado por Codex).

const DEFAULT_TIMEOUT = 10000; // 10s
const PROXY_ENABLED =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_HTTP_PROXY_ENABLED === "true") || false;

const RETRY_ON_403 = true;

// Ajusta esta función a tu infraestructura de proxy si la usas.
function buildProxiedRequest(input) {
  try {
    const url = typeof input === "string" ? input : input?.url;
    if (!url) return null;
    // Ejemplo: anteponer /api/proxy?url=...
    const encoded = encodeURIComponent(url);
    return `/api/proxy?url=${encoded}`;
  } catch {
    return null;
  }
}

async function performFetch(originalFetch, input, init = {}, signal) {
  const opts = { ...init };
  if (signal) opts.signal = signal;
  return originalFetch(input, opts);
}

async function executeWithFallback(originalFetch, input, init = {}) {
  // 1) Petición primaria con timeout propio
  const primaryController = new AbortController();
  const timeoutId = setTimeout(() => primaryController.abort(), DEFAULT_TIMEOUT);

  try {
    const res = await performFetch(
      originalFetch,
      input,
      init,
      primaryController.signal
    );

    // 2) Reintento por 403 usando proxy (si está habilitado)
    if (res.status === 403 && PROXY_ENABLED && RETRY_ON_403) {
      const proxied = buildProxiedRequest(res.url || input);
      if (proxied) {
        console.warn(
          "[fetchClient] Reintentando vía proxy por 403 →",
          proxied
        );
        // NUEVO controller para el reintento
        const retryController = new AbortController();
        const retryTimeout = setTimeout(
          () => retryController.abort(),
          DEFAULT_TIMEOUT
        );
        try {
          const retryRes = await performFetch(
            originalFetch,
            proxied,
            init,
            retryController.signal
          );
          clearTimeout(retryTimeout);
          return retryRes;
        } catch (retryErr) {
          clearTimeout(retryTimeout);
          throw retryErr;
        }
      }
    }

    return res;
  } catch (err) {
    // 3) Fallback ante error de red/timeout → proxy si está habilitado
    if (PROXY_ENABLED) {
      const proxied = buildProxiedRequest(input);
      if (proxied) {
        console.warn("[fetchClient] Error de red, intentando con proxy", err);
        // NUEVO controller para el reintento
        const retryController = new AbortController();
        const retryTimeout = setTimeout(
          () => retryController.abort(),
          DEFAULT_TIMEOUT
        );
        try {
          const retryRes = await performFetch(
            originalFetch,
            proxied,
            init,
            retryController.signal
          );
          clearTimeout(retryTimeout);
          return retryRes;
        } catch (retryErr) {
          clearTimeout(retryTimeout);
          throw retryErr;
        }
      }
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Exporta un wrapper listo para uso global
export async function fetchClient(input, init = {}) {
  return executeWithFallback(fetch, input, init);
}
