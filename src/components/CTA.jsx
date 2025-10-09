export default function CTA() {
  return (
    <section id="demo-contacto" className="relative bg-oa-blue py-20">
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Conozca el demo y hablemos.</h2>
        <p className="mt-2 opacity-90">Cada cápsula es una oportunidad para educar, fidelizar y construir reputación.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://capsulas.observauto.com" target="_blank" rel="noreferrer" className="rounded-pill bg-white text-oa-blue px-6 py-3 font-semibold shadow-soft hover:scale-[1.02] transition">Ver demo online</a>
          {/* Botón para contactar por WhatsApp */}
          <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noreferrer" className="rounded-pill border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition">Escribirme a WhatsApp</a>
        </div>
        <div className="mt-6 text-sm opacity-90">Felipe Garan · RRPP & CTO — contacto@observauto.com</div>
      </div>
    </section>
  )
}