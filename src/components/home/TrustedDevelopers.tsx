import { motion } from "framer-motion";
import { BadgeCheck, Building2, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "Emaar Properties",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 124,
    trustScore: 4.9,
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: "Damac Properties",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 86,
    trustScore: 4.7,
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Nakheel",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 52,
    trustScore: 4.8,
    verified: true,
    featured: true,
  },
  {
    id: 4,
    name: "Meraas",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 38,
    trustScore: 4.6,
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "Dubai Properties",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 44,
    trustScore: 4.5,
    verified: true,
    featured: false,
  },
  {
    id: 6,
    name: "Sobha Realty",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    projects: 29,
    trustScore: 4.8,
    verified: true,
    featured: true,
  },
];

export function TrustedDevelopers() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Floating decorative bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            Trusted Partners
          </motion.span>
          <h2 className="text-heading text-foreground mb-4">
            UAE's Top Developers
          </h2>
          <p className="text-muted-foreground">
            We partner exclusively with verified developers known for quality construction, 
            on-time delivery, and exceptional project handovers.
          </p>
        </motion.div>

        {/* Developers Grid - Bubble cards with ripple */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link
                to={`/developers/${developer.id}`}
                className="group block p-6 bubble-card relative overflow-hidden"
              >
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Placeholder - Bubble style */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(245, 245, 245, 0.9) 0%, rgba(235, 235, 235, 0.7) 100%)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="absolute top-1 left-2 w-4 h-2 bg-white/60 rounded-full blur-sm" />
                  <Building2 className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                </motion.div>

                {/* Name */}
                <h3 className="font-medium text-sm text-center text-foreground mb-2 group-hover:text-primary transition-colors">
                  {developer.name}
                </h3>

                {/* Stats - Glass pills */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 glass-panel px-2 py-1 rounded-full">
                    <Award className="w-3 h-3" />
                    {developer.projects}
                  </span>
                  <span className="flex items-center gap-1 glass-panel px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    {developer.trustScore}
                  </span>
                </div>

                {/* Verified Badge */}
                {developer.verified && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="flex items-center justify-center gap-1 mt-3"
                  >
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-primary font-medium">Verified</span>
                  </motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats - Glass panels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "50+", label: "Verified Developers" },
              { value: "98%", label: "On-Time Delivery" },
              { value: "4.7", label: "Avg. Trust Score" },
              { value: "500+", label: "Active Projects" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-panel p-6 rounded-2xl text-center"
              >
                <div className="text-3xl font-display font-semibold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
