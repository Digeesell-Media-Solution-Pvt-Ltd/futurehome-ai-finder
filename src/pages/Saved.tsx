import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";

export default function Saved() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-display font-semibold text-foreground mb-3">
              No Saved Properties Yet
            </h1>
            <p className="text-muted-foreground mb-8">
              Start exploring and save your favorite off-plan projects to compare them later.
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
      <MobileNav />
    </div>
  );
}
