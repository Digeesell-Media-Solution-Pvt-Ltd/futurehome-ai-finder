import { motion } from "framer-motion";
import { MapPin, TrendingUp, Users, DollarSign, Home, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { breadcrumbListSchema } from "@/lib/seo/schema-jsonld";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const investmentPoints = [
  { icon: DollarSign, title: "Affordable Off-Plan Launches", desc: "Competitive entry prices with flexible payment plans — one of Dubai's most accessible areas for mid-budget investors." },
  { icon: Users, title: "Popular with Families & Tenants", desc: "Spacious layouts, community amenities, and sporting facilities make it a top choice for families and long-term tenants." },
  { icon: MapPin, title: "Close to JVC & Motor City", desc: "Strategic location with easy access to neighboring communities and multiple highway connections." },
  { icon: TrendingUp, title: "Excellent ROI for Investors", desc: "Strong rental yields driven by affordable rents and consistent tenant demand across the community." },
];

const nearbyAreas = [
  { name: "JVC", slug: "jvc" },
  { name: "Motor City", slug: "motor-city" },
  { name: "Dubai Hills", slug: "dubai-hills" },
  { name: "Al Furjan", slug: "al-furjan" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function DubaiSportsCityArea() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Dubai Sports City Area Guide - Off-Plan Projects & Investments"
        description="Explore affordable off-plan projects in Dubai Sports City. Strong rental yields, family-friendly community, and excellent ROI for mid-budget investors."
        canonicalPath="/areas/dubai-sports-city"
      />
      <ProgrammaticJsonLd
        data={[breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: "Dubai Sports City", path: "/areas/dubai-sports-city" },
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
                <span className="text-primary">Dubai Sports City</span> — Investment in Motion
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                One of Dubai's most accessible areas for mid-budget buyers and rental investors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/projects?area=Dubai%20Sports%20City">
                    Browse Projects
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link to="/ai-search">
                    <Sparkles className="w-4 h-4 mr-1" />
                    AI Property Match
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">About the Area</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">About Dubai Sports City</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known for its sporting facilities and affordable pricing, Dubai Sports City offers strong rental yields, spacious apartments, and access to multiple highways. The community features a cricket stadium, football academies, golf course, and a range of residential towers and townhouses — making it a vibrant, active lifestyle destination.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-cream">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Investment Potential</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">Why Consider Sports City?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {investmentPoints.map((point, i) => (
                <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-luxury transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Current Projects in Sports City</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Browse verified off-plan projects in Dubai Sports City from leading developers.</p>
            </motion.div>
            <div className="text-center">
              <Button variant="hero" asChild>
                <Link to="/projects?area=Dubai%20Sports%20City">
                  View All Sports City Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
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
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-4">Looking for Budget-Friendly Investment?</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">Let our AI help you find the best available properties in Sports City.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/ai-search">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Search Smart
                  </Link>
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
