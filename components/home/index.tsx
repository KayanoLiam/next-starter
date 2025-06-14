import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedBySection from "@/components/home/TrustedBySection";

export default function HomeComponent() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
