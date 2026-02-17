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
  Waves,
  Dumbbell,
  Droplets,
  Umbrella,
  CloudRain,
  TreePalm,
  Car,
  ShoppingBag,
  GraduationCap,
  Plane,
  Heart,
  Sun
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import damacCasaHero from "@/assets/projects/damac-casa-hero.jpg";
import damacCasaInterior from "@/assets/projects/damac-casa-interior.jpg";
import damacCasaPool from "@/assets/projects/damac-casa-pool.jpg";
import damacCasaSpa from "@/assets/projects/damac-casa-spa.jpg";

const quickStats = [
  { label: "Starting Price", value: "AED 2.99M", icon: TrendingUp },
  { label: "Handover", value: "Q2 2028", icon: Calendar },
  { label: "Unit Type", value: "1-5 BR", icon: Home },
  { label: "Location", value: "Al Sufouh", icon: MapPin },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "Up to 1,110 sq.ft", price: "From AED 2,998,000" },
  { type: "2 Bedroom Apartment", size: "Up to 1,860 sq.ft", price: "From AED 4,760,000" },
  { type: "3 Bedroom Apartment", size: "Up to 3,906 sq.ft", price: "From AED 5,129,000" },
  { type: "4 Bedroom Apartment", size: "Up to 3,887 sq.ft", price: "From AED 13,587,000" },
];

const amenities = [
  { name: "Swimming Pool", icon: Waves, description: "Luxurious pools for tranquility and leisure" },
  { name: "Aqua Gym", icon: Dumbbell, description: "State-of-the-art aquatic fitness facility" },
  { name: "Spa & Wellness", icon: Heart, description: "Rejuvenating treatments in a tranquil setting" },
  { name: "Beach Cabana", icon: Umbrella, description: "Private retreat by the water" },
  { name: "Rain Room", icon: CloudRain, description: "Mesmerising water experience above the city" },
  { name: "Artificial Beach", icon: Sun, description: "Rooftop beach with soft sand and cabanas" },
  { name: "Aqua Fitness", icon: Droplets, description: "Water resistance workouts" },
  { name: "Island Lounge", icon: TreePalm, description: "Sky-high island escape at home" },
];

const locationHighlights = [
  { place: "Palm Jumeirah", time: "5 mins" },
  { place: "Dubai Marina Mall", time: "5 mins" },
  { place: "Mall of the Emirates", time: "10 mins" },
  { place: "American University of Dubai", time: "5 mins" },
  { place: "Kite Beach", time: "10 mins" },
  { place: "Dubai International Airport", time: "20 mins" },
];

const investmentHighlights = [
  "Premium high-rise tower in Al Sufouh with sea and Palm views",
  "1% monthly payment plan for flexible investment",
  "Golden Visa eligible property",
  "Townhouses on lower levels + luxury apartments above",
  "Super luxury 3-5 BR apartments with panoramic views",
  "DAMAC developer credibility and 20+ years track record",
];

const galleryImages = [
  { src: damacCasaHero, title: "Tower Exterior" },
  { src: damacCasaInterior, title: "Luxury Interior" },
  { src: damacCasaPool, title: "Infinity Pool" },
  { src: damacCasaSpa, title: "Spa & Rain Room" },
];

export default function DamacCasaProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DAMAC Casa | Luxury Apartments in Al Sufouh, Dubai</title>
        <meta
          name="description"
          content="Discover DAMAC Casa – luxury 1-5 BR apartments and townhouses in Al Sufouh with sea views, Palm Jumeirah vistas, and 1% monthly payment plan. Starting AED 2.99M."
        />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={damacCasaHero}
            alt="DAMAC Casa"
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
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-primary">DAMAC Casa</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Luxury Tower</span>
                <span className="badge-tag">Al Sufouh</span>
                <span className="badge-tag">Golden Visa</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                DAMAC Casa
              </h1>
              <p className="text-xl text-background/90 mb-2">
                An Island in the Sky – Luxury Waterfront Living
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Al Sufouh, Dubai, UAE</span>
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
                  Request Project Details
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

      {/* Island in the Sky Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Escape to an Ethereal Island That Transcends Urban Living</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Sea & Skyline Views", "Super Luxury Apartments", "Rooftop Island Living"].map((item, index) => (
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
                An Island in the Sky
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Escape to an ethereal island that transcends the boundaries of urban living. 
                  Nestled in Al Sufouh, DAMAC Casa offers 1- and 2-bedroom townhouses on the 
                  lower levels, and 1- and 2-bedroom luxury apartments above.
                </p>
                <p>
                  For sky-high luxury, explore 3-, 4-, and 5-bedroom super luxury apartments 
                  with breathtaking views of the iconic Palm Jumeirah and mesmerising sea views. 
                  Every residence is designed to deliver an island-inspired lifestyle elevated 
                  above the city.
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
                src={damacCasaInterior}
                alt="DAMAC Casa Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">1%</div>
                    <div className="text-sm text-muted-foreground">Monthly Payment Plan</div>
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
              Select Your Dream Home
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
              Island-Inspired Luxury Living
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
              Experience DAMAC Casa Living
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
                Close to Everything You Need
              </h2>
              <p className="text-muted-foreground mb-8">
                DAMAC Casa is ideally situated in Al Sufouh, offering breathtaking views of 
                Palm Jumeirah and the Arabian Sea, with convenient access to Dubai's finest 
                beaches, shopping, and entertainment.
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
                src={damacCasaPool}
                alt="DAMAC Casa Pool & Amenities"
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
                Why Invest in DAMAC Casa?
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
                "DAMAC Casa offers a rare combination of waterfront lifestyle and premium Al Sufouh 
                location. With Palm Jumeirah views, Golden Visa eligibility, and a flexible 1% monthly 
                payment plan, this project appeals to lifestyle buyers and investors seeking long-term 
                capital appreciation in one of Dubai's most coveted coastal corridors."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            This project is listed for informational and marketing purposes only. We are not a brokerage. 
            All details including pricing, availability, and specifications are sourced from the developer 
            and may change without notice. Please verify directly with DAMAC Properties or authorized representatives.
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
              Ready to Explore DAMAC Casa?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and payment plan details. 
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "DAMAC Casa", ctaType: "Request Details" })}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Project Details
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "DAMAC Casa", ctaType: "Download Brochure" })}>
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
              { name: "Safa Gate", slug: "safa-gate", desc: "Luxury Living at Safa Park" },
              { name: "Chelsea Residences", slug: "chelsea-residences", desc: "Branded Football Lifestyle" },
              { name: "Shoreline", slug: "shoreline", desc: "Beachfront Island Living" },
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
