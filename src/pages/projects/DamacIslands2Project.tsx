import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BadgeCheck, 
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
  Dumbbell,
  TreePine,
  Baby,
  Palmtree,
  Mountain,
  Leaf,
  Flower2,
  Sun,
  Users,
  Car,
  Bike
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import damacIslands2Hero from "@/assets/projects/damac-islands2-hero.jpg";
import damacIslands2Pool from "@/assets/projects/damac-islands2-pool.jpg";
import damacIslands2Interior from "@/assets/projects/damac-islands2-interior.jpg";
import damacIslands2Gardens from "@/assets/projects/damac-islands2-gardens.jpg";

const quickStats = [
  { label: "Starting Price", value: "AED 2.75M", icon: TrendingUp },
  { label: "Handover", value: "2028", icon: Calendar },
  { label: "Bedrooms", value: "4-7 BR", icon: Home },
  { label: "Community", value: "20M sq.ft", icon: MapPin },
];

const unitTypes = [
  { type: "4 Bedroom Villa", size: "From 4,500 sq.ft", price: "From AED 2.75M" },
  { type: "5 Bedroom Villa", size: "From 5,500 sq.ft", price: "From AED 3.57M" },
  { type: "6 Bedroom Villa", size: "From 7,000 sq.ft", price: "From AED 4.5M" },
  { type: "7 Bedroom Villa", size: "From 8,500 sq.ft", price: "From AED 5.5M" },
];

const islandThemes = [
  "Bahamas", "Tahiti", "Bermuda", "Barbados", 
  "Cuba", "Maui", "Mauritius", "Antigua"
];

const amenities = [
  { name: "Tranquil Lake & Eco Park", icon: Waves, description: "Zen gardens and verdant waters for meditation" },
  { name: "Whispering Waterfall", icon: Waves, description: "Mystic falls with yoga deck overlooking water" },
  { name: "Botanic Garden", icon: Flower2, description: "Butterfly trails and tropical bird sanctuary" },
  { name: "Island Vida Wellness", icon: Leaf, description: "Healing spa with herb gardens and crystals" },
  { name: "Sky Woods Adventure", icon: Mountain, description: "Canopy walks, ziplines, and treehouse park" },
  { name: "Eco Lodge Hospitality", icon: Palmtree, description: "Farm-to-table dining and organic pools" },
  { name: "Garden of Insight", icon: Flower2, description: "Art, sculpture, and tranquil study garden" },
  { name: "Eco Explorers' Land", icon: TreePine, description: "Wild park with eco-education center" },
  { name: "Solar Link Park", icon: Sun, description: "E-scooter paths and solar charging stations" },
  { name: "Infinity Pools", icon: Waves, description: "Lagoon-style pools with beach access" },
  { name: "Kids Play Zones", icon: Baby, description: "Safe and engaging play areas for families" },
  { name: "Cycling & Jogging Tracks", icon: Bike, description: "Scenic trails through tropical landscapes" },
];

const locationHighlights = [
  { place: "Dubai Investment Park", time: "5 mins" },
  { place: "Al Maktoum Airport", time: "10 mins" },
  { place: "Expo City Dubai", time: "15 mins" },
  { place: "Dubai Marina", time: "20 mins" },
  { place: "Dubai Mall", time: "25 mins" },
  { place: "Sheikh Zayed Road", time: "10 mins" },
];

const investmentHighlights = [
  "Waterfront lifestyle premium with lagoon access",
  "High capital appreciation potential in master community",
  "Eco-living design with 5 pillars of sustainability",
  "DAMAC developer credibility and track record",
  "Guinness World Record-holding community",
  "Premium villas inspired by 8 island destinations",
];

const galleryImages = [
  { src: damacIslands2Hero, title: "Masterplan View" },
  { src: damacIslands2Pool, title: "Infinity Pool" },
  { src: damacIslands2Interior, title: "Villa Interior" },
  { src: damacIslands2Gardens, title: "Botanical Gardens" },
];

