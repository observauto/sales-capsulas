import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StepsContent from './components/StepsContent'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import ProductShowcaseContent from './components/ProductShowcaseContent'
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import SectionCard from './components/SectionCard';

export default function App() {
  return (
    <div className="text-oa-ink">
      <Navbar />
      <main>
        <Hero />
        <div id="que-es" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Concepto"
              title="Qué es"
              subtitle="Más que contenido, es educación, posicionamiento y conversión para marcas que lideran desde el conocimiento."
            />
          </div>
        </div>
        <div id="proposito" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Filosofía"
              title="Propósito"
              subtitle="“Una cápsula no vende un producto, construye autoridad.”"
            >
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li>• Aumenta awareness</li>
                <li>• Apoya ventas</li>
                <li>• Refuerza postventa</li>
                <li>• Mejora brand recall</li>
              </ul>
            </SectionCard>
          </div>
        </div>
        <div id="product-showcase" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Visualización"
              title="Demostración Visual del Producto"
              subtitle="Aquí mostraremos capturas de pantalla y videos de las Cápsulas Observauto en acción."
            >
              <ProductShowcaseContent />
            </SectionCard>
          </div>
        </div>
        <div id="como-funciona" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Proceso"
              title="Simples, efectivas y medibles"
              subtitle="Descubre cómo transformamos información en influencia de marca."
            >
              <StepsContent />
            </SectionCard>
          </div>
        </div>
        <Metrics />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}