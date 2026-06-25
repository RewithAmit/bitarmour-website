import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ComplianceSection from './components/ComplianceSection';
import ResourcesSection from './components/ResourcesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ScanlinesOverlay from './components/ScanlinesOverlay';

function App() {
  return (
    <div className="relative min-h-screen bg-space-deep">
      <ScanlinesOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ComplianceSection />
        <SectionDivider />
        <ResourcesSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
