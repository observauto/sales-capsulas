const STORAGE_KEY = 'oa-theme'

export function getSystemPref() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredTheme() {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' || stored === 'light' ? stored : null
}

export function applyTheme(theme, options = {}) {
  if (typeof document === 'undefined') return
  const resolved = theme === 'dark' ? 'dark' : 'light'
  const { persist = true } = options
  const root = document.documentElement
  root.classList.toggle('dark', resolved === 'dark')
  if (persist && typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, resolved)
  }
}

export function ensureThemeOnLoad() {
  if (typeof document === 'undefined') return
  const stored = getStoredTheme()
  const preferred = stored || getSystemPref()
  document.documentElement.classList.toggle('dark', preferred === 'dark')
}

export function toggleTheme(btn) {
  if (typeof document === 'undefined') return 'light'
  const root = document.documentElement
  const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'
  applyTheme(nextTheme)
  if (btn && typeof btn.setAttribute === 'function') {
    btn.setAttribute('aria-pressed', String(nextTheme === 'dark'))
  }
  return nextTheme
}
