// Wrapper ligero para unificar fetch y registrar 403.
// Mantiene un buffer circular (máx 50) en window.__oa403 para diagnóstico (DevNetworkPanel).

(function initOA403Buffer() {
  if (typeof window !== "undefined") {
    window.__oa403 = Array.isArray(window.__oa403) ? window.__oa403 : [];
    window.__oa403_push = function (evt) {
      try {
        window.__oa403.push(evt);
        if (window.__oa403.length > 50) window.__oa403.shift();
      } catch (_) {}
    };
  }
})();

const BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_SITE_URL) ||
  (typeof window !== "undefined" ? window.location.origin : "");

export async function fetcher(path, options = {}) {
  const url = path?.startsWith?.("http")
    ? path
    : `${BASE}${path?.startsWith?.("/") ? "" : "/"}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {})
      }
    });

    if (res.status === 403) {
      const evt = {
        ts: new Date().toISOString(),
        url,
        method: options.method || "GET",
        referrer:
          typeof document !== "undefined" ? document.referrer : "",
        note: "HTTP 403"
      };
      if (typeof window !== "undefined" && window.__oa403_push) {
        window.__oa403_push(evt);
      }
      console.warn("[OA-403]", evt);
    }

    if (options.raw) return res;
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) return res.json();
    return res.text();
  } catch (error) {
    console.error("[OA-FETCH-ERROR]", { url, error });
    throw error;
  }
}