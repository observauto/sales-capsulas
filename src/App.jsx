import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import DemoSlider from "./components/DemoSlider";
import Concept from "./components/Concept";
import Philosophy from "./components/Philosophy";
import ResultsDashboard from "./components/ResultsDashboard";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <CTA />
      <DemoSlider />
      <Concept />
      <Philosophy />
      <ResultsDashboard />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
