import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large glow orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating bubbles */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 left-1/6 w-6 h-6 rounded-full bg-primary/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/6 w-4 h-4 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-primary/15 backdrop-blur-sm"
        />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass card container */}
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl" />
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 relative"
              style={{
                background: "linear-gradient(135deg, rgba(214, 199, 161, 0.2) 0%, rgba(214, 199, 161, 0.1) 100%)",
                border: "1px solid rgba(214, 199, 161, 0.3)",
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(214, 199, 161, 0.3)",
                    "0 0 20px rgba(214, 199, 161, 0.5)",
                    "0 0 10px rgba(214, 199, 161, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center"
              >
                <Sparkles className="w-3.5 h-3.5 text-charcoal" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">AI-Powered Property Discovery</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-heading text-foreground mb-6 relative z-10"
            >
              Explore Your Next{" "}
              <span className="relative inline-block">
                <span className="text-primary">Investment Opportunity</span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-1 left-0 h-1 bg-primary/40 rounded-full"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10"
            >
              Use our AI-powered tools to discover projects that match your
              preferences and connect directly with official sales teams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            >
              <Button variant="hero" size="xl" className="rounded-full shadow-glow-gold" asChild>
                <Link to="/ai-search">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start AI Search
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="rounded-full" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Connect with Sales Team
                </Link>
              </Button>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <div className="glass-panel inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Discovery platform
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                No obligations
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                Connect directly
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
