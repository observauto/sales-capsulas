import React from "react";

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-8 sm:p-10 bg-gradient-to-br from-white to-gray-50">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            ObservAuto Awareness
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Un sitio de presentación ejecutiva (elevator pitch) para marcas y agencias:
            el valor de patrocinar <strong>Cápsulas ObservAuto</strong>, con argumentos,
            casos y señales de tracción.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#resultados"
              className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Ver resultados
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Hablar con ObservAuto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