export default function DamacIslands2Project() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={damacIslands2Hero}
            alt="DAMAC Islands 2"
            className="w-full h-full object-cover"
          />
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
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-primary">DAMAC Islands 2</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
                <span className="badge-tag">Waterfront Villas</span>
                <span className="badge-tag">Island Living</span>
                <span className="badge-tag">Eco-Community</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                DAMAC Islands 2
              </h1>
              <p className="text-xl text-background/90 mb-2">
                A Tropical Paradise of Luxury Island Living in Dubai
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>DAMAC Islands 2 Community, Dubai, UAE</span>
              </div>

              {/* Quick Stats - Glass panels */}
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" className="rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button variant="gold-outline" size="lg" className="rounded-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="gold-outline" size="lg" className="rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Island Themes Section */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Inspired by 8 of the World's Best Tropical Destinations</p>
            <div className="flex flex-wrap justify-center gap-4">
              {islandThemes.map((island, index) => (
                <motion.span
                  key={island}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 glass-panel rounded-full text-sm text-background/90"
                >
                  {island}
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
                A New Chapter in Island Living Begins
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  DAMAC Islands 2 is a master-planned island-inspired luxury community offering 
                  premium waterfront villas and townhouses with tropical lifestyle amenities and 
                  resort-style living across 20 million square feet.
                </p>
                <p>
                  Guided by the five pillars of eco-living — Nature, Wellness, Adventure, Social, 
                  and Cultural — DAMAC Islands 2 transforms sustainability into a way of life. 
                  This is where paradise doesn't have to be found, it's simply lived.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">DAMAC Properties</span>
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">DLD Approved</span>
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
                src={damacIslands2Interior}
                alt="DAMAC Islands 2 Villa Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">10-12%</div>
                    <div className="text-sm text-muted-foreground">Expected ROI</div>
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
              Villa Types
            </span>
            <h2 className="text-heading text-foreground">
              Select Your Dream Island Home
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Eco-Luxury Lifestyle Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              Experience Island Paradise Living
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
                Connected to Dubai's Best
              </h2>
              <p className="text-muted-foreground mb-8">
                DAMAC Islands 2 is strategically located within the larger DAMAC Islands 
                master community, offering easy access to major Dubai highways and key 
                lifestyle destinations including schools, malls, and airports.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {locationHighlights.map((item, index) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 glass-panel rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.place}</div>
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
            >
              <img
                src={damacIslands2Gardens}
                alt="DAMAC Islands 2 Gardens"
                className="rounded-2xl shadow-luxury w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Investment Potential
            </span>
            <h2 className="text-heading text-foreground">
              Why Invest in DAMAC Islands 2
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 glass-card p-6 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insight */}
      <section className="section-padding bg-background">
        <div className="container-luxury max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-charcoal" />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  AI Investment Insight
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Ideal for:</strong> Luxury investors and families 
                  seeking premium waterfront villa living with strong long-term capital appreciation 
                  potential. DAMAC Islands 2's eco-luxury positioning, combined with its 
                  record-breaking community scale and DAMAC's established developer credibility, 
                  makes it a compelling investment for those targeting the ultra-premium Dubai 
                  villa market with expected ROI of 10-12%.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-background flex items-center justify-center flex-shrink-0">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-display font-medium text-foreground">DAMAC Properties</h3>
                  <BadgeCheck className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  DAMAC Properties is one of the leading luxury real estate developers in the 
                  Middle East, with a portfolio of award-winning residential, commercial, and 
                  leisure properties across the UAE, Saudi Arabia, and beyond. Known for iconic 
                  developments and world-class partnerships, DAMAC continues to shape Dubai's skyline.
                </p>
                <Button variant="gold-outline" className="rounded-full" asChild>
                  <Link to="/developers/damac">
                    View Developer Profile
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium text-background mb-4">
              Ready to Own Your Island Paradise?
            </h2>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">
              Get exclusive pricing, floor plans, and payment plan details for DAMAC Islands 2 
              luxury villas. Our property experts are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
              <Button variant="gold" size="lg" className="rounded-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Inquiry
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
