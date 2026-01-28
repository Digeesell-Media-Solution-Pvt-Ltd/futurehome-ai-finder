import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BadgeCheck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getProjectUrl } from "@/lib/projectUrls";
import breezHero from "@/assets/projects/breez-hero.jpg";
import timezHero from "@/assets/projects/timez-hero.jpg";
import sparklzInterior from "@/assets/projects/sparklz-interior.jpg";
import shahrukhzLobby from "@/assets/projects/shahrukhz-lobby.jpg";
import aspirzPool from "@/assets/projects/aspirz-pool.jpg";
import bayz102Hero from "@/assets/projects/bayz102-hero.jpg";
import oasizHero from "@/assets/projects/oasiz-hero.jpg";
import oasiz2Hero from "@/assets/projects/oasiz2-hero.jpg";
import damacIslands2Hero from "@/assets/projects/damac-islands2-hero.jpg";
import damacDistrictHero from "@/assets/projects/damac-district-hero.jpg";
import chelseaResidencesHero from "@/assets/projects/chelsea-residences-hero.jpg";
import safaGateHero from "@/assets/projects/safa-gate-hero.jpg";
import riversideViewsHero from "@/assets/projects/riverside-views-hero.jpg";
import sunCityHero from "@/assets/projects/sun-city-hero.jpg";
import damacIslandsHero from "@/assets/projects/damac-islands-hero.jpg";
import shorelineHero from "@/assets/projects/shoreline-hero.jpg";

