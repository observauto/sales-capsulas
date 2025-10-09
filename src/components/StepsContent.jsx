import { motion } from 'framer-motion'

const STEPS = [
  { title: 'Estrategia', text: 'Definimos el ángulo y el objetivo.' },
  { title: 'Diseño', text: 'Identidad visual + storytelling.' },
  { title: 'Publicación', text: 'Web, redes y vocería Observauto.' },
  { title: 'Medición', text: 'KPIs: alcance, clics, tráfico, ER.' },
]

export default function StepsContent() {
  return (
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
          <div className="text-oa-red font-bold">{`0${i+1}`}</div>
          <h3 className="mt-2 text-xl font-bold text-oa-ink">{s.title}</h3>
          <p className="mt-2 text-oa-ink/80">{s.text}</p>
        </motion.div>
      ))}
    </div>
  )
}