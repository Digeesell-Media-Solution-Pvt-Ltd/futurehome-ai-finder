import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function MobileLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal md:hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 20px rgba(214, 199, 161, 0.3)",
                "0 0 40px rgba(214, 199, 161, 0.6)",
                "0 0 20px rgba(214, 199, 161, 0.3)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mb-6"
          >
            <Sparkles className="w-8 h-8 text-charcoal" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-display text-primary tracking-widest uppercase"
          >
            FutureHome
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
