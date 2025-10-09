import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Metrics from './components/Metrics'
import CTA from './components/CTA'
import ProductShowcase from './components/ProductShowcase' // Importar el nuevo componente

export default function App() {
  return (
    <div className="text-oa-ink">
      <Navbar />
      <main>
        <Hero />
        <section id="que-es" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-oa-blue">Qué es</h2>
            <p className="mt-4 text-lg text-oa-ink/90">
              Más que contenido, es educación, posicionamiento y conversión para marcas que lideran desde el conocimiento.
            </p>
          </div>
        </section>
        <section id="proposito" className="bg-oa-blue text-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold">Propósito</h2>
            <p className="mt-4 text-xl font-semibold">“Una cápsula no vende un producto, construye autoridad.”</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li>• Aumenta awareness</li>
              <li>• Apoya ventas</li>
              <li>• Refuerza postventa</li>
              <li>• Mejora brand recall</li>
            </ul>
          </div>
        </section>
        <ProductShowcase /> {/* Añadir la nueva sección aquí */}
        <Steps />
        <Metrics />
        <CTA />
      </main>
      <footer className="bg-oa-ink text-oa-gray py-8 text-center text-sm">© {new Date().getFullYear()} Observauto</footer>
    </div>
  )
}