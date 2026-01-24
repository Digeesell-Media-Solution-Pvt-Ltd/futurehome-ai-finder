import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BadgeCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    name: "The Oasis by Emaar",
    developer: "Emaar Properties",
    location: "Dubai",
    price: "AED 2.5M",
    priceLabel: "Starting from",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    handover: "Q4 2026",
    roi: "8.2%",
    tags: ["New Launch", "Investor Pick"],
    verified: true,
  },
  {
    id: 2,
    name: "Palm Views Residences",
    developer: "Nakheel",
    location: "Palm Jumeirah",
    price: "AED 4.8M",
    priceLabel: "Starting from",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    handover: "Q2 2025",
    roi: "7.5%",
    tags: ["Ready Soon", "Premium"],
    verified: true,
  },
  {
    id: 3,
    name: "Marina Vista Tower",
    developer: "Damac",
    location: "Dubai Marina",
    price: "AED 1.8M",
    priceLabel: "Starting from",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    handover: "Q1 2027",
    roi: "9.1%",
    tags: ["10% Down", "High ROI"],
    verified: true,
  },
  {
    id: 4,
    name: "Creek Harbour Views",
    developer: "Emaar Properties",
    location: "Dubai Creek",
    price: "AED 3.2M",
    priceLabel: "Starting from",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    handover: "Q3 2026",
    roi: "7.8%",
    tags: ["Waterfront", "Luxury"],
    verified: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Featured Properties
            </span>
            <h2 className="text-heading text-foreground">
              Handpicked Off-Plan Projects
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Curated selection of premium off-plan investments from top developers, 
              verified by our experts and AI-analyzed for investment potential.
            </p>
          </div>
          <Button variant="gold-outline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group card-luxury"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verified Badge */}
                {project.verified && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                  </div>
                )}

                {/* ROI */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">{project.roi} ROI</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{project.developer}</span>
                  <span>·</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground block">{project.priceLabel}</span>
                    <span className="font-semibold text-foreground">{project.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {project.handover}
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="px-5 pb-5">
                <Button variant="gold-outline" size="sm" className="w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" asChild>
                  <Link to={`/projects/${project.id}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Live Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-10 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            1,234 investors browsing right now
          </span>
        </motion.div>
      </div>
    </section>
  );
}
