import { Suspense, lazy } from "react";
import { SeoHead } from "@/components/seo/SeoHead";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { organizationSchema, webSiteSchemaSearchAction } from "@/lib/seo/schema-jsonld";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingAIButton } from "@/components/layout/FloatingAIButton";
import { HeroSection } from "@/components/home/HeroSection";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getHomepageInternalLinks } from "@/lib/internal-linking/buildInternalLinks";

const FeaturedProjects = lazy(() =>
  import("@/components/home/FeaturedProjects").then((m) => ({ default: m.FeaturedProjects })),
);
const TrustedDevelopers = lazy(() =>
  import("@/components/home/TrustedDevelopers").then((m) => ({ default: m.TrustedDevelopers })),
);
const WhyOffPlan = lazy(() =>
  import("@/components/home/WhyOffPlan").then((m) => ({ default: m.WhyOffPlan })),
);
const CTASection = lazy(() =>
  import("@/components/home/CTASection").then((m) => ({ default: m.CTASection })),
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="UAE Off-Plan Projects | AI-Powered Property Discovery"
        description="Discover the latest off-plan projects across Dubai, Abu Dhabi and Ras Al Khaimah. AI-powered search, verified developers, direct connections — no agent fees."
        canonicalPath="/"
      />
      <ProgrammaticJsonLd data={[organizationSchema(), webSiteSchemaSearchAction()]} />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-24" />}>
          <FeaturedProjects />
          <TrustedDevelopers />
          <WhyOffPlan />
        </Suspense>
        <div className="container-luxury py-12 md:py-16">
          <InternalLinkCluster
            title="Explore Dubai off-plan by area, developer, and strategy"
            intro="Structured internal links help you compare high-intent hubs—prioritising crawlable routes and keyword-aligned anchors (not generic “click here”)."
            links={getHomepageInternalLinks()}
            inlineContextCount={2}
          />
        </div>
        <Suspense fallback={<div className="h-20" />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <FloatingAIButton />
    </div>
  );
};

export default Index;
