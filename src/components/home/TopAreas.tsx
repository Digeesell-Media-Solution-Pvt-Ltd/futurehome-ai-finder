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
    <section className="section-padding bg-cream">
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
            Investment Hotspots
          </span>
          <h2 className="text-heading text-foreground mb-4">
            Top Areas to Invest
          </h2>
          <p className="text-muted-foreground">
            Explore the UAE's most sought-after locations for off-plan investments, 
            each offering unique lifestyle benefits and strong ROI potential.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={area.image}
                alt={area.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{area.projects} Projects</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-background mb-2">
                  {area.name}
                </h3>
                <p className="text-sm text-background/70 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {area.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-background/80">
                    <Building className="w-4 h-4" />
                    <span>From {area.avgPrice}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">{area.roi} ROI</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-background" />
                </div>
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
          className="text-center mt-10"
        >
          <Button variant="gold" size="lg" asChild>
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
