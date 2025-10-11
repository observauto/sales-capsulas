const PROXY_URL = import.meta.env.VITE_HTTP_PROXY_URL?.trim()
const PROXY_ENABLED = import.meta.env.VITE_HTTP_PROXY_ENABLED === 'true'
const RETRY_ON_403 = import.meta.env.VITE_HTTP_RETRY_ON_403 !== 'false'
const DEFAULT_TIMEOUT = Number(import.meta.env.VITE_HTTP_TIMEOUT ?? 15000)

function buildProxiedRequest(input) {
  if (!PROXY_URL) {
    return null
  }

  try {
    const url = typeof input === 'string' ? input : input.url
    const encoded = encodeURIComponent(url)
    return `${PROXY_URL}${PROXY_URL.includes('?') ? '&' : '?'}url=${encoded}`
  } catch (error) {
    console.warn('[fetchClient] No se pudo construir la URL proxificada', error)
    return null
  }
}

async function performFetch(originalFetch, input, init, signal) {
  const mergedInit = { ...init, signal }
  return originalFetch(input, mergedInit)
}

async function executeWithFallback(originalFetch, input, init = {}) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT)

  try {
    const response = await performFetch(originalFetch, input, init, controller.signal)

    if (response.status === 403 && PROXY_ENABLED && RETRY_ON_403) {
      const proxied = buildProxiedRequest(response.url || input)
      if (proxied) {
        console.warn('[fetchClient] Reintentando solicitud a través de proxy por 403')
        return await performFetch(originalFetch, proxied, init, controller.signal)
      }
    }

    return response
  } catch (error) {
    if (PROXY_ENABLED) {
      const proxied = buildProxiedRequest(input)
      if (proxied) {
        console.warn('[fetchClient] Error de red, intentando con proxy', error)
        return performFetch(originalFetch, proxied, init, controller.signal)
      }
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}

export function installFetchInterceptor() {
  if (typeof window === 'undefined' || typeof window.fetch !== 'function') {
    return
  }

  if (window.__observautoFetchInstalled) {
    return
  }

  const originalFetch = window.fetch.bind(window)

  window.fetch = (input, init) => executeWithFallback(originalFetch, input, init)

  window.__observautoFetchInstalled = true
}

export async function fetchWithFallback(input, init) {
  if (typeof window !== 'undefined' && window.fetch === fetchWithFallback) {
    // Avoid infinite recursion when the interceptor hasn't been installed properly.
    return executeWithFallback(window.fetch, input, init)
  }

  return executeWithFallback(fetch, input, init)
}
