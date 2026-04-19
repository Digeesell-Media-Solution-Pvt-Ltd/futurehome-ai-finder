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
  Dumbbell,
  Mountain,
  Swords,
  Footprints,
  Droplets,
  Car,
  ShoppingBag,
  Plane,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import voltaHero from "@/assets/projects/volta-hero.jpg";
import voltaInterior from "@/assets/projects/volta-interior.jpg";
import voltaGym from "@/assets/projects/volta-gym.jpg";
import voltaPool from "@/assets/projects/volta-pool.jpg";

const quickStats = [
  { label: "Starting Price", value: "On Request", icon: TrendingUp },
  { label: "Handover", value: "Q2 2028", icon: Calendar },
  { label: "Unit Type", value: "1-4 BR", icon: Home },
  { label: "Location", value: "Sheikh Zayed Rd", icon: MapPin },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "Premium Layouts", price: "Available on Request" },
  { type: "2 Bedroom Apartment", size: "Wraparound Balconies", price: "Available on Request" },
  { type: "3 Bedroom Apartment", size: "Premium Layouts", price: "Available on Request" },
  { type: "4 Bedroom Apartment", size: "Penthouse Living", price: "Available on Request" },
];

const amenities = [
  { name: "Climbing Wall", icon: Mountain, description: "Adrenaline-fueled vertical challenges" },
  { name: "State-of-the-Art Gym", icon: Dumbbell, description: "Maximum performance and motivation" },
  { name: "Jogging Track", icon: Footprints, description: "Scenic runs with city skyline views" },
  { name: "Boxing Ring", icon: Swords, description: "High-energy competitive workouts" },
  { name: "Indoor Pool", icon: Waves, description: "Serene escape for a refreshing swim" },
  { name: "Outdoor Pool", icon: Droplets, description: "Open-sky laps with stunning views" },
  { name: "Outdoor Gym", icon: Heart, description: "Invigorating workouts with panoramic views" },
  { name: "Wellness Centre", icon: Sparkles, description: "Holistic mind, body, and soul retreat" },
];

const locationHighlights = [
  { place: "Dubai Mall & Burj Khalifa", time: "5 mins" },
  { place: "DIFC", time: "5 mins" },
  { place: "Mall of the Emirates", time: "10 mins" },
  { place: "Dubai Marina", time: "10 mins" },
  { place: "Safa Park", time: "5 mins" },
  { place: "Dubai International Airport", time: "15 mins" },
];

const investmentHighlights = [
  "Prime Sheikh Zayed Road address – Dubai's main artery",
  "1% monthly payment plan for flexible investment",
  "Wellness-focused lifestyle tower for health-conscious buyers",
  "Wraparound balconies with panoramic city views",
  "High rental demand in central Dubai location",
  "DAMAC developer credibility and 20+ years track record",
];

const galleryImages = [
  { src: voltaHero, title: "Tower Exterior" },
  { src: voltaInterior, title: "Luxury Interior" },
  { src: voltaGym, title: "Climbing Wall & Gym" },
  { src: voltaPool, title: "Rooftop Pool" },
];

export default function VoltaProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Volta by DAMAC | Fitness-Inspired Luxury on Sheikh Zayed Road"
        description="Discover Volta by DAMAC – wellness-focused luxury 1-4 BR apartments on Sheikh Zayed Road with climbing wall, boxing ring, pools, and 1% monthly payment plan."
        canonicalPath="/projects/damac/volta"
      />


      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={voltaHero} alt="Volta by DAMAC" className="w-full h-full object-cover" />
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
                <span className="text-primary">Volta</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Wellness Tower</span>
                <span className="badge-tag">Sheikh Zayed Road</span>
                <span className="badge-tag">Fitness-Inspired</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Volta by DAMAC
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Equipped for Life and Luxury – Fitness-Inspired Living
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Sheikh Zayed Road, Dubai, UAE</span>
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
                  Request Pricing
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

      {/* Wellness Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Designed to Push the Limits of Mind, Body, and Soul</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Peak Performance", "Wellness Living", "City Panoramas"].map((item, index) => (
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
                Equipped for Life and Luxury
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Enviably located on Sheikh Zayed Road, Volta is a one-of-a-kind residential tower 
                  designed for those who thrive on life's pace while valuing wellness. This dynamic 
                  tower offers curated spaces to push the limits of your mind, body, and soul.
                </p>
                <p>
                  With luxurious 1-4 bedroom apartments, wraparound balconies, and stunning city 
                  views, Volta is engineered for evolution. From climbing walls and boxing rings to 
                  indoor and outdoor pools, every amenity is designed to fuel an active, balanced lifestyle.
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
                src={voltaInterior}
                alt="Volta Interior"
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
              Fitness-Inspired Luxury Living
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
              Experience Volta Living
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
                Dubai's Main Artery Address
              </h2>
              <p className="text-muted-foreground mb-8">
                Volta sits on Sheikh Zayed Road – Dubai's most iconic boulevard – placing you 
                at the heart of the city's business, entertainment, and lifestyle destinations.
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
                src={voltaPool}
                alt="Volta Rooftop Pool"
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
                Why Invest in Volta?
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
                "Volta's Sheikh Zayed Road address and wellness-first concept position it uniquely 
                in Dubai's luxury market. The fitness-inspired amenities – climbing wall, boxing ring, 
                and jogging tracks – appeal to a growing health-conscious demographic, while the 
                prime central location ensures strong rental demand and capital appreciation potential."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            We are an AI-powered property discovery platform. This project is listed for informational 
            and marketing purposes only. We are not a brokerage. All details including pricing, availability, 
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
              Ready to Explore Volta?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and payment plan details. 
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Volta", ctaType: "Request Pricing" })}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Request Pricing
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: "Volta", ctaType: "Download Brochure" })}>
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
              { name: "Safa Gate", slug: "safa-gate", desc: "Luxury Living at Safa Park" },
              { name: "DAMAC District", slug: "damac-district", desc: "Live, Work, Play in DAMAC Hills" },
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
