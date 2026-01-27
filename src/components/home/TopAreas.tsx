import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const areas = [
  {
    id: 1,
    name: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    avgPrice: "AED 1.8M",
    roi: "8.5%",
    projects: 42,
    description: "Iconic waterfront living with stunning marina views",
  },
  {
    id: 2,
    name: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",
    avgPrice: "AED 2.5M",
    roi: "7.2%",
    projects: 38,
    description: "Heart of the city, home to Burj Khalifa",
  },
  {
    id: 3,
    name: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
    avgPrice: "AED 5.2M",
    roi: "6.8%",
    projects: 24,
    description: "Exclusive island living with private beaches",
  },
  {
    id: 4,
    name: "Business Bay",
    image: "https://images.unsplash.com/photo-1596360174634-80b8c4c86f8e?w=600&q=80",
    avgPrice: "AED 1.5M",
    roi: "9.1%",
    projects: 56,
    description: "Dynamic business hub with high rental demand",
  },
  {
    id: 5,
    name: "Dubai Hills",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    avgPrice: "AED 2.2M",
    roi: "7.8%",
    projects: 31,
    description: "Premium family-friendly community with golf course",
  },
  {
    id: 6,
    name: "JVC",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    avgPrice: "AED 850K",
    roi: "10.2%",
    projects: 67,
    description: "Affordable luxury with highest rental yields",
  },
];

export function TopAreas() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"
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
            Investment Hotspots
          </motion.span>
          <h2 className="text-heading text-foreground mb-4">
            Top Areas to Invest
          </h2>
          <p className="text-muted-foreground">
            Explore the UAE's most sought-after locations for off-plan investments, 
            each offering unique lifestyle benefits and strong ROI potential.
          </p>
        </motion.div>

        {/* Areas Grid - Bubble cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={area.image}
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Project count bubble */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-background">{area.projects} Projects</span>
                </motion.div>

                <h3 className="font-display text-2xl font-semibold text-background mb-2">
                  {area.name}
                </h3>
                
                {/* Description - Revealed on hover */}
                <p className="text-sm text-background/70 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {area.description}
                </p>

                {/* Stats - Glass bubbles */}
                <div className="flex items-center gap-3">
                  <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-background">From {area.avgPrice}</span>
                  </div>
                  <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-primary">{area.roi} ROI</span>
                  </div>
                </div>

                {/* Hover Arrow - Bubble style */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 w-12 h-12 glass-panel rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-background" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" className="rounded-full shadow-glow-gold" asChild>
            <Link to="/areas">
              Explore All Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
