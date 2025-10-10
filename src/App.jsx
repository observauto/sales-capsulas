import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import Hero from "./components/Hero"
import Concept from "./components/Concept"
import Philosophy from "./components/Philosophy"
import Steps from "./components/Steps"
import ResultsDashboard from "./components/ResultsDashboard"
import DemoSlider from "./components/DemoSlider"
import CTA from "./components/CTA"
import Footer from "./components/Footer.jsx"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import { navLinks } from "./config/navLinks"

export default function App() {
  return (
    <div className="bg-oa-white text-oa-ink">
      <Navbar />
      <MobileMenu links={navLinks} />
      <main className="overflow-hidden">
        <Hero />
        <Concept />
        <Philosophy />
        <Steps />
        <ResultsDashboard />
        <DemoSlider />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
