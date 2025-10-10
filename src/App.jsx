// src/App.jsx
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

// Secciones (si alguna no existe aún, comenta su import y su uso)
import Concept from "./components/Concept.jsx";
import Philosophy from "./components/Philosophy.jsx";
import ResultsDashboard from "./components/ResultsDashboard.jsx";
import DemoSlider from "./components/DemoSlider.jsx";
import CTA from "./components/CTA.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />

      {/* Empuja el contenido por debajo del header fijo */}
      <main className="pt-16">
        {/* Hero mínimo para ancla */}
        <section id="hero" className="py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Awareness — Observauto
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Elevator pitch digital respaldado por datos.
            </p>
          </div>
        </section>

        <Concept />
        <Philosophy />

        {/* Resultados tipo dashboard */}
        <section id="resultados" className="py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ResultsDashboard />
          </div>
        </section>

        {/* Demo con slider */}
        <section id="demo" className="py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <DemoSlider />
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </section>
      </main>

      {/* FAB de WhatsApp (si el componente existe) */}
      <FloatingWhatsApp />

      <Footer />
    </>
  );
}
