import React from "react";

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1C3B71]">¿Qué es una Cápsula ObservAuto?</h2>
          <p className="mt-4 text-lg text-[#0B1220]">
            Un módulo de conocimiento, estático y optimizado para móviles, que resuelve una duda concreta del usuario en menos
            de 90 segundos. Información verificada y accionable para ayudar a vender mejor y más rápido.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Enfoque quirúrgico",
              desc:
                "Cada cápsula ataca una fricción: producto, posventa, financiación, EV, seguridad, etc.",
            },
            {
              title: "UX móvil primero",
              desc: "Diseño legible, interacción mínima, jerarquía clara y enlaces a profundización.",
            },
            {
              title: "Valor comercial",
              desc: "Habilita al equipo con argumentos simples y medibles para cerrar oportunidades.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-[#F3F4F6] p-6">
              <h3 className="font-bold text-[#1F4086]">{f.title}</h3>
              <p className="mt-2 text-[#0B1220]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
