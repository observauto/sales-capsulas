import React from 'react'
import Navbar from './components/Navbar'
import HeroAwareness from './components/HeroAwareness'
import ConceptSection from './components/ConceptSection'
import DashboardPreview from './components/DashboardPreview'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import DevNetworkPanel from './components/DevNetworkPanel'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B1220] dark:bg-[#0B1220] dark:text-white">
      <Navbar />
      <main>
        <HeroAwareness />
        <ConceptSection />
        <DashboardPreview />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* El panel solo se renderiza en desarrollo; en producción retorna null */}
      <DevNetworkPanel />
    </div>
  )
}
