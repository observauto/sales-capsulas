import React from "react";

export default function CTA() {
  return (
    <section id="contacto" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-8 sm:p-10 bg-white">
          <h3 className="text-lg sm:text-xl font-semibold">
            ¿Listos para patrocinar Cápsulas ObservAuto?
          </h3>
          <p className="mt-2 text-gray-700 max-w-2xl">
            Conversemos sobre objetivos, presupuesto y calendario. Creamos un
            plan claro con entregables, KPIs y reportes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hola@observauto.com?subject=Inter%C3%A9s%20en%20C%C3%A1psulas%20ObservAuto"
              className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Escribir a ObservAuto
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Ver resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
