import { motion } from 'framer-motion'

const PRINCIPLES = [
  {
    tag: '01',
    title: 'Educación antes que oferta',
    description:
      'Instalamos conversaciones informadas que le dan contexto a la solución de la marca y habilitan decisiones conscientes.'
  },
  {
    tag: '02',
    title: 'Datos accionables',
    description:
      'Integramos dashboards para leer performance en tiempo real y detectar el siguiente mejor paso comercial.'
  },
  {
    tag: '03',
    title: 'Experiencias memorables',
    description:
      'Diseñamos interacciones micro y macro que refuerzan la identidad de Observauto en cada scroll.'
  }
]

export default function Philosophy() {
  return (
    <section id="proposito" className="relative overflow-hidden bg-gradient-to-br from-oa-blue via-oa-blue to-oa-ink py-24 text-white">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/10 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-pill bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-white/70">
              Filosofía
            </span>
            <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
              Propósito: traducir tecnología automotriz en historias que movilizan.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Awareness alinea equipos comerciales, marketing y C-Level alrededor de un mismo pitch con datos confiables y visualización estratégica.
            </p>
            <p className="mt-4 text-base uppercase tracking-[0.24em] text-white/60">
              “Una cápsula no vende un producto, construye autoridad.”
            </p>
          </motion.div>
          <div className="space-y-6">
            {PRINCIPLES.map((principle, index) => (
              <motion.article
                key={principle.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="absolute -left-14 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-oa-red/20 blur-3xl" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">{principle.tag}</span>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{principle.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
