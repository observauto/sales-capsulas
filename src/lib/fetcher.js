const BASE =
  import.meta?.env?.VITE_SITE_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

export async function fetcher(path, options = {}) {
  const url = path.startsWith("http")
    ? path
    : `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {}),
      },
    });

    if (res.status === 403) {
      console.warn("[OA-403]", {
        url,
        method: options.method || "GET",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      });
    }

    const contentType = res.headers.get("content-type") || "";
    if (options.raw) return res;
    if (contentType.includes("application/json")) return res.json();
    return res.text();
  } catch (error) {
    console.error("[OA-FETCH-ERROR]", { url, error });
    throw error;
  }
}
