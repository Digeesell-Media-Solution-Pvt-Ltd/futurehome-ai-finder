import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dubai.jpg";

const stats = [
  { value: "500+", label: "Projects Listed" },
  { value: "AED 2B+", label: "Portfolio Value" },
  { value: "15K+", label: "Happy Investors" },
  { value: "7", label: "Emirates Covered" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dubai luxury real estate skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-primary/30 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-background/90">RERA Licensed · DLD Verified Listings</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-background mb-6"
          >
            Where Your{" "}
            <span className="text-primary">Future Home</span>{" "}
            Begins
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-background/80 mb-10 font-body leading-relaxed"
          >
            Discover AI-powered property matching for off-plan investments 
            across all 7 Emirates of the UAE.
          </motion.p>

          {/* AI Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background/10 backdrop-blur-md border border-primary/20 rounded-2xl p-6 mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-background">AI Property Matching</p>
                <p className="text-xs text-background/60">Tell us what you're looking for</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="e.g., 2BR apartment in Dubai Marina under 2M with sea view..."
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="hero" size="xl" className="sm:w-auto" asChild>
                <Link to="/ai-search">
                  Search with AI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero-outline" asChild>
              <Link to="/projects">
                Browse All Projects
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/contact">
                Book Free Consultation
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-background/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-semibold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-background/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-background/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
