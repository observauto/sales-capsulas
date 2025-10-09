import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-oa-blue to-oa-red">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-3xl px-6 text-center text-white pt-20 md:pt-0"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Comunicación que convierte conocimiento en confianza.</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Una Cápsula Observauto transforma información en influencia de marca.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#demo-contacto" className="inline-flex items-center justify-center rounded-pill bg-white text-oa-blue px-6 py-3 font-semibold shadow-soft hover:scale-[1.02] transition">
            Ver demo
          </a>
          <a href="#como-funciona" className="inline-flex items-center justify-center rounded-pill border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition">
            Cómo funciona
          </a>
        </div>
      </motion.div>
    </section>
  );
}