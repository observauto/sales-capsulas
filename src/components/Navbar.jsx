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
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              <span className="hidden sm:inline">{link.label}</span>
              <span className="sm:hidden" aria-hidden="true">•</span>
            </a>
          ))}

          {/* Acciones rápidas en móvil/desktop (sin dependencias de iconos) */}
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
              if (navigator.share) {
                navigator.share({
                  title: "ObservAuto Awareness",
                  text: "Elevator pitch digital respaldado por datos",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
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
