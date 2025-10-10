import { motion } from 'framer-motion'

const PILLARS = [
  {
    title: 'Contenido propietario',
    description:
      'Investigamos datos y testimonios internos para articular historias con la voz de Observauto y la marca anfitriona.'
  },
  {
    title: 'Experiencia inmersiva',
    description:
      'Narrativa audiovisual, microinteracciones y layouts responsivos que invitan a explorar en menos de dos minutos.'
  },
  {
    title: 'Distribución inteligente',
    description:
      'Se orquesta owned, paid y earned media con piezas reutilizables para cada equipo del funnel.'
  }
]

export default function Concept() {
  return (
    <section id="que-es" className="relative bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-oa-blue/10 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:w-5/12"
        >
          <span className="inline-flex items-center rounded-full bg-oa-blue/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-oa-blue">
            Concepto Awareness
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight text-oa-ink md:text-4xl">
            Awareness traduce analítica en una experiencia guiada y memorable.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-oa-ink/80">
            Articulamos datos, visión de producto y storytelling audiovisual para que cada persona comprenda la propuesta Observauto sin fricciones desde el primer minuto.
          </p>
          <div className="mt-8 space-y-5 rounded-3xl border border-oa-gray/60 bg-white/80 p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.34em] text-oa-ink/60">Qué incluye</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-oa-ink/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-oa-blue/15 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-oa-blue">
                  UX
                </span>
                <span>Diseño modular inspirado en stats.observauto.com/pauta.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-oa-blue/15 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-oa-blue">
                  DS
                </span>
                <span>Biblioteca de componentes con tipografía condensada y motion suave.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-oa-blue/15 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-oa-blue">
                  KPIs
                </span>
                <span>Entrega de dashboards para lectura compartida entre Ventas y Marketing.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid flex-1 gap-6 md:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-oa-gray/70 bg-gradient-to-br from-white via-white to-oa-gray/40 p-8 shadow-soft"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-oa-blue/10 blur-3xl" aria-hidden />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-oa-blue/70">{`Pilar ${index + 1}`}</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-oa-ink">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-oa-ink/75">{pillar.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-oa-blue/20 bg-oa-blue/5 px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-oa-blue/80">
                <span className="text-xs">★</span>
                <span>Observauto inside</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