const projects = [
  {
    id: "shoreline",
    name: "Shoreline by DAMAC",
    developer: "DAMAC Properties",
    location: "Al Marjan Island",
    price: "On Request",
    priceLabel: "Starting from",
    image: shorelineHero,
    handover: "2028",
    roi: "8-10%",
    tags: ["Seafront", "Coastal Living"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-islands",
    name: "DAMAC Islands",
    developer: "DAMAC Properties",
    location: "Dubai Islands",
    price: "AED 2.75M",
    priceLabel: "Starting from",
    image: damacIslandsHero,
    handover: "2027",
    roi: "10-12%",
    tags: ["Island Villas", "Tropical Living"],
    verified: true,
    featured: true,
  },
  {
    id: "sun-city",
    name: "DAMAC Sun City",
    developer: "DAMAC Properties",
    location: "Dubai South",
    price: "On Request",
    priceLabel: "Starting from",
    image: sunCityHero,
    handover: "2028",
    roi: "7-9%",
    tags: ["Resort Style", "Wellness Living"],
    verified: true,
    featured: true,
  },
  {
    id: "riverside-views",
    name: "DAMAC Riverside Views",
    developer: "DAMAC Properties",
    location: "DAMAC Riverside",
    price: "AED 650K",
    priceLabel: "Starting from",
    image: riversideViewsHero,
    handover: "Q1 2029",
    roi: "7-9%",
    tags: ["Waterfront", "First Riverside"],
    verified: true,
    featured: true,
  },
  {
    id: "safa-gate",
    name: "Safa Gate",
    developer: "DAMAC Properties",
    location: "Sheikh Zayed Road",
    price: "AED 1.41M",
    priceLabel: "Starting from",
    image: safaGateHero,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["Park Views", "Luxury Tower"],
    verified: true,
    featured: true,
  },
  {
    id: "chelsea-residences",
    name: "Chelsea Residences",
    developer: "DAMAC Properties",
    location: "Dubai Maritime City",
    price: "AED 2.92M",
    priceLabel: "Starting from",
    image: chelseaResidencesHero,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["Branded Living", "Waterfront"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-district",
    name: "DAMAC District",
    developer: "DAMAC Properties",
    location: "DAMAC Hills, Dubai",
    price: "AED 1.59M",
    priceLabel: "Starting from",
    image: damacDistrictHero,
    handover: "Q3 2029",
    roi: "7-9%",
    tags: ["Mixed-Use", "Golf Community"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-islands-2",
    name: "DAMAC Islands 2",
    developer: "DAMAC Properties",
    location: "DAMAC Islands 2 Community",
    price: "AED 2.75M",
    priceLabel: "Starting from",
    image: damacIslands2Hero,
    handover: "2028",
    roi: "10-12%",
    tags: ["Waterfront Villas", "Island Living"],
    verified: true,
    featured: true,
  },
  {
    id: "oasiz2",
    name: "Oasiz 2 by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 699K",
    priceLabel: "Starting from",
    image: oasiz2Hero,
    handover: "Nov 2027",
    roi: "8-10%",
    tags: ["New Launch", "DSO"],
    verified: true,
    featured: true,
  },
  {
    id: "oasiz",
    name: "Oasiz by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 699K",
    priceLabel: "Starting from",
    image: oasizHero,
    handover: "Nov 2027",
    roi: "8-10%",
    tags: ["Affordable Luxury", "DSO"],
    verified: true,
    featured: true,
  },
  {
    id: "bayz102",
    name: "Bayz 102 by Danube",
    developer: "Danube Properties",
    location: "Business Bay",
    price: "AED 1.38M",
    priceLabel: "Starting from",
    image: bayz102Hero,
    handover: "June 2029",
    roi: "7-9%",
    tags: ["Business Bay", "Luxury"],
    verified: true,
    featured: true,
  },
  {
    id: "shahrukhz",
    name: "Shahrukhz by Danube",
    developer: "Danube Properties",
    location: "Sheikh Zayed Road",
    price: "AED 1.9M",
    priceLabel: "Starting from",
    image: shahrukhzLobby,
    handover: "2029",
    roi: "7-9%",
    tags: ["Commercial", "Grade-A"],
    verified: true,
    featured: true,
  },
  {
    id: "sparklz",
    name: "Sparklz by Danube",
    developer: "Danube Properties",
    location: "Al Furjan, Dubai",
    price: "AED 900K",
    priceLabel: "Starting from",
    image: sparklzInterior,
    handover: "Q2 2028",
    roi: "7-9%",
    tags: ["New Launch", "Smart Living"],
    verified: true,
    featured: true,
  },
  {
    id: "timez",
    name: "Timez by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 550K",
    priceLabel: "Starting from",
    image: timezHero,
    handover: "Q4 2027",
    roi: "8-10%",
    tags: ["New Launch", "Convertible"],
    verified: true,
    featured: true,
  },
  {
    id: "aspirz",
    name: "Aspirz by Danube",
    developer: "Danube Properties",
    location: "Dubai Sports City",
    price: "AED 850K",
    priceLabel: "Starting from",
    image: aspirzPool,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["New Launch", "Mixed-Use"],
    verified: true,
    featured: true,
  },
  {
    id: "breez",
    name: "Breez by Danube",
    developer: "Danube Properties",
    location: "Dubai Maritime City",
    price: "AED 700K",
    priceLabel: "Starting from",
    image: breezHero,
    handover: "Q4 2028",
    roi: "12-15%",
    tags: ["Featured", "Waterfront"],
    verified: true,
    featured: true,
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
            >
              Featured Properties
            </motion.span>
            <h2 className="text-heading text-foreground">
              Handpicked Off-Plan Projects
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Curated selection of premium off-plan investments from top developers, 
              verified by our experts and AI-analyzed for investment potential.
            </p>
          </div>
          <Button variant="gold-outline" className="rounded-full" asChild>
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
              className="group bubble-card"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                
                {/* Tags - Bubble style */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.featured && (
                    <span className="badge-tag flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  {project.tags.slice(0, 1).map((tag) => (
                    <span key={tag} className="badge-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verified Badge - Glass bubble */}
                {project.verified && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-3 right-3 w-10 h-10 glass-panel rounded-full flex items-center justify-center"
                  >
                    <BadgeCheck className="w-5 h-5 text-primary" />
                  </motion.div>
                )}

                {/* ROI Badge - Glass panel */}
                <div className="absolute bottom-3 left-3 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-foreground">{project.roi} ROI</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 relative z-10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{project.developer}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div>
                    <span className="text-xs text-muted-foreground block">{project.priceLabel}</span>
                    <span className="font-semibold text-foreground">{project.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground glass-panel px-2 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    {project.handover}
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="px-5 pb-5">
                <Button variant="gold-outline" size="sm" className="w-full rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" asChild>
                  <Link to={getProjectUrl(String(project.id), project.developer)}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Live Activity - Glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center mt-12"
        >
          <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">1,234 investors browsing right now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
