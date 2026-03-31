import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AISearchDialog } from "@/components/ai/AISearchDialog";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import heroImage from "@/assets/hero-dubai.jpg";
import { SmartImage } from "@/components/media/SmartImage";

export function HeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [heroQuery, setHeroQuery] = useState("");
  const { openLeadCapture } = useLeadCapture();
  const prefersReducedMotion = useReducedMotion();

  const handleHeroSearch = () => {
    if (heroQuery.trim()) {
      setDialogOpen(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={heroImage}
          alt="Dubai luxury real estate skyline"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          sizes="100vw"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" />
        
        {/* Animated light effects */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    x: [0, 100, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }
            }
            transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl"
          />
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -50, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }
            }
            transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl"
          />
        </div>
      </div>

      {/* Floating Decorative Bubbles */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/6 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/20"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10"
        />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-panel mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-background/90 font-medium">AI-Powered Property Discovery Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-background mb-6"
          >
            Discover UAE's Upcoming Projects with{" "}
            <span className="relative inline-block">
              <span className="text-primary">AI Precision</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-2 left-0 h-1 bg-primary/50 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-background/80 mb-10 font-body leading-relaxed"
          >
            We are an AI-powered platform showcasing new developments across the UAE.
            Explore, compare, and connect — directly with official sales teams. No middlemen, no brokerage.
          </motion.p>

          {/* AI Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(214, 199, 161, 0.4)",
                    "0 0 30px rgba(214, 199, 161, 0.6)",
                    "0 0 15px rgba(214, 199, 161, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-gold-dark rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 text-charcoal" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-background">AI Property Matching</p>
                <p className="text-xs text-background/60">Tell us what you're looking for</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={heroQuery}
                  onChange={(e) => setHeroQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleHeroSearch()}
                  placeholder="e.g., 2BR apartment in Dubai Marina under 2M..."
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-background/90 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                />
              </div>
              <Button variant="hero" size="xl" className="sm:w-auto" onClick={handleHeroSearch}>
                Search with AI
                <ArrowRight className="w-5 h-5 ml-2" />
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
            <Button variant="hero-outline" className="backdrop-blur-soft" asChild>
              <Link to="/projects">
                Browse All Projects
              </Link>
            </Button>
            <Button variant="hero-outline" className="backdrop-blur-soft" onClick={() => openLeadCapture({ ctaType: "Request Details" })}>
                Request Details
            </Button>
          </motion.div>
        </div>
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
          className="w-8 h-12 glass-panel rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* AI Chat Dialog */}
      <AISearchDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialQuery={heroQuery}
      />
    </section>
  );
}
