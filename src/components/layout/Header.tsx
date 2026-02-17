import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AISearchDialog } from "@/components/ai/AISearchDialog";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aiDialogOpen, setAiDialogOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useDarkLogo = isScrolled || !isHome;
  const { openLeadCapture } = useLeadCapture();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-luxury py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="relative flex flex-col items-start leading-none">
                  <div className="absolute -inset-3 rounded-lg bg-primary/10 blur-xl pointer-events-none" />
                  <span className={cn("relative text-[1.25rem] font-bold tracking-[0.15em] uppercase transition-colors duration-500", useDarkLogo ? "text-charcoal" : "text-primary")} style={{ fontFamily: "'Inter', sans-serif" }}>
                    OFFPLAN
                  </span>
                  <div className="relative w-full h-[2px] my-[2px] bg-primary transition-colors duration-500" />
                  <span className={cn("relative text-[0.6rem] font-medium tracking-[0.35em] uppercase transition-colors duration-500", useDarkLogo ? "text-charcoal" : "text-primary")} style={{ fontFamily: "'Inter', sans-serif" }}>
                    PROJECTS
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Button variant="gold-outline" size="sm" onClick={() => setAiDialogOpen(true)}>
                <Search className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">AI Search</span>
              </Button>
              <Button variant="gold" size="sm" onClick={() => openLeadCapture({ ctaType: "Hire a Consultant" })}>
                <Send className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Hire a Consultant</span>
              </Button>
            </motion.div>
          </nav>
        </div>
      </header>

      <AISearchDialog open={aiDialogOpen} onOpenChange={setAiDialogOpen} />
    </>
  );
}
