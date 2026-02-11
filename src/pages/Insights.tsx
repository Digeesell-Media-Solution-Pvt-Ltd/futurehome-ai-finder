import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-display text-foreground mb-4">
              Market Insights
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Coming Soon
            </p>
            <p className="text-muted-foreground mb-8">
              We're preparing expert analysis, market trends, and investment 
              guides for UAE off-plan real estate. Stay tuned.
            </p>
            <Button variant="gold" asChild>
              <Link to="/projects">
                Browse Projects
                <ArrowRight className="w-4 h-4 ml-2" />
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
