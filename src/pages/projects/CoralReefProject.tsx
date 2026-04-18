import { motion } from "framer-motion";
import { SeoHead } from "@/components/seo/SeoHead";
import { 
  ArrowRight, 
  Building2, 
  Calendar, 
  Check, 
  Download, 
  Home, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  TrendingUp,
  Waves,
  Film,
  Heart,
  Palette,
  Shell,
  Anchor,
  Ship,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import coralReefHero from "@/assets/projects/coral-reef-hero.jpg";
import coralReefInterior from "@/assets/projects/coral-reef-interior.jpg";
import coralReefPool from "@/assets/projects/coral-reef-pool.jpg";
import coralReefCinema from "@/assets/projects/coral-reef-cinema.jpg";

const quickStats = [
  { label: "Starting Price", value: "On Request", icon: TrendingUp },
  { label: "Handover", value: "Enquire Now", icon: Calendar },
  { label: "Unit Type", value: "1-3 BR", icon: Home },
  { label: "Location", value: "Maritime City", icon: MapPin },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "Ocean-Inspired Design", price: "Available on Request" },
  { type: "2 Bedroom Apartment", size: "Art & Nature Interiors", price: "Available on Request" },
  { type: "3 Bedroom Apartment", size: "Premium Sea Views", price: "Available on Request" },
];

const amenities = [
  { name: "Cascading Pools", icon: Waves, description: "Multi-level ocean-inspired pool experience" },
  { name: "Floating Cinema", icon: Film, description: "Unique waterfront movie experience" },
  { name: "Serene Spa", icon: Heart, description: "Rejuvenating treatments by the sea" },
  { name: "Art Galleries", icon: Palette, description: "Curated spaces celebrating art and nature" },
  { name: "Marine Lounge", icon: Shell, description: "Ocean-themed social and relaxation spaces" },
  { name: "Waterfront Promenade", icon: Anchor, description: "Scenic walks along the maritime edge" },
  { name: "Yacht Club Access", icon: Ship, description: "Premium maritime lifestyle amenities" },
  { name: "Sensory Gardens", icon: Sparkles, description: "Nature-inspired sensory journey spaces" },
];

const locationHighlights = [
  { place: "Dubai Cruise Terminal", time: "5 mins" },
  { place: "Jumeirah Beach", time: "10 mins" },
  { place: "Dubai Mall & Burj Khalifa", time: "15 mins" },
  { place: "DIFC", time: "10 mins" },
  { place: "Dubai Marina", time: "15 mins" },
  { place: "Dubai International Airport", time: "20 mins" },
];

const investmentHighlights = [
  "Waterfront living in Dubai Maritime City – a new coastal destination",
  "Ocean-inspired design celebrating art and nature",
  "Unique amenities: cascading pools and floating cinema",
  "1-3 BR apartments with endless sea views",
  "Emerging waterfront district with strong growth potential",
  "DAMAC developer credibility and 20+ years track record",
];

const galleryImages = [
  { src: coralReefHero, title: "Tower Exterior" },
  { src: coralReefInterior, title: "Ocean-Inspired Interior" },
  { src: coralReefPool, title: "Cascading Pools" },
  { src: coralReefCinema, title: "Floating Cinema" },
];

