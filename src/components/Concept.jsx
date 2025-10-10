import { motion } from 'framer-motion'

const PILLARS = [
  {
    title: 'Contenido propietario',
    text: 'Editorializamos temas complejos con la voz de Observauto y co-creamos con la marca anfitriona.'
  },
  {
    title: 'Experiencia inmersiva',
    text: 'Diseñamos cápsulas responsivas con narrativa audiovisual, microinteracciones y lectura guiada.'
  },
  {
    title: 'Distribución inteligente',
    text: 'Activamos owned, paid y earned media para capitalizar el momentum de la historia.'
  }
]

export default function Concept() {
  return (
    <section id="que-es" className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-oa-blue/5 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:w-5/12"
        >
          <span className="inline-flex items-center rounded-pill bg-oa-blue/10 px-4 py-1 text-sm font-semibold text-oa-blue">
            Concepto
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-oa-blue md:text-4xl">
            Awareness es el elevator pitch digital de Observauto.
          </h2>
          <p className="mt-4 text-lg text-oa-ink/80">
            Cada cápsula sintetiza datos, visión y propuesta de valor en un formato interactivo que inspira confianza y acción.
          </p>
          <div className="mt-6 space-y-3 text-sm text-oa-ink/70">
            <p>• Storytelling de 2 minutos con foco en decisiones.</p>
            <p>• Integración con CRM y seguimiento de comportamiento.</p>
            <p>• Assets editables para equipos de ventas y marketing.</p>
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
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-oa-blue/10 blur-3xl" aria-hidden />
              <h3 className="text-xl font-bold text-oa-ink">{pillar.title}</h3>
              <p className="mt-3 text-base text-oa-ink/75">{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
