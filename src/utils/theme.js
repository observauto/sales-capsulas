const STORAGE_KEY = 'oa-theme';

export function currentTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function setTheme(theme, { persist = true, emit = true } = {}) {
  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.set === 'function') {
    return window.oaTheme.set(theme);
  }
  const root = document.documentElement;
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  if (persist && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {}
  }
  if (emit && typeof window !== 'undefined') {
    try {
      window.dispatchEvent(
        new CustomEvent('oa:theme-change', { detail: { theme: isDark ? 'dark' : 'light' } })
      );
    } catch {}
  }
  return isDark ? 'dark' : 'light';
}

export function toggleTheme(btn) {
  if (typeof window !== 'undefined' && window.oaTheme && typeof window.oaTheme.toggle === 'function') {
    const t = window.oaTheme.toggle();
    if (btn && btn.setAttribute) btn.setAttribute('aria-pressed', String(t === 'dark'));
    return t;
  }
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const t = setTheme(next, { persist: true, emit: true });
  if (btn && btn.setAttribute) btn.setAttribute('aria-pressed', String(t === 'dark'));
  return t;
}