export default function CoralReefProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Coral Reef by DAMAC | Waterfront Luxury in Dubai Maritime City"
        description="Discover Coral Reef by DAMAC – ocean-inspired luxury 1-3 BR apartments in Dubai Maritime City with cascading pools, floating cinema, and endless sea views."
        canonicalPath="/projects/damac/coral-reef"
      />


      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={coralReefHero} alt="Coral Reef by DAMAC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-primary">Coral Reef</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Waterfront</span>
                <span className="badge-tag">Maritime City</span>
                <span className="badge-tag">Ocean-Inspired</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Coral Reef
              </h1>
              <p className="text-xl text-background/90 mb-2">
                An Aquatic Haven Where Art Meets the Sea
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Dubai Maritime City, Dubai, UAE</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-4 rounded-xl text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-background">{stat.value}</div>
                    <div className="text-xs text-background/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" className="rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  View Project Details
                </Button>
                <Button variant="gold-outline" size="lg" className="rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button variant="gold-outline" size="lg" className="rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ocean Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Where Art and Life Blur Into the Beauty of the Sea</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Endless Sea Views", "Ocean-Inspired Art", "Sensory Living"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 glass-panel rounded-full text-background/90 font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Project Overview
              </span>
              <h2 className="text-heading text-foreground mb-6">
                An Aquatic Haven in Maritime City
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  With endless sea views and unmatched luxury, Coral Reef in Dubai Maritime City 
                  immerses you in an aquatic haven. Inspired by the ocean, each one- to three-bedroom 
                  apartment celebrates art and nature.
                </p>
                <p>
                  Residents enjoy a unique lifestyle with cascading pools, a floating cinema, and a 
                  serene spa. This is more than a home — it's an experience that blurs the lines between 
                  art and life, offering a sensory journey that connects you to the ever-changing beauty 
                  of the sea.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">DAMAC Properties</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={coralReefInterior}
                alt="Coral Reef Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <Waves className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">Sea View</div>
                    <div className="text-sm text-muted-foreground">Waterfront Living</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Available Units
            </span>
            <h2 className="text-heading text-foreground">
              Ocean-Inspired Residences
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {unitTypes.map((unit, index) => (
              <motion.div
                key={unit.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bubble-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-medium text-foreground mb-2">
                  {unit.type}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{unit.size}</p>
                <div className="font-semibold text-primary">{unit.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              A World of Amenities
            </span>
            <h2 className="text-heading text-foreground">
              Waterfront Lifestyle Redefined
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-5 rounded-xl text-center group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1">{amenity.name}</h4>
                <p className="text-xs text-muted-foreground">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Gallery
            </span>
            <h2 className="text-heading text-foreground">
              Experience Coral Reef Living
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Connected to Dubai
              </span>
              <h2 className="text-heading text-foreground mb-6">
                Dubai Maritime City
              </h2>
              <p className="text-muted-foreground mb-8">
                Coral Reef is nestled in Dubai Maritime City, a visionary waterfront district 
                offering direct sea access, marina views, and proximity to Dubai's most iconic 
                destinations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {locationHighlights.map((item, index) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Car className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.place}</div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-luxury"
            >
              <img
                src={coralReefPool}
                alt="Coral Reef Cascading Pools"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Investment Potential
              </span>
              <h2 className="text-heading text-background mb-6">
                Why Invest in Coral Reef?
              </h2>

              <div className="space-y-4">
                {investmentHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-charcoal" />
                    </div>
                    <span className="text-background/90">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-display text-background">AI Investment Insight</h3>
              </div>
              <p className="text-background/80 leading-relaxed">
                "Coral Reef's position in the emerging Dubai Maritime City district offers early-mover 
                advantage for investors. The ocean-inspired design concept and unique amenities like 
                the floating cinema create strong differentiation in the market. As Maritime City matures, 
                expect significant capital appreciation driven by waterfront scarcity and growing demand 
                for lifestyle-driven residences."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Information provided for marketing purposes only. This project is listed on an AI-powered 
            property discovery platform. We are not a brokerage. All details including pricing, availability, 
            and specifications are sourced from the developer and may change without notice. Please verify 
            directly with DAMAC Properties or authorized representatives.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-gold-dark/10">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-heading text-foreground mb-4">
              Ready to Explore Coral Reef?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and availability details. 
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Coral Reef", ctaType: "Request Details" })}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Project Details
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Coral Reef", ctaType: "Download Brochure" })}>
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              More from DAMAC
            </span>
            <h2 className="text-heading text-foreground">
              Related DAMAC Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "DAMAC Casa", slug: "damac-casa", desc: "Island in the Sky, Al Sufouh" },
              { name: "Shoreline", slug: "shoreline", desc: "Beachfront Island Living" },
              { name: "Volta", slug: "volta", desc: "Fitness-Inspired on Sheikh Zayed Road" },
            ].map((project) => (
              <Link
                key={project.slug}
                to={`/projects/damac/${project.slug}`}
                className="group bubble-card overflow-hidden"
              >
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
