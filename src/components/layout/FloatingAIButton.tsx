import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingAIButton() {
  return (
    <Link to="/ai-search">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-50 lg:bottom-8 lg:right-8"
      >
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
          
          {/* Outer glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(214, 199, 161, 0.4)",
                "0 0 40px rgba(214, 199, 161, 0.6)",
                "0 0 20px rgba(214, 199, 161, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />
          
          {/* Main button */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-gold-dark to-primary animate-glow-rotate" />
            
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
            
            {/* Bubble highlight */}
            <div className="absolute top-1 left-2 w-6 h-3 bg-white/40 rounded-full blur-sm" />
            
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-charcoal group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="glass-panel px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-foreground">AI Search</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
