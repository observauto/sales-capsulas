import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="demo-contacto" className="relative overflow-hidden bg-gradient-to-br from-oa-blue via-oa-blue to-oa-red py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10 shadow-soft backdrop-blur"
        >
          <div className="absolute -top-24 right-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/60">CTA Awareness</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Solicita el demo y coordinemos la activación.</h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Activamos cápsulas Awareness en menos de 10 días. Cuéntanos tu objetivo y armamos un roadmap junto a Observauto.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-white/70">
                <p>• Felipe Garan — RRPP & CTO</p>
                <p>• contacto@observauto.com</p>
                <p>• Santiago · 100% remoto para LatAm</p>
              </div>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/56971993925"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-pill bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.32em] text-oa-blue shadow-soft transition hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.72.45 3.4 1.302 4.885L2.25 21.75l5.05-1.32A9.705 9.705 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 17.25a7.45 7.45 0 0 1-3.814-1.03l-.273-.162-3.002.786.8-2.928-.178-.3A7.45 7.45 0 0 1 4.55 12c0-4.114 3.336-7.45 7.45-7.45 4.114 0 7.45 3.336 7.45 7.45 0 4.114-3.336 7.45-7.45 7.45Zm4.023-5.59c-.22-.112-1.294-.64-1.494-.712-.2-.074-.346-.112-.493.111-.147.223-.566.713-.694.861-.128.149-.256.168-.476.056-.22-.11-.93-.343-1.774-1.093-.656-.585-1.098-1.308-1.227-1.529-.128-.223-.014-.343.097-.454.1-.1.22-.257.33-.385.11-.128.146-.223.22-.371.074-.148.037-.278-.018-.39-.056-.111-.493-1.19-.676-1.63-.18-.433-.362-.373-.493-.38l-.42-.007c-.148 0-.39.055-.594.278-.2.223-.78.762-.78 1.856 0 1.093.8 2.15.912 2.298.11.149 1.576 2.405 3.822 3.274.535.206.953.329 1.278.42.537.171 1.026.147 1.414.089.431-.064 1.294-.53 1.477-1.04.183-.512.183-.951.128-1.041-.056-.092-.201-.148-.42-.26Z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <a
                href="mailto:contacto@observauto.com"
                className="flex items-center justify-center gap-3 rounded-pill border border-white/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-white/10"
              >
                Solicitar agenda en línea
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
