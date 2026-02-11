import { motion } from "framer-motion";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

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
                  to={area === "Dubai Marina" ? "/areas/dubai-marina" : area === "Downtown Dubai" ? "/areas/downtown-dubai" : area === "Palm Jumeirah" ? "/areas/palm-jumeirah" : `/projects?area=${encodeURIComponent(area)}`}
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
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
