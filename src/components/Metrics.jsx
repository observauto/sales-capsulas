import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const METRICS = [
  { label: 'Alcance', value: '↑ 30%' }, // Nueva métrica
  { label: 'VTR', value: '≈ 80%' },
  { label: 'Engagement', value: '≈ 18%' },
  { label: 'Tiempo', value: '≈ 2:45 min' },
  { label: 'Brand recall', value: '↑ 20%' },
  { label: 'PR Value', value: 'USD 6K–9K' },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }) }, [inView])

  return (
    <section id="resultados" className="bg-oa-red text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Resultados que hablan por sí mismos</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6" // Ajustado para 6 columnas
        >
          {METRICS.map(m => (
            <div key={m.label} className="rounded-2xl bg-white/10 p-6 backdrop-blur shadow-soft">
              <div className="text-2xl font-extrabold">{m.value}</div>
              <div className="mt-1 text-white/90">{m.label}</div>
            </div>
          ))}
        </motion.div>
        <p className="mt-6 text-sm opacity-90">* Promedios históricos; los resultados pueden variar.</p>
      </div>
    </section>
  )
}