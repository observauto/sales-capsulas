import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SLIDES = [
  {
    title: 'Dashboard ejecutivo',
    description:
      'Resumen a pantalla completa con KPIs, objetivos y focos comerciales listos para la próxima reunión de directorio.',
    highlights: ['Retención minuto a minuto', 'Objetivos por vertical', 'CTA más activado'],
    colors: 'from-oa-blue/90 via-oa-blue to-oa-red/80'
  },
  {
    title: 'Historia interactiva',
    description:
      'Narrativa audiovisual con video, microcopy y datos clave diseñada para mobile-first con scroll mínimo.',
    highlights: ['Video corto', 'Microinteracciones', 'CTA contextual'],
    colors: 'from-[#0B1426] via-oa-red/80 to-oa-blue/70'
  },
  {
    title: 'Panel de seguimiento',
    description:
      'Segmentación de leads y registro de interacciones sincronizado con CRM y herramientas de marketing automation.',
    highlights: ['Alertas automáticas', 'Integración CRM', 'Exportación inmediata'],
    colors: 'from-oa-blue/80 via-oa-red/70 to-oa-red/60'
  },
  {
    title: 'Mapa de audiencias',
    description:
      'Visualización geográfica y por perfiles para priorizar territorios comerciales con datos en vivo.',
    highlights: ['Heatmap responsivo', 'Segmentos prioritarios', 'Benchmark regional'],
    colors: 'from-[#102345] via-[#1F3CFF] to-[#D70102]'
  },
  {
    title: 'Experiencia inmersiva',
    description:
      'Prototipo navegable que combina realidad aumentada ligera y componentes web para showroom remoto.',
    highlights: ['Anclajes 3D', 'Storyliving', 'Conversación guiada'],
    colors: 'from-[#061126] via-[#203A91] to-[#F75D4D]'
  },
  {
    title: 'Reporte retroactivo',
    description:
      'Entrega mensual con aprendizajes accionables, salud del pipeline y próximos experimentos sugeridos.',
    highlights: ['Insights clave', 'Health-score Awareness', 'Siguientes experiments'],
    colors: 'from-[#0B1426] via-[#2338B5] to-[#F03855]'
  }
]

const SLIDE_DURATION = 7_000

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
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = index => {
    setActiveIndex(index)
  }

  return (
    <section id="demo" className="relative bg-oa-ink py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,1,2,0.2),transparent_55%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-white/80">
              Demo visual Awareness
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Visualizaciones en constante evolución.</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Recorre los seis modos principales de Awareness. Cada slide combina componentes reutilizables inspirados en stats.observauto.com/pauta para activar nuevas conversaciones.
            </p>
          </div>
          <div className="flex gap-3">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-10 w-10 rounded-full border ${
                  activeIndex === index ? 'border-white bg-white/20 text-white' : 'border-white/30 bg-white/5 text-white/70'
                } text-xs font-semibold uppercase tracking-[0.2em] transition`}
                aria-label={`Ver ${slide.title}`}
                aria-current={activeIndex === index}
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
                  <div className="space-y-6" aria-live="polite">
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
                            key={`${activeIndex}-bar`}
                            initial={{ width: '0%' }}
                            animate={{ width: ['0%', '78%', '54%'] }}
                            transition={{ duration: 5.4, repeat: Infinity, repeatDelay: 1.2 }}
                            className="h-3 rounded-full bg-white/70"
                            style={{ margin: '18px 16px 0' }}
                          />
                          <motion.div
                            key={`${activeIndex}-card`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: [0.2, 1, 0.4], y: [12, 0, 4] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
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

        <div className="mt-8">
          <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.36em] text-white/60">
            <span>{SLIDES[activeIndex].title}</span>
            <span>
              {activeIndex + 1} / {SLIDES.length}
            </span>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-white/10">
            <motion.div
              key={activeIndex}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              className="h-1.5 rounded-full bg-gradient-to-r from-[#0B1426] via-[#1F3CFF] to-[#D70102]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
