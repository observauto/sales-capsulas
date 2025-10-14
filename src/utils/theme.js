const STORAGE_KEY = 'oa-theme'

export function currentTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function setTheme(theme, options = {}) {
  const { persist = true, emit = true, button = null } = options

  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.set === 'function') {
    const result = window.oaTheme.set(theme, { persist, emit, button })
    if (button && button.setAttribute) {
      button.setAttribute('aria-pressed', String(result === 'dark'))
    }
    return result
  }

  if (typeof document === 'undefined') return 'light'

  const root = document.documentElement
  const isDark = theme === 'dark'

  root.classList.toggle('dark', isDark)
  root.setAttribute('data-theme', isDark ? 'dark' : 'light')

  if (persist && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {}
  }

  if (emit && typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('oa:theme-change', { detail: { theme: isDark ? 'dark' : 'light' } }))
    } catch {}
  }

  if (button && button.setAttribute) {
    button.setAttribute('aria-pressed', String(isDark))
  }

  return isDark ? 'dark' : 'light'
}

export function toggleTheme(btn, options = {}) {
  const mergedOptions = { persist: true, emit: true, button: btn, ...options }

  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.toggle === 'function') {
    const result = window.oaTheme.toggle(mergedOptions)
    if (btn && btn.setAttribute) {
      btn.setAttribute('aria-pressed', String(result === 'dark'))
    }
    return result
  }

  const next = currentTheme() === 'dark' ? 'light' : 'dark'
  return setTheme(next, mergedOptions)
}
