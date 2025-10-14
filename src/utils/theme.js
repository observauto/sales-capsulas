const STORAGE_KEY = 'oa-theme';

export function getSystemPref() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme() {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
}

export function currentTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/** Aplica el tema en <html>, setea data-theme, persiste y emite evento si se pide */
export function setTheme(theme, { persist = true, emit = true } = {}) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');

  if (persist && typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {}
  }

  if (emit && typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
    window.dispatchEvent(
      new CustomEvent('oa:theme-change', {
        detail: { theme: isDark ? 'dark' : 'light' },
      })
    );
  }
}

export function ensureThemeOnLoad() {
  const chosen = getStoredTheme() || getSystemPref();
  setTheme(chosen, { persist: false, emit: false });
}

/** Alterna el tema y actualiza aria-pressed si se pasa el botón */
export function toggleTheme(btn) {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next, { persist: true, emit: true });
  if (btn && btn.setAttribute) btn.setAttribute('aria-pressed', String(next === 'dark'));
  return next;
}
