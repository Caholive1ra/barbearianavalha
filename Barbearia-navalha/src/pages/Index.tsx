import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferentialSection from "@/components/DifferentialSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingBar from "@/components/FloatingBar";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <DifferentialSection />
        <TeamSection />
        <PricingSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingBar />
    </>
  );
};

export default Index;
