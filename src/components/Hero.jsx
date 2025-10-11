import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-oa-blue to-oa-red">
      <span id="premios" aria-hidden="true" className="pointer-events-none absolute -top-24 h-1 w-1" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-3xl px-6 pt-24 text-center text-white md:pt-0"
      >
        <span className="inline-flex items-center justify-center rounded-pill bg-white/15 px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-white/80">
          Awareness by Observauto
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl md:leading-[1.05]">
          Comunicación que convierte conocimiento en confianza.
        </h1>
        <h2 className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white/80 md:text-2xl md:leading-[1.4]">
          Una Cápsula Observauto transforma información en influencia de marca.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#demo" className="inline-flex items-center justify-center rounded-pill bg-white text-oa-blue px-6 py-3 font-semibold shadow-soft hover:scale-[1.02] transition">
            Ver demo
          </a>
          <a href="#como-funciona" className="inline-flex items-center justify-center rounded-pill border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition">
            Cómo funciona
          </a>
        </div>
      </motion.div>
    </section>
  )
}
