import ContactCard from './ContactCard'; // Importar el nuevo componente

export default function CTA() {
  return (
    <section id="demo-contacto" className="relative bg-oa-blue py-20">
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold">Conozca el demo y hablemos.</h2>
        <p className="mt-2 opacity-90">Cada cápsula es una oportunidad para educar, fidelizar y construir reputación.</p>
        
        <div className="mt-8 flex flex-col gap-3 justify-center">
          {/* Tarjeta de presentación */}
          <ContactCard
            imageUrl="https://via.placeholder.com/150" // Placeholder para la foto de Felipe
            name="Felipe Garan"
            title="RRPP & CTO"
            email="FelipeGaran@observauto.com"
          />

          {/* Botón para contactar por WhatsApp (verde) */}
          <a href="https://wa.me/573053500400" target="_blank" rel="noreferrer" className="rounded-pill bg-[#25D366] text-white px-6 py-3 font-semibold shadow-soft hover:scale-[1.02] transition">
            Escribirme a WhatsApp
          </a>
          
          {/* Botón para ver demo online */}
          <a href="https://capsulas.observauto.com" target="_blank" rel="noreferrer" className="rounded-pill border border-white/70 px-6 py-3 font-semibold hover:bg-white/10 transition">
            Ver demo online
          </a>
        </div>
        <div className="mt-6 text-sm opacity-90">Felipe Garan · RRPP & CTO — info@observauto.com</div> {/* Actualizado el email aquí también */}
      </div>
    </section>
  )
}