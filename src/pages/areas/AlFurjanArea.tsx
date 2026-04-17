import { motion } from "framer-motion";
import { MapPin, TrendingUp, Train, Users, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { breadcrumbListSchema } from "@/lib/seo/schema-jsonld";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const investmentPoints = [
  { icon: Train, title: "Metro & SZR Proximity", desc: "Direct access to the metro line and Sheikh Zayed Road — seamless connectivity to all major business hubs." },
  { icon: TrendingUp, title: "High Rental Occupancy", desc: "Consistently high occupancy rates driven by affordable rents and strong demand from working professionals." },
  { icon: Users, title: "Families & Professionals", desc: "A well-planned community with parks, schools, and retail — popular with families and young professionals alike." },
  { icon: DollarSign, title: "Attractive Off-Plan Prices", desc: "Competitive pricing for new developments makes Al Furjan an accessible entry point for value-focused investors." },
];

const nearbyAreas = [
  { name: "JVC", slug: "jvc" },
  { name: "Dubai Sports City", slug: "dubai-sports-city" },
  { name: "Dubai Marina", slug: "dubai-marina" },
  { name: "Dubai South", slug: "dubai-south" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AlFurjanArea() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Al Furjan Area Guide - Off-Plan Projects & Investments"
        description="Explore off-plan projects in Al Furjan. Affordable modern apartments and villas near metro lines with high rental demand and strong ROI for investors."
        canonicalPath="/areas/al-furjan"
      />
      <ProgrammaticJsonLd
        data={[breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: "Al Furjan", path: "/areas/al-furjan" },
        ])]}
      />

      <Header />

      <main className="pt-24 pb-20">
        <section className="relative overflow-hidden bg-charcoal text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light/80 to-charcoal" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
          <div className="container-luxury relative z-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Area Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6">
                <span className="text-primary">Al Furjan</span> — Dubai's Smart Suburb
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                Strategically located near metro lines, Al Furjan offers affordable modern apartments and villas with high rental demand.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/projects?area=Al%20Furjan">Browse Projects<ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link to="/ai-search"><Sparkles className="w-4 h-4 mr-1" />AI Property Match</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">About the Area</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">About Al Furjan</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A family-friendly, mixed-use neighborhood known for its mid-range villas and new vertical communities, Al Furjan is a top pick for value investors. With its own metro station, landscaped parks, community retail, and proximity to Ibn Battuta Mall, the area offers a balanced suburban lifestyle with excellent urban connectivity.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-cream">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Investment Potential</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">Why Invest in Al Furjan?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {investmentPoints.map((point, i) => (
                <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-luxury transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><point.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Projects</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">New Projects in Al Furjan</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Browse verified off-plan projects in Al Furjan from leading developers.</p>
            </motion.div>
            <div className="text-center">
              <Button variant="hero" asChild>
                <Link to="/projects?area=Al%20Furjan">View All Al Furjan Projects<ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-cream">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">Nearby Areas</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyAreas.map((area, i) => (
                <motion.div key={area.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={`/areas/${area.slug}`} className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-luxury transition-all duration-300 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors"><MapPin className="w-5 h-5 text-primary" /></div>
                    <span className="font-display font-medium text-foreground group-hover:text-primary transition-colors">{area.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 md:p-16 bg-charcoal rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">Find Your Al Furjan Investment</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">Use AI to get matched with the right developer projects in Al Furjan.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/ai-search"><Sparkles className="w-5 h-5 mr-2" />Start AI Match</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
