import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingAIButton } from "@/components/layout/FloatingAIButton";
import { MobileLoader } from "@/components/layout/MobileLoader";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TrustedDevelopers } from "@/components/home/TrustedDevelopers";
import { WhyOffPlan } from "@/components/home/WhyOffPlan";
import { CTASection } from "@/components/home/CTASection";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getHomepageInternalLinks } from "@/lib/internal-linking/buildInternalLinks";

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
        <div className="container-luxury py-12 md:py-16">
          <InternalLinkCluster
            title="Explore Dubai off-plan by area, developer, and strategy"
            intro="Structured internal links help you compare high-intent hubs—prioritising crawlable routes and keyword-aligned anchors (not generic “click here”)."
            links={getHomepageInternalLinks()}
            inlineContextCount={2}
          />
        </div>
        <CTASection />
      </main>
      <Footer />
      <FloatingAIButton />
    </div>
  );
};

export default Index;
