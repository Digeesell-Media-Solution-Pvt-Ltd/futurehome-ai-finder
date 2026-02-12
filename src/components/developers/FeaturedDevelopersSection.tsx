import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Developer } from "@/data/developers";
import { DeveloperCard } from "./DeveloperCard";

interface FeaturedDevelopersSectionProps {
  developers: Developer[];
}

export function FeaturedDevelopersSection({ developers }: FeaturedDevelopersSectionProps) {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-8"
      >
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-display font-semibold text-foreground">
          Featured Developers
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {developers.map((developer, index) => (
          <DeveloperCard 
            key={developer.id} 
            developer={developer} 
            index={index}
            variant="featured"
          />
        ))}
      </div>
    </section>
  );
}
