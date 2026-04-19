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
  Crown,
  Gem,
  Star,
  Heart,
  Dumbbell,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import eleganceTowerHero from "@/assets/projects/elegance-tower-hero.jpg";
import eleganceTowerInterior from "@/assets/projects/elegance-tower-interior.jpg";
import eleganceTowerLobby from "@/assets/projects/elegance-tower-lobby.jpg";
import eleganceTowerPool from "@/assets/projects/elegance-tower-pool.jpg";

const quickStats = [
  { label: "Starting Price", value: "On Request", icon: TrendingUp },
  { label: "Handover", value: "Enquire Now", icon: Calendar },
  { label: "Unit Types", value: "1 & 2 BR", icon: Home },
  { label: "Location", value: "Downtown Dubai", icon: MapPin },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "Couture-Inspired Design", price: "Available on Request" },
  { type: "2 Bedroom Apartment", size: "Premium Burj Khalifa Views", price: "Available on Request" },
];

const amenities = [
  { name: "Infinity Pool", icon: Star, description: "Rooftop pool with Burj Khalifa views" },
  { name: "Couture Lobby", icon: Crown, description: "Zuhair Murad-designed grand entrance" },
  { name: "Fitness Center", icon: Dumbbell, description: "State-of-the-art gym facilities" },
  { name: "Luxury Spa", icon: Heart, description: "Wellness and rejuvenation retreat" },
  { name: "Concierge Service", icon: Gem, description: "24/7 dedicated lifestyle concierge" },
  { name: "Residents' Lounge", icon: Star, description: "Exclusive social and entertainment space" },
  { name: "Children's Area", icon: Star, description: "Dedicated kids' play zones" },
  { name: "Valet Parking", icon: Car, description: "Premium covered parking facilities" },
];

const locationHighlights = [
  { place: "Burj Khalifa", time: "5 mins" },
  { place: "Dubai Mall", time: "5 mins" },
  { place: "Za'abeel Park", time: "5 mins" },
  { place: "Dubai Canal", time: "5 mins" },
  { place: "DIFC", time: "10 mins" },
  { place: "Dubai International Airport", time: "20 mins" },
];

const investmentHighlights = [
  "Prime Downtown Dubai address — Dubai's most prestigious district",
  "Co-designed with fashion icon Zuhair Murad for couture-grade interiors",
  "26-storey masterpiece with Burj Khalifa and skyline panoramas",
  "1 & 2 BR residences blending sophistication and craftsmanship",
  "Views spanning Za'abeel Park greens to Dubai Canal curves",
  "DAMAC's 20+ year legacy in luxury development",
];

const galleryImages = [
  { src: eleganceTowerHero, title: "Tower Exterior" },
  { src: eleganceTowerInterior, title: "Couture Interior" },
  { src: eleganceTowerLobby, title: "Grand Lobby" },
  { src: eleganceTowerPool, title: "Rooftop Pool" },
];

export default function EleganceTowerProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Elegance Tower by DAMAC | Luxury Residences in Downtown Dubai"
        description="Discover Elegance Tower by DAMAC – a 26-storey masterpiece co-designed with Zuhair Murad in Downtown Dubai. 1 & 2 BR couture-inspired residences with Burj Khalifa views."
        canonicalPath="/projects/damac/elegance-tower"
      />


      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={eleganceTowerHero} alt="Elegance Tower by DAMAC" className="w-full h-full object-cover" />
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
                <span className="text-primary">Elegance Tower</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Downtown Dubai</span>
                <span className="badge-tag">Zuhair Murad</span>
                <span className="badge-tag">Couture Living</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Elegance Tower
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Couture-Inspired Luxury in the Heart of Downtown
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Downtown Dubai, Dubai, UAE</span>
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
                  Request Details
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

      {/* Couture Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Co-Designed with Zuhair Murad</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Couture Design", "Burj Khalifa Views", "26-Storey Masterpiece"].map((item, index) => (
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
                Where Couture Meets Architecture
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Rising proudly in the heart of Downtown Dubai, Elegance Tower is a 26-storey 
                  masterpiece co-designed with renowned fashion icon Zuhair Murad. These 1 & 2 
                  bedroom residences redefine urban sophistication, blending couture-inspired 
                  design with exquisite finishes and meticulous craftsmanship.
                </p>
                <p>
                  From every window, breathtaking vistas unfold — from the majestic Burj Khalifa 
                  and Downtown's glittering skyline to the serene greens of Za'abeel Park and the 
                  sparkling curves of the Dubai Canal. At Elegance Tower, every detail elevates 
                  the art of refined living.
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
                src={eleganceTowerInterior}
                alt="Elegance Tower Couture Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <Crown className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">26 Floors</div>
                    <div className="text-sm text-muted-foreground">Downtown Masterpiece</div>
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
              Couture-Inspired Residences
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
              World-Class Amenities
            </span>
            <h2 className="text-heading text-foreground">
              Refined Living at Every Level
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
              Experience Elegance Tower
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
                Prime Location
              </span>
              <h2 className="text-heading text-foreground mb-6">
                Downtown Dubai
              </h2>
              <p className="text-muted-foreground mb-8">
                Elegance Tower sits in the heart of Downtown Dubai, surrounded by the world's 
                most iconic landmarks. Steps from the Burj Khalifa, Dubai Mall, and the Dubai 
                Fountain, residents enjoy unparalleled connectivity and lifestyle convenience.
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
                src={eleganceTowerPool}
                alt="Elegance Tower Rooftop Pool"
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
                Why Invest in Elegance Tower?
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
                "Elegance Tower's Downtown Dubai address places it in one of the world's most 
                sought-after postcodes. The Zuhair Murad collaboration adds a rare couture 
                dimension that appeals to high-net-worth buyers seeking exclusivity. Downtown 
                Dubai consistently delivers 7-9% rental yields with strong capital appreciation, 
                making this a compelling proposition for lifestyle investors and end-users alike."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            We do not act as brokers or agents. This project is listed on an AI-powered property 
            discovery platform for informational and marketing purposes only. All details including 
            pricing, availability, and specifications are sourced from the developer and may change 
            without notice. Please verify directly with DAMAC Properties or authorized representatives.
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
              Ready to Explore Elegance Tower?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and availability details. 
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Elegance Tower", ctaType: "Request Details" })}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Project Details
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Elegance Tower", ctaType: "Download Brochure" })}>
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
              { name: "Safa Gate", slug: "safa-gate", desc: "Park Views on Sheikh Zayed Road" },
              { name: "Coral Reef", slug: "coral-reef", desc: "Waterfront in Maritime City" },
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
