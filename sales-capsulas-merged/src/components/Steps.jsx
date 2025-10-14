import { motion } from 'framer-motion'

const STEPS = [
  { title: 'Estrategia', text: 'Definimos el ángulo y el objetivo.' },
  { title: 'Diseño', text: 'Identidad visual + storytelling.' },
  { title: 'Publicación', text: 'Web, redes y vocería Observauto.' },
  { title: 'Medición', text: 'KPIs: alcance, clics, tráfico, ER.' },
]

export default function Steps() {
  return (
    <section id="como-funciona" className="relative bg-oa-white py-20">
      <span id="ingreso" aria-hidden="true" className="pointer-events-none absolute -top-24 h-1 w-1" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[0.7rem] uppercase tracking-[0.34em] text-oa-ink/50">Roadmap Awareness</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-oa-blue md:text-4xl">Simples, efectivas y medibles</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-oa-gray bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.42em] text-oa-red/80">{`Paso ${String(i + 1).padStart(2, '0')}`}</div>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-oa-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-oa-ink/75">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
