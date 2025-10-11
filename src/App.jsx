import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import ResultsDashboard from "./components/ResultsDashboard";
import Philosophy from "./components/Philosophy";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <ResultsDashboard />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
