// src/utils/theme.js
// Delegación a la API global expuesta en index.html (window.oaTheme)
// con fallback seguro para SSR/ambientes sin ventana.

const STORAGE_KEY = 'oa-theme';

export function currentTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function setTheme(theme, { persist = true, emit = true } = {}) {
  // Usa la API global si existe (productivo)
  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.set === 'function') {
    return window.oaTheme.set(theme);
  }
  // Fallback (no debería usarse en prod)
  if (typeof document === 'undefined') return 'light';
  const root = document.documentElement;
  const isDark = theme === 'dark';

  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');

  if (persist && typeof localStorage !== 'undefined') {
    try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch {}
  }
  if (emit && typeof window !== 'undefined') {
    try { window.dispatchEvent(new CustomEvent('oa:theme-change', { detail: { theme: isDark ? 'dark' : 'light' } })); } catch {}
  }
  return isDark ? 'dark' : 'light';
}

export function toggleTheme(btn) {
  // Delegación preferida
  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.toggle === 'function') {
    const t = window.oaTheme.toggle();
    if (btn && btn.setAttribute) btn.setAttribute('aria-pressed', String(t === 'dark'));
    return t;
  }
  // Fallback
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const t = setTheme(next, { persist: true, emit: true });
  if (btn && btn.setAttribute) btn.setAttribute('aria-pressed', String(t === 'dark'));
  return t;
}
