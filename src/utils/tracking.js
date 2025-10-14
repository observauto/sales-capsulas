export function startOATracking() {
  if (typeof window === 'undefined') return
  if (window.__oaTrackingStarted) return
  window.__oaTrackingStarted = true

  if (window.__oaDebug) {
    console.info('[OA] tracking ready')
  }

  const handler = (ev) => {
    try {
      const path = ev.composedPath ? ev.composedPath() : []
      const el =
        path.find?.((n) => n?.getAttribute && n.getAttribute('data-oa')) ||
        (ev.target?.closest ? ev.target.closest('[data-oa]') : null)

      if (!el) return

      const name = el.getAttribute('data-oa')
      const href = el.getAttribute('href') || null
      const payload = {
        name,
        href,
        ts: Date.now(),
        path: location.pathname + location.search,
        userAgent: navigator.userAgent,
      }

      const hasDataLayer = window.dataLayer && Array.isArray(window.dataLayer)
      const trackUrl = import.meta.env?.VITE_TRACK_URL

      if (hasDataLayer) {
        window.dataLayer.push({ event: 'oa', ...payload })
      } else if (trackUrl) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
        navigator.sendBeacon(trackUrl, blob)
      }

      if (!hasDataLayer && !trackUrl) {
        console.info('[OA]', payload)
      }
    } catch (e) {
      console.warn('[OA:error]', e)
    }
  }

  window.addEventListener('click', handler, { capture: true })
}
