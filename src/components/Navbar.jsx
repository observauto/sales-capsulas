import { useEffect, useState } from "react";
import navLinks from "../config/navLinks";
import { toggleTheme, THEME_CHANGE_EVENT } from "../utils/theme";

const getThemeState = () => {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
};

export default function Navbar() {
  const [isDark, setIsDark] = useState(getThemeState);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const syncTheme = (event) => {
      const theme = event?.detail?.theme;
      if (theme === "dark" || theme === "light") {
        setIsDark(theme === "dark");
      } else {
        setIsDark(getThemeState());
      }
    };

    window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
    };
  }, []);

  const handleThemeToggle = (event) => {
    const next = toggleTheme(event.currentTarget);
    setIsDark(next === "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0B1220]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-[#1C3B71] dark:text-white">
          ObservAuto • Awareness
        </a>
        <nav className="flex items-center gap-2 text-sm font-medium text-[#0B1220] dark:text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:hover:bg-white/10"
            >
              <span className="hidden sm:inline">{link.label}</span>
              <span className="sm:hidden" aria-hidden="true">
                •
              </span>
            </a>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:hover:bg-white/10"
            aria-label="Favoritos"
            title="Favoritos"
          >
            <span>♥</span>
            <span className="hidden sm:inline">Favoritos</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:hover:bg-white/10"
            aria-label="Compartir"
            title="Compartir"
            onClick={() => {
              const url = window.location.href;
              const data = {
                title: "ObservAuto Awareness",
                text: "Elevator pitch digital respaldado por datos.",
                url,
              };
              if (navigator.share) {
                navigator.share(data).catch(() => navigator.clipboard.writeText(url));
              } else {
                navigator.clipboard.writeText(url);
                alert("Enlace copiado al portapapeles");
              }
            }}
          >
            <span>🔗</span>
            <span className="hidden sm:inline">Compartir</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 dark:hover:bg-white/10"
            aria-label="Cambiar tema"
            title="Cambiar tema"
            aria-pressed={isDark}
            onClick={handleThemeToggle}
          >
            <span role="img" aria-hidden="true">
              🌓
            </span>
            <span className="hidden sm:inline">Tema</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
