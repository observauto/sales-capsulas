// Cliente de fetch con timeout y fallback opcional a proxy.
// FIX definitivo: en reintentos (403 o timeout) se usa SIEMPRE un AbortController NUEVO.
// Además, exponemos installFetchInterceptor() para que main.jsx pueda interceptar window.fetch
// y enrutarlo a fetchClient(). Si no hay window (SSR/build), no hace nada.

const DEFAULT_TIMEOUT = 10000; // 10s

const PROXY_ENABLED =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_HTTP_PROXY_ENABLED === "true") || false;

const RETRY_ON_403 = true;

// Construye una URL proxied. Ajusta según tu backend si tienes uno.
function buildProxiedRequest(input) {
  try {
    const url = typeof input === "string" ? input : input?.url;
    if (!url) return null;
    const encoded = encodeURIComponent(url);
    // Ejemplo genérico: /api/proxy?url=<encoded>
    return `/api/proxy?url=${encoded}`;
  } catch {
    return null;
  }
}

// Ejecuta un fetch con (opcional) AbortSignal
async function performFetch(originalFetch, input, init = {}, signal) {
  const opts = { ...init };
  if (signal) opts.signal = signal;
  return originalFetch(input, opts);
}

// Hace un fetch con timeout propio y devuelve la Response
async function fetchWithTimeout(originalFetch, input, init = {}, ms = DEFAULT_TIMEOUT) {
  // Si el entorno no soporta AbortController, hacemos fetch directo sin timeout
  if (typeof AbortController === "undefined") {
    return originalFetch(input, init);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), ms);
  try {
    const res = await performFetch(originalFetch, input, init, controller.signal);
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function executeWithFallback(originalFetch, input, init = {}) {
  // 1) Petición primaria con timeout
  try {
    const primaryRes = await fetchWithTimeout(originalFetch, input, init, DEFAULT_TIMEOUT);

    // 1.a) Reintento por 403 usando proxy (opcional)
    if (primaryRes.status === 403 && PROXY_ENABLED && RETRY_ON_403) {
      const proxied = buildProxiedRequest(primaryRes.url || input);
      if (proxied) {
        console.warn("[fetchClient] Reintentando vía proxy por 403 →", proxied);
        // NUEVO AbortController para el retry
        return await fetchWithTimeout(originalFetch, proxied, init, DEFAULT_TIMEOUT);
      }
    }

    return primaryRes;
  } catch (primaryErr) {
    // 2) Fallback por error/timeout → proxy si está habilitado
    if (PROXY_ENABLED) {
      const proxied = buildProxiedRequest(input);
      if (proxied) {
        console.warn("[fetchClient] Error/timeout, intentando con proxy →", proxied, primaryErr);
        // NUEVO AbortController para el retry
        return await fetchWithTimeout(originalFetch, proxied, init, DEFAULT_TIMEOUT);
      }
    }

    // Sin proxy (o sin éxito), re-lanzamos el error original
    throw primaryErr;
  }
}

// API pública: cliente directo
export async function fetchClient(input, init = {}) {
  return executeWithFallback(fetch, input, init);
}

// API pública: interceptor global opcional
// Reemplaza window.fetch por una función que usa fetchClient().
// Es idempotente: si ya se instaló, no lo vuelve a instalar.
// En SSR/build (sin window) no hace nada.
export function installFetchInterceptor() {
  if (typeof window === "undefined" || typeof window.fetch !== "function") return;

  // Evitar múltiples instalaciones
  if (window.__oa_fetch_interceptor_installed) return;

  const originalFetch = window.fetch.bind(window);
  window.__oa_original_fetch = originalFetch;

  window.fetch = (input, init) => {
    // Delegamos al fetchClient con el fetch global actual (que puede ser proxied por el runtime)
    return fetchClient(input, init);
  };

  window.__oa_fetch_interceptor_installed = true;
  try {
    console.info("[fetchClient] Interceptor instalado sobre window.fetch");
  } catch (_) {}
}
