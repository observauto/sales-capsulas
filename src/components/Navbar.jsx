import React from "react";
import navLinks from "../config/navLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">
          ObservAuto • Awareness
        </a>
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              <span className="hidden sm:inline">{link.label}</span>
              <span className="sm:hidden" aria-hidden="true">•</span>
            </a>
          ))}

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            aria-label="Favoritos"
            title="Favoritos"
          >
            <span>♥</span><span className="hidden sm:inline">Favoritos</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            aria-label="Compartir"
            title="Compartir"
            onClick={() => {
              const url = window.location.href;
              const data = {
                title: "ObservAuto Awareness",
                text: "Elevator pitch digital respaldado por datos.",
                url
              };
              if (navigator.share) {
                navigator.share(data).catch(() => navigator.clipboard.writeText(url));
              } else {
                navigator.clipboard.writeText(url);
                alert("Enlace copiado al portapapeles");
              }
            }}
          >
            <span>🔗</span><span className="hidden sm:inline">Compartir</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            aria-label="Cambiar tema"
            title="Cambiar tema"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <span>🌓</span><span className="hidden sm:inline">Tema</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
