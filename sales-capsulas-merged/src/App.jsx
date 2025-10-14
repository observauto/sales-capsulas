import HeroAwareness from "./components/HeroAwareness.jsx";
import ConceptSection from "./components/ConceptSection.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1220] text-[#0B1220] dark:text-white">
      <HeroAwareness />
      <ConceptSection />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
