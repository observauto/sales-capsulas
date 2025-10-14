import { ArrowRight } from "lucide-react";

export default function HeroAwareness() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1C3B71] via-[#1F4086] to-[#0b1220] opacity-95 dark:opacity-100"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            Awareness Pitch · ObservAuto
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Lleva tu marca a la mente correcta, en el momento correcto.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Cápsulas de conocimiento activables por equipos comerciales y audiencias reales.
            Contenido enfocado, medición clara y una UX hecha para convertir curiosidad en intención.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              data-oa="cta-primary"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D70102] px-5 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2"
            >
              Explorar el demo
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#concept"
              className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2"
            >
              Cómo funciona
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">⚡ Carga veloz (Vite + Node 20)</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">🎯 Contenido accionable</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">📈 Medición lista para integrar</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
