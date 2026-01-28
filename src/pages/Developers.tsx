import { motion } from "framer-motion";
import { BadgeCheck, Building2, Award, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const developers = [
  {
    id: 7,
    name: "Danube Properties",
    description: "Architects of tomorrow's dreams, building today's legacies with 1% payment plans.",
    projects: 49,
    currentProjects: ["Breez", "Timez", "Sparklz", "Shahrukhz", "Aspirz"],
    trustScore: 4.7,
    verified: true,
    deliveryRate: "96%",
    featured: true,
  },
  {
    id: 1,
    name: "Emaar Properties",
    description: "Dubai's largest developer, known for iconic projects like Burj Khalifa and Dubai Mall.",
    projects: 124,
    trustScore: 4.9,
    verified: true,
    deliveryRate: "99%",
    featured: false,
  },
  {
    id: 2,
    name: "Damac Properties",
    description: "Luxury real estate developer with branded residences by Versace and Cavalli.",
    projects: 86,
    trustScore: 4.7,
    verified: true,
    deliveryRate: "96%",
    featured: false,
  },
  {
    id: 3,
    name: "Nakheel",
    description: "Master developer of Palm Jumeirah and The World Islands.",
    projects: 52,
    trustScore: 4.8,
    verified: true,
    deliveryRate: "98%",
    featured: false,
  },
  {
    id: 4,
    name: "Meraas",
    description: "Creator of Bluewaters Island, City Walk, and La Mer.",
    projects: 38,
    trustScore: 4.6,
    verified: true,
    deliveryRate: "97%",
    featured: false,
  },
  {
    id: 5,
    name: "Dubai Properties",
    description: "Developer of Business Bay and Jumeirah Beach Residence.",
    projects: 44,
    trustScore: 4.5,
    verified: true,
    deliveryRate: "95%",
    featured: false,
  },
  {
    id: 6,
    name: "Sobha Realty",
    description: "Premium developer known for exceptional quality and craftsmanship.",
    projects: 29,
    trustScore: 4.8,
    verified: true,
    deliveryRate: "99%",
    featured: false,
  },
  {
    id: 8,
    name: "Azizi Developments",
    description: "Fast-growing developer with projects across Dubai's key locations.",
    projects: 67,
    trustScore: 4.4,
    verified: true,
    deliveryRate: "94%",
    featured: false,
  },
  {
    id: 9,
    name: "Ellington Properties",
    description: "Design-led developer focused on lifestyle and community.",
    projects: 18,
    trustScore: 4.6,
    verified: true,
    deliveryRate: "97%",
    featured: false,
  },
];

export default function DevelopersPage() {
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
              Trusted Partners
            </span>
            <h1 className="text-display text-foreground mb-4">
              UAE's Leading Developers
            </h1>
            <p className="text-lg text-muted-foreground">
              We partner exclusively with verified developers known for quality 
              construction, on-time delivery, and exceptional customer service.
            </p>
          </motion.div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.map((developer, index) => (
              <motion.article
                key={developer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-luxury transition-all duration-300"
              >
                <Link to={`/developers/${developer.id}`}>
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20 bg-muted rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Building2 className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg font-medium text-center text-foreground mb-2 group-hover:text-primary transition-colors">
                    {developer.name}
                  </h3>

                  {/* Verified Badge */}
                  {developer.verified && (
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <BadgeCheck className="w-4 h-4 text-primary" />
                      <span className="text-xs text-primary font-medium">Verified Developer</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
                    {developer.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Award className="w-3 h-3 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{developer.projects}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-sm font-semibold text-foreground">{developer.trustScore}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Rating</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-foreground">{developer.deliveryRate}</span>
                      <span className="text-xs text-muted-foreground block">Delivery</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-10 bg-charcoal rounded-2xl text-background"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
              <div>
                <div className="text-4xl font-display font-semibold text-primary mb-1">50+</div>
                <div className="text-sm text-background/70">Verified Developers</div>
              </div>
              <div>
                <div className="text-4xl font-display font-semibold text-primary mb-1">98%</div>
                <div className="text-sm text-background/70">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-display font-semibold text-primary mb-1">4.7</div>
                <div className="text-sm text-background/70">Avg. Trust Score</div>
              </div>
              <div>
                <div className="text-4xl font-display font-semibold text-primary mb-1">500+</div>
                <div className="text-sm text-background/70">Active Projects</div>
              </div>
            </div>
            <div className="text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/projects">
                  Browse All Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
