import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
  Gem,
  Star,
  Heart,
  UtensilsCrossed,
  Coffee,
  Shell,
  Waves,
  Car
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import canalHeightsHero from "@/assets/projects/canal-heights-hero.jpg";
import canalHeightsInterior from "@/assets/projects/canal-heights-interior.jpg";
import canalHeightsPool from "@/assets/projects/canal-heights-pool.jpg";
import canalHeightsRooftop from "@/assets/projects/canal-heights-rooftop.jpg";

const quickStats = [
  { label: "Starting Price", value: "AED 3.54M", icon: TrendingUp },
  { label: "Handover", value: "Q2 2027", icon: Calendar },
  { label: "Unit Types", value: "Studio, 1-2 BR", icon: Home },
  { label: "Location", value: "Business Bay", icon: MapPin },
];

const unitTypes = [
  { type: "Studio Apartment", size: "Pearl-Inspired Design", price: "Available on Request" },
  { type: "1 Bedroom Apartment", size: "de Grisogono Branded", price: "Available on Request" },
  { type: "2 Bedroom Apartment", size: "Premium Canal Views", price: "Available on Request" },
];

const amenities = [
  { name: "Pearl Museum", icon: Gem, description: "Blending history and underwater exploration" },
  { name: "Gourmet Restaurant", icon: UtensilsCrossed, description: "Exquisite culinary dining experience" },
  { name: "Rooftop Café", icon: Coffee, description: "Panoramic city views and delightful treats" },
  { name: "Yoga Dome", icon: Heart, description: "Tranquil mindfulness and wellness retreat" },
  { name: "Infinity Lap Pool", icon: Waves, description: "Iridescent-tiled mesmerising swim experience" },
  { name: "Shell-Shaped Pool", icon: Shell, description: "Enchanting pearl-themed aquatic adventure" },
  { name: "Wellness Cocoons", icon: Star, description: "Private relaxation and rejuvenation pods" },
  { name: "Intimate Dining", icon: Star, description: "Exclusive private dining experiences" },
];

const locationHighlights = [
  { place: "Burj Khalifa", time: "5 mins" },
  { place: "Dubai Mall", time: "5 mins" },
  { place: "Dubai Canal", time: "Adjacent" },
  { place: "Dubai Frame", time: "10 mins" },
  { place: "Kite Beach", time: "10 mins" },
  { place: "Dubai International Airport", time: "20 mins" },
];

const investmentHighlights = [
  "Business Bay waterfront — Dubai's fastest-growing investment corridor",
  "Branded by de Grisogono — Swiss luxury jewellery house collaboration",
  "Blue pearl-inspired design with iridescent finishes throughout",
  "1% monthly payment plan for accessible luxury investment",
  "Studios and 1-2 BR apartments with Dubai Canal views",
  "Q2 2027 handover — DAMAC's proven delivery track record",
];

const galleryImages = [
  { src: canalHeightsHero, title: "Tower & Canal View" },
  { src: canalHeightsInterior, title: "de Grisogono Interior" },
  { src: canalHeightsPool, title: "Shell-Shaped Pool" },
  { src: canalHeightsRooftop, title: "Rooftop Café" },
];

export default function CanalHeightsProject() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Canal Heights de Grisogono | Luxury Waterfront in Business Bay</title>
        <meta
          name="description"
          content="Discover Canal Heights de Grisogono by DAMAC – pearl-inspired luxury studios & 1-2 BR apartments in Business Bay from AED 3.54M. Shell pools, yoga domes & canal views."
        />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={canalHeightsHero} alt="Canal Heights de Grisogono" className="w-full h-full object-cover" />
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
                <span className="text-primary">Canal Heights</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Business Bay</span>
                <span className="badge-tag">de Grisogono</span>
                <span className="badge-tag">Waterfront</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Canal Heights
              </h1>
              <p className="text-xl text-background/90 mb-2">
                A Glittering Icon Branded by de Grisogono
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Business Bay, Dubai Canal, Dubai, UAE</span>
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
                  Explore Availability
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

      {/* Pearl Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Inspired by the Elegance of the Blue Pearl</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["de Grisogono Branded", "Dubai Canal Views", "1% Monthly Plan"].map((item, index) => (
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
                A Waterfront Sanctuary by the Canal
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Discover a waterfront sanctuary, beautifully branded by de Grisogono and inspired 
                  by the elegance of the blue pearl. Choose from serene studios and 1-2 bedroom 
                  apartments that invite tranquillity along the Dubai Canal.
                </p>
                <p>
                  Indulge in dreamy amenities like wellness cocoons, intimate dining, infinity lap 
                  pools, and shell-shaped pools. Nestled by the Dubai Canal, this lustrous property 
                  reflects the beauty of nature's most wondrous creations, offering a lifestyle that 
                  feels effortlessly at home.
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
                src={canalHeightsInterior}
                alt="Canal Heights de Grisogono Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <Gem className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">de Grisogono</div>
                    <div className="text-sm text-muted-foreground">Branded Interiors</div>
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
              Pearl-Inspired Residences
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
              Dreamy Waterfront Living
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
              Discover Canal Heights
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
                Business Bay Waterfront
              </h2>
              <p className="text-muted-foreground mb-8">
                Canal Heights sits along the iconic Dubai Canal in Business Bay, one of Dubai's 
                most dynamic districts. With direct canal access and proximity to Downtown, DIFC, 
                and the city's best leisure destinations, residents enjoy an unrivalled urban lifestyle.
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
                src={canalHeightsRooftop}
                alt="Canal Heights Rooftop Café"
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
                Why Invest in Canal Heights?
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
                "Canal Heights de Grisogono combines Swiss luxury branding with one of Dubai's 
                most investable locations. Business Bay canal-front properties command premium 
                rental yields of 7-9%, with branded residences achieving 15-25% price premiums 
                over non-branded equivalents. The 1% monthly payment plan lowers the entry barrier, 
                while Q2 2027 handover aligns with Dubai's continued growth trajectory."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Platform operates for informational purposes only. This project is listed on an AI-powered 
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
              Ready to Explore Canal Heights?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and availability details. 
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Project Details
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full">
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
              { name: "Elegance Tower", slug: "elegance-tower", desc: "Zuhair Murad in Downtown Dubai" },
              { name: "Safa Gate", slug: "safa-gate", desc: "Park Views on Sheikh Zayed Road" },
              { name: "Chelsea Residences", slug: "chelsea-residences", desc: "Branded Living in Maritime City" },
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
      <WhatsAppButton />
    </div>
  );
}
