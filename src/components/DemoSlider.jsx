import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SLIDES = [
  {
    title: 'Dashboard ejecutivo',
    description:
      'Resumen de métricas en un layout a pantalla completa inspirado en stats.observauto.com/pauta. Ideal para reuniones rápidas con dirección.',
    highlights: ['Retención minuto a minuto', 'Top historias vistas', 'CTA más presionado'],
    colors: 'from-oa-blue/90 via-oa-blue to-oa-red/80'
  },
  {
    title: 'Historia interactiva',
    description:
      'Timeline animado que combina video corto, texto y datos claves. Pensado para captar atención en mobile con scroll mínimo.',
    highlights: ['Video embed', 'Microcopy guiado', 'Botón de agenda'],
    colors: 'from-oa-red/90 via-oa-blue/80 to-oa-blue/60'
  },
  {
    title: 'Panel de seguimiento',
    description:
      'Capa táctica para equipos comerciales. Segmenta leads, registra interacciones y sincroniza con CRM.',
    highlights: ['Alertas automáticas', 'Integración CRM', 'Exportación 1 click'],
    colors: 'from-oa-blue/70 via-oa-red/80 to-oa-red/60'
  }
]

const slideTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
}

export default function DemoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(index => (index + 1) % SLIDES.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="demo" className="relative bg-oa-ink py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,1,2,0.2),transparent_55%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-pill bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-white/80">
              Demo visual
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Visualizaciones en constante evolución.</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Recorre los tres modos principales de Awareness. Cada slide muestra combinaciones de componentes reutilizables y adaptables a diferentes industrias.
            </p>
          </div>
          <div className="flex gap-3">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-10 w-10 rounded-full border ${
                  activeIndex === index ? 'border-white bg-white/20' : 'border-white/30 bg-white/5'
                } text-xs font-semibold uppercase tracking-[0.2em] transition`}
                aria-label={`Ver ${slide.title}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur">
          <div className="overflow-hidden rounded-[26px] bg-black/80 p-8">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} {...slideTransition} transition={{ duration: 0.5 }}>
                <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/50">{`Escenario ${activeIndex + 1}`}</p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">{SLIDES[activeIndex].title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-white/70">{SLIDES[activeIndex].description}</p>
                    </div>
                    <ul className="space-y-3 text-sm text-white/70">
                      {SLIDES[activeIndex].highlights.map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-oa-red/30 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white">
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative isolate flex h-full min-h-[260px] items-center justify-center">
                    <motion.div
                      key={`${activeIndex}-frame`}
                      initial={{ scale: 0.94, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`relative w-full max-w-[420px] overflow-hidden rounded-3xl bg-gradient-to-br ${SLIDES[activeIndex].colors} p-6 shadow-soft`}
                    >
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.32em] text-white/60">
                          <span>Observauto</span>
                          <span>Awareness live</span>
                        </div>
                        <div className="mt-4 h-32 rounded-2xl bg-white/10 backdrop-blur">
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: ['0%', '76%', '58%'] }}
                            transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.4 }}
                            className="h-3 rounded-full bg-white/70"
                            style={{ margin: '18px 16px 0' }}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: [0.2, 1, 0.4], y: [12, 0, 4] }}
                            transition={{ duration: 4.2, repeat: Infinity, repeatType: 'mirror' }}
                            className="mx-4 mt-6 rounded-2xl border border-white/30 bg-black/40 p-4"
                          >
                            <div className="text-sm font-semibold text-white">Indicador clave</div>
                            <div className="mt-2 text-xs text-white/70">+18% engagement / cápsula</div>
                          </motion.div>
                        </div>
                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                          <div className="rounded-xl border border-white/20 bg-black/40 p-4">
                            <div className="text-[0.62rem] uppercase tracking-[0.38em] text-white/50">Agenda</div>
                            <div className="mt-3 text-lg font-semibold leading-snug text-white">Ver reunión</div>
                          </div>
                          <div className="rounded-xl border border-white/20 bg-black/40 p-4">
                            <div className="text-[0.62rem] uppercase tracking-[0.38em] text-white/50">Recurso</div>
                            <div className="mt-3 text-lg font-semibold leading-snug text-white">Descargar PDF</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-oa-red/20 via-transparent to-white/10" aria-hidden />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.36em] text-white/60">
            <span>{SLIDES[activeIndex].title}</span>
            <span>
              {activeIndex + 1} / {SLIDES.length}
            </span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-white/10">
            <motion.div
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear' }}
              className="h-1 rounded-full bg-gradient-to-r from-oa-red via-oa-blue to-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
