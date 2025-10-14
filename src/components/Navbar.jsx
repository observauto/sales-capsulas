import { useEffect, useState } from "react";
import navLinks from "../config/navLinks";
import { toggleTheme } from "../utils/theme";

export default function Navbar() {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const sync = () => setPressed(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("oa:theme-change", sync);
    return () => window.removeEventListener("oa:theme-change", sync);
  }, []);

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
            aria-pressed={pressed}
            onClick={(event) => toggleTheme(event.currentTarget)}
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
