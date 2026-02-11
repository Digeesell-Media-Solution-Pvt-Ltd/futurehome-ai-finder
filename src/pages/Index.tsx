import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FloatingAIButton } from "@/components/layout/FloatingAIButton";
import { MobileLoader } from "@/components/layout/MobileLoader";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TrustedDevelopers } from "@/components/home/TrustedDevelopers";
import { WhyOffPlan } from "@/components/home/WhyOffPlan";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileLoader />
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <TrustedDevelopers />
        <WhyOffPlan />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingAIButton />
    </div>
  );
};

export default Index;
