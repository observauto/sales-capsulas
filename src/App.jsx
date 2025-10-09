import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StepsContent from './components/StepsContent'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import ProductSlider from './components/ProductSlider' // Importar el nuevo slider
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import SectionCard from './components/SectionCard';
import { Lightbulb, Target, TrendingUp, Users } from 'lucide-react'; // Importar iconos para Concepto/Propósito

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
              title="Comunicación Estratégica para el Sector Automotriz"
              subtitle="En Observauto, transformamos la información compleja en cápsulas de conocimiento digeribles y atractivas. Nuestro enfoque va más allá del contenido tradicional, creando piezas que educan, posicionan y generan confianza, esenciales para marcas que buscan liderar desde la autoridad y la innovación."
            >
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <Lightbulb size={24} className="text-oa-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-oa-ink">Educación de Valor</h3>
                    <p className="text-oa-ink/80 text-sm">Simplificamos temas complejos para que tu audiencia entienda y valore tu expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target size={24} className="text-oa-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-oa-ink">Posicionamiento de Marca</h3>
                    <p className="text-oa-ink/80 text-sm">Construimos tu reputación como líder de pensamiento en el mercado automotriz.</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
        <div id="proposito" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Filosofía"
              title="La Promesa de Valor: De la Información a la Influencia"
              subtitle="Nuestra filosofía se centra en la creencia de que el conocimiento es la moneda más valiosa en el mercado actual. Cada cápsula es una inversión en la inteligencia de tu audiencia, diseñada para resonar profundamente y generar un impacto duradero. No solo informamos, inspiramos acción y lealtad."
            >
              <p className="mt-4 text-lg text-oa-ink font-bold italic">“Una cápsula no vende un producto, construye autoridad y fideliza a tu cliente.”</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-oa-ink/90">
                <li className="flex items-center gap-2"><TrendingUp size={18} className="text-oa-red" /> Aumenta el reconocimiento de marca (Awareness)</li>
                <li className="flex items-center gap-2"><Users size={18} className="text-oa-red" /> Apoya directamente tus estrategias de ventas</li>
                <li className="flex items-center gap-2"><Lightbulb size={18} className="text-oa-red" /> Refuerza la relación postventa y la lealtad</li>
                <li className="flex items-center gap-2"><Target size={18} className="text-oa-red" /> Mejora significativamente el recuerdo de marca (Brand Recall)</li>
              </ul>
            </SectionCard>
          </div>
        </div>
        <div id="product-showcase" className="py-16 bg-oa-white">
          <div className="mx-auto max-w-6xl px-6">
            <SectionCard
              overline="Visualización"
              title="Demostración Visual del Producto"
              subtitle="Explora cómo nuestras Cápsulas Observauto cobran vida. Aquí te presentamos una galería interactiva de ejemplos que muestran la calidad y el impacto de nuestro trabajo."
            >
              <ProductSlider /> {/* Usar el nuevo slider */}
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