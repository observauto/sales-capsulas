import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const gaugeCircumference = 2 * Math.PI * 54
const gaugeTarget = gaugeCircumference * (1 - 0.82)

const BAR_LEVELS = [
  { label: 'Landing views', value: 76 },
  { label: 'Tiempo medio', value: 92 },
  { label: 'CTAs activados', value: 68 }
]

export default function ResultsDashboard() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.3 })
  const gaugeControls = useAnimation()
  const arrowControls = useAnimation()
  const barControls = useAnimation()

  useEffect(() => {
    if (inView) {
      gaugeControls.start({ strokeDashoffset: gaugeTarget, transition: { duration: 1.4, ease: 'easeOut' } })
      arrowControls.start({ rotate: -18, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } })
      barControls.start(index => ({ width: `${BAR_LEVELS[index].value}%`, transition: { duration: 0.8, delay: index * 0.15 } }))
    }
  }, [inView, gaugeControls, arrowControls, barControls])

  return (
    <section ref={sectionRef} id="resultados" className="relative bg-oa-white py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-oa-red/10 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-pill bg-oa-red/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-oa-red">
              Resultados
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-oa-ink md:text-4xl">
              Dashboards vivos para decisiones en minutos.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-oa-ink/75">
              Monitoreamos performance en tiempo real con paneles que replican la visual del portal de pauta y entregan contexto para Ventas y Marketing.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.38em] text-oa-ink/60">Promedios Q1-Q2 · Observauto</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-oa-gray/60 bg-white p-8 shadow-soft">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-oa-red/10 blur-3xl" aria-hidden />
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-oa-blue/70">Retención de Awareness</h3>
                <p className="mt-3 text-sm leading-relaxed text-oa-ink/60">
                  Retención promedio hasta el final de la cápsula Awareness en audiencias frías.
                </p>
              </div>
              <div className="relative flex h-44 w-44 items-center justify-center">
                <svg viewBox="0 0 140 140" className="h-44 w-44 rotate-90">
                  <circle cx="70" cy="70" r="54" fill="transparent" stroke="#EAEAEA" strokeWidth="14" />
                  <motion.circle
                    cx="70"
                    cy="70"
                    r="54"
                    fill="transparent"
                    stroke="#D70102"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={gaugeCircumference}
                    initial={{ strokeDashoffset: gaugeCircumference }}
                    animate={gaugeControls}
                  />
                </svg>
                <motion.div
                  initial={{ rotate: -90 }}
                  animate={arrowControls}
                  className="absolute h-1 w-20 origin-left rounded-full bg-oa-blue"
                />
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-oa-ink">82%</span>
                  <span className="text-[0.68rem] uppercase tracking-[0.38em] text-oa-ink/60">VTR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="relative overflow-hidden rounded-3xl border border-oa-gray/60 bg-white p-8 shadow-soft">
              <div className="absolute -right-14 -top-10 h-32 w-32 rounded-full bg-oa-blue/10 blur-3xl" aria-hidden />
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-oa-blue/70">Interacción por módulo</h3>
              <div className="mt-6 space-y-4">
                {BAR_LEVELS.map((bar, index) => (
                  <div key={bar.label}>
                    <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.32em] text-oa-ink/50">
                      <span>{bar.label}</span>
                      <span>{bar.value}%</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-oa-gray/40">
                      <motion.div
                        custom={index}
                        initial={{ width: 0 }}
                        animate={barControls}
                        className="h-3 rounded-full bg-gradient-to-r from-oa-blue via-oa-red to-oa-red/70"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-oa-gray/60 bg-white p-8 shadow-soft">
              <div className="absolute -left-16 bottom-0 h-28 w-28 rounded-full bg-oa-red/10 blur-3xl" aria-hidden />
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-oa-blue/70">Indicador de pipeline</h3>
              <div className="mt-6 flex items-center gap-6">
                <div className="relative h-24 w-24 rounded-full border-8 border-oa-gray/40 bg-white">
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-oa-blue/90 to-oa-red/70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.4, type: 'spring' }}
                      className="text-2xl font-extrabold text-white"
                    >
                      3.4x
                    </motion.span>
                  </div>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-oa-ink/70">
                  <p><strong className="text-oa-ink">3.4x</strong> pipeline respecto a benchmarks del sector automotriz.</p>
                  <p>80% de los leads solicitan seguimiento posterior a la cápsula.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-[0.68rem] uppercase tracking-[0.32em] text-oa-ink/50">* Visualización inspirada en stats.observauto.com/pauta — datos internos Observauto.</p>
      </div>
    </section>
  )
}
