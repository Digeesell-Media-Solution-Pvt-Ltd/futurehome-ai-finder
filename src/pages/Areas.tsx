import { motion } from "framer-motion";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/seo/SeoHead";
import { CrawlContentSection } from "@/components/seo/CrawlContentSection";

const areas = [
  "Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "Business Bay",
  "Dubai Hills", "Jumeirah Village Circle", "Dubai Creek Harbour", "Meydan",
  "Al Marjan Island", "Dubai South", "Dubai Sports City", "Al Furjan",
  "Dubai Silicon Oasis", "Dubai Maritime City", "DAMAC Hills", "Sheikh Zayed Road",
  "Sobha Hartland", "Dubai Islands", "Dubai Land", "Motor City",
];

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Dubai Off-Plan Areas Guide | Explore Top Communities"
        description="Explore Dubai's top off-plan areas, compare community profiles, and jump into active project listings by location."
        canonicalPath="/areas"
      />
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Investment Locations
            </span>
            <h1 className="text-display text-foreground mb-4">
              Top Areas in the UAE
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore prime investment locations across Dubai and the UAE. 
              Browse projects listed in each area.
            </p>
          </motion.div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Link
                  to={{"Dubai Marina": "/areas/dubai-marina", "Downtown Dubai": "/areas/downtown-dubai", "Palm Jumeirah": "/areas/palm-jumeirah", "Business Bay": "/areas/business-bay", "Dubai Hills": "/areas/dubai-hills", "Jumeirah Village Circle": "/areas/jvc", "Dubai Creek Harbour": "/areas/dubai-creek-harbour", "Meydan": "/areas/meydan", "Al Marjan Island": "/areas/al-marjan-island", "Dubai South": "/areas/dubai-south", "Dubai Sports City": "/areas/dubai-sports-city", "Al Furjan": "/areas/al-furjan", "Dubai Silicon Oasis": "/areas/dubai-silicon-oasis", "DAMAC Hills": "/areas/damac-hills", "Sheikh Zayed Road": "/areas/sheikh-zayed-road"}[area] || `/projects?area=${encodeURIComponent(area)}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-luxury transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-medium text-foreground group-hover:text-primary transition-colors">
                      {area}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 p-10 bg-cream rounded-2xl"
          >
            <h2 className="text-2xl font-display font-medium text-foreground mb-4">
              Not Sure Which Area is Right for You?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let our AI analyze your preferences to recommend 
              the perfect location for your off-plan investment.
            </p>
            <Button variant="hero" asChild>
              <Link to="/ai-search">
                <Sparkles className="w-5 h-5 mr-2" />
                Try AI Property Matcher
              </Link>
            </Button>
          </motion.div>

          <CrawlContentSection
            title="How to evaluate off-plan areas in Dubai"
            paragraphs={[
              "Area-level analysis helps you avoid selecting projects in isolation. Community fundamentals such as transport access, planned infrastructure, retail depth, and inventory pipeline often shape long-term rental demand and resale behavior more than launch marketing alone. This page is designed as a location-first hub so users can map project options to the right district strategy.",
              "For end users, practical criteria include connectivity to work centers, school and lifestyle ecosystem fit, and expected handover timing relative to personal move-in plans. For investors, it is useful to compare price-per-square-foot trajectory, supply mix by unit type, and expected completion density in the same micro-market window.",
              "Each area route links to projects, developers, and market guides, creating crawlable topical clusters rather than isolated pages. This improves discoverability for both users and search engines while keeping internal links context-relevant and conversion-oriented.",
            ]}
            faqs={[
              {
                question: "What is the best way to compare two Dubai areas?",
                answer:
                  "Compare supply pipeline, current launch pricing, developer mix, and handover concentration within the same period.",
              },
              {
                question: "Do area pages connect to live project listings?",
                answer:
                  "Yes. Area pages provide direct links to active project pages and related developer hubs.",
              },
              {
                question: "Can area guides help with investment strategy?",
                answer:
                  "Yes. They provide location-level context that supports stronger shortlist decisions than project pages alone.",
              },
            ]}
            relatedLinks={[
              { label: "All projects", to: "/projects" },
              { label: "Developers", to: "/developers" },
              { label: "Dubai Marina area hub", to: "/off-plan-projects/dubai-marina" },
              { label: "Downtown area hub", to: "/off-plan-projects/downtown-dubai" },
              { label: "Area investment blog", to: "/blog/best-areas-invest-dubai" },
            ]}
          />
        </div>
      </main>

      <Footer />
      
    </div>
  );
}
