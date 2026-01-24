import { motion } from "framer-motion";
import { MapPin, TrendingUp, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const areas = [
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    avgPrice: "AED 1.8M",
    roi: "8.5%",
    projects: 42,
    description: "Iconic waterfront living with stunning marina views and vibrant nightlife.",
  },
  {
    id: "downtown",
    name: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    avgPrice: "AED 2.5M",
    roi: "7.2%",
    projects: 38,
    description: "Heart of the city, home to Burj Khalifa and Dubai Mall.",
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
    avgPrice: "AED 5.2M",
    roi: "6.8%",
    projects: 24,
    description: "Exclusive island living with private beaches and luxury resorts.",
  },
  {
    id: "business-bay",
    name: "Business Bay",
    image: "https://images.unsplash.com/photo-1596360174634-80b8c4c86f8e?w=800&q=80",
    avgPrice: "AED 1.5M",
    roi: "9.1%",
    projects: 56,
    description: "Dynamic business hub with high rental demand and modern towers.",
  },
  {
    id: "dubai-hills",
    name: "Dubai Hills",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    avgPrice: "AED 2.2M",
    roi: "7.8%",
    projects: 31,
    description: "Premium family-friendly community with world-class golf course.",
  },
  {
    id: "jvc",
    name: "Jumeirah Village Circle",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    avgPrice: "AED 850K",
    roi: "10.2%",
    projects: 67,
    description: "Affordable luxury with highest rental yields in Dubai.",
  },
  {
    id: "dubai-creek",
    name: "Dubai Creek Harbour",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    avgPrice: "AED 2.8M",
    roi: "8.0%",
    projects: 28,
    description: "Waterfront living with views of the iconic Dubai Creek Tower.",
  },
  {
    id: "meydan",
    name: "Meydan",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    avgPrice: "AED 1.6M",
    roi: "8.8%",
    projects: 19,
    description: "Prestigious district home to the famous Meydan Racecourse.",
  },
];

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Investment Locations
            </span>
            <h1 className="text-display text-foreground mb-4">
              Top Areas in the UAE
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore prime investment locations across Dubai and the UAE, 
              each offering unique lifestyle benefits and strong ROI potential.
            </p>
          </motion.div>

          {/* Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.article
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
              >
                <Link to={`/areas/${area.id}`}>
                  {/* Background Image */}
                  <img
                    src={area.image}
                    alt={area.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

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
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 p-10 bg-cream rounded-2xl"
          >
            <h2 className="text-2xl font-display font-medium text-foreground mb-4">
              Not Sure Which Area is Right for You?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let our AI analyze your preferences and investment goals to recommend 
              the perfect location for your off-plan investment.
            </p>
            <Button variant="hero" asChild>
              <Link to="/ai-search">
                Try AI Property Matcher
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
