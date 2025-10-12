import React from "react";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function HeroAwareness() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] dark:bg-[#050914]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1C3B71] via-[#1F4086] to-[#0B1220] opacity-95 dark:from-[#0e1526] dark:via-[#142a4f] dark:to-[#050914]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl text-white dark:text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur dark:bg-white/10">
            Awareness Pitch · ObservAuto
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Lleva tu marca a la mente correcta, en el momento correcto.
          </h1>
          <p className="mt-4 text-lg text-white/90 dark:text-white/80">
            Cápsulas de conocimiento activables por equipos comerciales y audiencias reales. Contenido enfocado, medición
            clara y una UX hecha para convertir curiosidad en intención.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#cta"
              data-oa="cta-primary"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D70102] px-5 py-3 text-white font-semibold shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 focus:ring-offset-[#0B1220] dark:focus:ring-offset-[#050914] sm:w-auto"
            >
              Explorar el demo
              <ArrowRightIcon />
            </a>
            <a
              href="#concept"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2 focus:ring-offset-[#0B1220] dark:border-white/20 dark:hover:bg-white/20 dark:focus:ring-offset-[#050914] sm:w-auto"
            >
              Cómo funciona
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-white/80 dark:text-white/70 sm:grid-cols-3">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-white/10 dark:bg-white/10">⚡ Carga veloz (Vite + Node 20)</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-white/10 dark:bg-white/10">🎯 Contenido accionable</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3 dark:border-white/10 dark:bg-white/10">📈 Medición lista para integrar</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
