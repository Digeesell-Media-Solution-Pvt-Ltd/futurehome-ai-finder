import { motion } from "framer-motion";
import { MapPin, TrendingUp, Cpu, Home, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { breadcrumbListSchema } from "@/lib/seo/schema-jsonld";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const investmentPoints = [
  { icon: Cpu, title: "Smart City Infrastructure", desc: "A technology-driven free zone with advanced digital infrastructure, smart services, and innovation hubs." },
  { icon: Home, title: "Freehold Communities", desc: "Freehold ownership available for all nationalities across a range of apartments, townhouses, and villas." },
  { icon: TrendingUp, title: "Affordable Entry Point", desc: "Some of the most competitive prices in Dubai — ideal for first-time investors seeking long-term appreciation." },
  { icon: Users, title: "Family-Friendly Lifestyle", desc: "Well-planned community with schools, parks, retail centres, and healthcare facilities within the district." },
];

const nearbyAreas = [
  { name: "Dubai Land", slug: "dubai-land" },
  { name: "Meydan", slug: "meydan" },
  { name: "Dubai Sports City", slug: "dubai-sports-city" },
  { name: "Business Bay", slug: "business-bay" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DubaiSiliconOasisArea() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Dubai Silicon Oasis Area Guide - Off-Plan Projects & Investments"
        description="Explore off-plan projects in Dubai Silicon Oasis. Smart city infrastructure, freehold communities, and affordable investment opportunities for long-term growth."
        canonicalPath="/areas/dubai-silicon-oasis"
      />
      <ProgrammaticJsonLd
        data={[breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: "Dubai Silicon Oasis", path: "/areas/dubai-silicon-oasis" },
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
                <span className="text-primary">Dubai Silicon Oasis</span> — The Smart City Hub
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                DSO offers a blend of technology parks, affordable living, and strong community infrastructure — ideal for long-term growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/projects?area=Dubai%20Silicon%20Oasis">Browse Projects<ArrowRight className="w-4 h-4 ml-1" /></Link>
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
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">About Silicon Oasis</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A government-planned free zone and residential district, Silicon Oasis combines business innovation with livable residential clusters and off-plan value. Home to hundreds of tech companies and startups, DSO has evolved into a self-sustained community where professionals live and work — creating a built-in tenant base for property investors.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-cream">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Investment Potential</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">Why Silicon Oasis?</h2>
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
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Explore DSO Projects</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Browse verified off-plan projects in Dubai Silicon Oasis from leading developers.</p>
            </motion.div>
            <div className="text-center">
              <Button variant="hero" asChild>
                <Link to="/projects?area=Dubai%20Silicon%20Oasis">View All DSO Projects<ArrowRight className="w-4 h-4 ml-2" /></Link>
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
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">Discover Value in Silicon Oasis</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">Let our AI show you affordable, smart-living projects in DSO.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/ai-search"><Sparkles className="w-5 h-5 mr-2" />Use AI Finder</Link>
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
