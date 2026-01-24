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
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Trusted Partners
          </span>
          <h2 className="text-heading text-foreground mb-4">
            UAE's Top Developers
          </h2>
          <p className="text-muted-foreground">
            We partner exclusively with verified developers known for quality construction, 
            on-time delivery, and exceptional project handovers.
          </p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/developers/${developer.id}`}
                className="group block p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-luxury transition-all duration-300"
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Building2 className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Name */}
                <h3 className="font-medium text-sm text-center text-foreground mb-2 group-hover:text-primary transition-colors">
                  {developer.name}
                </h3>

                {/* Stats */}
                <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {developer.projects}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    {developer.trustScore}
                  </span>
                </div>

                {/* Verified Badge */}
                {developer.verified && (
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs text-primary font-medium">Verified</span>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-10 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-semibold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Verified Developers</div>
            </div>
            <div>
              <div className="text-3xl font-display font-semibold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-display font-semibold text-foreground mb-1">4.7</div>
              <div className="text-sm text-muted-foreground">Avg. Trust Score</div>
            </div>
            <div>
              <div className="text-3xl font-display font-semibold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
