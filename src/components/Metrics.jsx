import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Counter from './Counter';

const METRICS = [
  { label: 'Alcance', value: 30, unit: '%', type: 'percentage', prefix: '↑ ' },
  { label: 'VTR', value: 80, unit: '%', type: 'percentage', prefix: '≈ ' },
  { label: 'Engagement', value: 18, unit: '%', type: 'percentage', prefix: '≈ ' },
  { label: 'Tiempo', value: 2.45, unit: ' min', type: 'time', prefix: '≈ ' },
  { label: 'Brand recall', value: 20, unit: '%', type: 'percentage', prefix: '↑ ' },
  { label: 'PR Value', value: 6, unit: 'K–9K', type: 'currency', prefix: 'USD ' },
]

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section id="resultados" className="bg-oa-red text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Resultados que hablan por sí mismos</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="rounded-2xl bg-white p-6 shadow-soft flex flex-col items-center justify-center text-center h-40" // Fondo blanco y sombra suave
            >
              <div className="text-5xl font-extrabold text-oa-blue leading-none"> {/* Color azul para los números */}
                {m.prefix}
                {m.type === 'time' ? (
                  <span>{m.value}</span>
                ) : (
                  <Counter value={m.value} />
                )}
                {m.unit}
              </div>
              <div className="mt-2 text-oa-ink text-lg font-semibold uppercase tracking-wide">{m.label}</div> {/* Texto oscuro para las etiquetas */}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-10 text-center text-sm opacity-90">* Promedios históricos; los resultados pueden variar.</p>
      </div>
    </section>
  )
}