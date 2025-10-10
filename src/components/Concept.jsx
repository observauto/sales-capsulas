// src/components/Concept.jsx
// Sección “Concepto”: jerarquía clara, tono Observauto, sin dependencias externas.
export default function Concept() {
  return (
    <section id="que-es" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Concepto
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">Awareness</span> es un
            <span className="font-semibold"> elevator pitch digital</span>:
            una experiencia breve, clara y convincente que conecta{" "}
            <span className="font-semibold">datos reales</span> con{" "}
            <span className="font-semibold">historias que venden</span>.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">🎯</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Posicionamiento inteligente
              </h3>
              <p className="mt-2 text-gray-600">
                Capitalizamos la audiencia de Observauto para elevar presencia de
                marca con foco en intención y afinidad.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">📈</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Comunicación + Métricas
              </h3>
              <p className="mt-2 text-gray-600">
                Mensajes claros y medibles. KPIs que importan: alcance, PR
                value, VTR, ER y retorno estimado.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">⚡</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Experiencia ágil
              </h3>
              <p className="mt-2 text-gray-600">
                Navegación rápida, jerarquía tipográfica y micro-interacciones
                que guían a la acción en menos de 2 minutos.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">🤝</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Confianza de marca
              </h3>
              <p className="mt-2 text-gray-600">
                Coherencia visual con el ecosistema Observauto para transmitir
                profesionalismo y consistencia.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Ver demo
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center rounded-full ring-1 ring-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              Resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
