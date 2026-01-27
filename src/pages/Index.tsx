import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FloatingAIButton } from "@/components/layout/FloatingAIButton";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TopAreas } from "@/components/home/TopAreas";
import { TrustedDevelopers } from "@/components/home/TrustedDevelopers";
import { WhyOffPlan } from "@/components/home/WhyOffPlan";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <TopAreas />
        <TrustedDevelopers />
        <WhyOffPlan />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingAIButton />
    </div>
  );
};

export default Index;
