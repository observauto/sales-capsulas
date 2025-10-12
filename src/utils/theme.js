const STORAGE_KEY = 'oa-theme'
export const THEME_CHANGE_EVENT = 'oa:theme-change'

export function getSystemPref() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredTheme() {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch (error) {
    console.warn('[OA:theme]', error)
    return null
  }
}

export function applyTheme(theme, options = {}) {
  if (typeof document === 'undefined') return 'light'

  const resolved = theme === 'dark' ? 'dark' : 'light'
  const { persist = true, emit = true } = options
  const root = document.documentElement
  const previous = root.classList.contains('dark') ? 'dark' : 'light'

  root.classList.toggle('dark', resolved === 'dark')

  if (persist && typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, resolved)
    } catch (error) {
      console.warn('[OA:theme]', error)
    }
  }

  if (
    emit &&
    typeof window !== 'undefined' &&
    typeof window.dispatchEvent === 'function' &&
    previous !== resolved
  ) {
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { theme: resolved } }))
  }

  return resolved
}

export function ensureThemeOnLoad() {
  if (typeof document === 'undefined') return 'light'
  const stored = getStoredTheme()
  const preferred = stored || getSystemPref()
  return applyTheme(preferred, { persist: false, emit: false })
}

export function toggleTheme(btn) {
  if (typeof document === 'undefined') return 'light'
  const root = document.documentElement
  const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'
  const resolved = applyTheme(nextTheme)
  if (btn && typeof btn.setAttribute === 'function') {
    btn.setAttribute('aria-pressed', String(resolved === 'dark'))
  }
  return resolved
}
