import React from "react";

export default function ResultsDashboard() {
  return (
    <section id="resultados" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Resultados y señales</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Engagement esperado</p>
            <p className="mt-1 text-2xl font-semibold">1.0–1.5% ER</p>
            <p className="mt-2 text-sm text-gray-600">
              Benchmarks de contenido estático mobile-first en vertical automotriz.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Cobertura y frecuencia</p>
            <p className="mt-1 text-2xl font-semibold">Consistente</p>
            <p className="mt-2 text-sm text-gray-600">
              Paquetes evergreen con rotación y actualizaciones por temporada.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Atribución</p>
            <p className="mt-1 text-2xl font-semibold">Trazable</p>
            <p className="mt-2 text-sm text-gray-600">
              UTM/QR y deep-links para campañas y fuerza comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
