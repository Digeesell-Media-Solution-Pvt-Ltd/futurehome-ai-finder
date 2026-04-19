import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  Car,
  Check,
  Download,
  Home,
  MapPin,
  Phone,
  Sparkles,
  TrendingUp,
  Waves,
  Dumbbell,
  TreePine,
  Users,
  Briefcase,
  ShoppingBag,
  Bike,
  Leaf,
  Sun,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/projects/hayat-dubai-south-hero.jpg";
import overviewImg from "@/assets/projects/hayat-dubai-south-overview.jpg";
import exteriorImg from "@/assets/projects/hayat-dubai-south-exterior.jpg";
import aerialImg from "@/assets/projects/hayat-dubai-south-aerial.jpg";
import interiorImg from "@/assets/projects/hayat-dubai-south-interior.jpg";
import bedroomImg from "@/assets/projects/hayat-dubai-south-bedroom.jpg";
import connectivityImg from "@/assets/projects/hayat-dubai-south-connectivity.jpg";
import communityImg from "@/assets/projects/hayat-dubai-south-community.jpg";
import parkImg from "@/assets/projects/hayat-dubai-south-park.jpg";
import fitnessImg from "@/assets/projects/hayat-dubai-south-fitness.jpg";
import poolImg from "@/assets/projects/hayat-dubai-south-pool.jpg";
import retailImg from "@/assets/projects/hayat-dubai-south-retail.jpg";
import lifestyleImg from "@/assets/projects/hayat-dubai-south-lifestyle.jpg";
import masterplanImg from "@/assets/projects/hayat-dubai-south-masterplan.jpg";

const PROJECT_NAME = "HAYAT by Dubai South";

const quickStats = [
  { label: "Starting Price", value: "On Request", icon: TrendingUp },
  { label: "Handover", value: "On Request", icon: Calendar },
  { label: "Unit Type", value: "3-5 BR Townhouses", icon: Home },
  { label: "Community", value: "10M sq.m", icon: MapPin },
];

const unitTypes = [
  { type: "3 Bedroom Townhouse", size: "3,215 – 3,851 sq.ft BUA", price: "Price on Request" },
  { type: "4 Bedroom Townhouse", size: "4,132 – 4,556 sq.ft BUA", price: "Price on Request" },
  { type: "5 Bedroom Townhouse", size: "4,915 – 4,953 sq.ft BUA", price: "Price on Request" },
  { type: "5 BR Semi-Detached Villa", size: "4,915 – 4,953 sq.ft BUA", price: "Price on Request" },
];

const amenities = [
  { name: "Swimmable Lagoon", icon: Waves, description: "West Lake with water activities" },
  { name: "Central Park", icon: TreePine, description: "Expansive community green space" },
  { name: "Fitness Facilities", icon: Dumbbell, description: "Modern gyms and wellness areas" },
  { name: "Community Mall", icon: ShoppingBag, description: "Retail boulevard and dining" },
  { name: "Cycling Trails", icon: Bike, description: "Scenic routes through the community" },
  { name: "Children's Play Areas", icon: Users, description: "Safe and engaging play zones" },
  { name: "Landscaped Gardens", icon: Leaf, description: "Walking trails and green spaces" },
  { name: "Clubhouse", icon: Briefcase, description: "Residents' clubhouse and lounges" },
  { name: "Swimming Pools", icon: Waves, description: "Shared pools for every enclave" },
  { name: "Dog Park", icon: Sun, description: "South Lake and dedicated dog park" },
  { name: "24/7 Security", icon: Shield, description: "Gated community with security" },
  { name: "Retail & Cafés", icon: ShoppingBag, description: "Shops and essentials nearby" },
];

const locationHighlights = [
  { place: "Al Maktoum International Airport", time: "Minutes" },
  { place: "Emirates Road", time: "Direct Access" },
  { place: "Sheikh Mohammed bin Zayed Road", time: "Direct Access" },
  { place: "Jebel Ali Free Zone", time: "10 mins" },
  { place: "Dubai South Free Zone", time: "5 mins" },
  { place: "Golf District, Dubai South", time: "Adjacent" },
];

const investmentHighlights = [
  "10 million sq.m master-planned wellness community",
  "Gated, green neighbourhood with swimmable lagoon",
  "200+ townhouses across HAYAT 4 and HAYAT 5 phases",
  "Strategic proximity to Al Maktoum International Airport",
  "Adjacent to Golf District and major free zones",
  "Dubai South Properties — backed by Dubai government",
];

const galleryImages = [
  { src: heroImg, title: "Community Aerial View" },
  { src: overviewImg, title: "Townhouse Streetscape" },
  { src: exteriorImg, title: "Exterior Architecture" },
  { src: aerialImg, title: "Landscape & Greenery" },
  { src: interiorImg, title: "Modern Interior" },
  { src: bedroomImg, title: "Luxury Bedroom" },
  { src: communityImg, title: "Community Living" },
  { src: parkImg, title: "Community Park" },
  { src: fitnessImg, title: "Fitness & Wellness" },
  { src: poolImg, title: "Pool & Relaxation" },
  { src: retailImg, title: "Retail Boulevard" },
  { src: lifestyleImg, title: "Lifestyle Spaces" },
  { src: connectivityImg, title: "Strategic Connectivity" },
  { src: masterplanImg, title: "Master-Planned Vision" },
];

export default function HayatDubaiSouthProject() {
  const { openLeadCapture, requestBrochureDownload } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="HAYAT by Dubai South | Townhouses in Dubai South"
        description="Discover HAYAT by Dubai South Properties — a wellness-oriented townhouse community featuring 3-5 bedroom homes near Al Maktoum International Airport."
        canonicalPath="/projects/dubai-south-properties/hayat-dubai-south"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={PROJECT_NAME} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-primary">HAYAT by Dubai South</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Townhouses</span>
                <span className="badge-tag">Dubai South</span>
                <span className="badge-tag">Gated Community</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                HAYAT by Dubai South
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Where Scale Meets Soul — Wellness Living Reimagined
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Dubai South, Dubai, UAE</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {quickStats.map((stat) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel p-4 rounded-xl text-center">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-background">{stat.value}</div>
                    <div className="text-xs text-background/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" className="rounded-full" onClick={() => requestBrochureDownload("/brochures/dubai-south-properties/hayat-dubai-south.pdf", PROJECT_NAME)}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: PROJECT_NAME, ctaType: "Register Interest" })}>
                  <Phone className="w-4 h-4 mr-2" />
                  Register Interest
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-sm text-primary mb-3">A Fully Integrated, Wellness-Oriented Master Community</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Nature-Led Living", "Walkable Neighbourhoods", "Balanced & Modern"].map((item, i) => (
                <motion.span key={item} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="px-6 py-3 glass-panel rounded-full text-background/90 font-medium">
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Project Overview</span>
              <h2 className="text-heading text-foreground mb-6">A New Chapter in Master-Planned Living</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  HAYAT by Dubai South Properties is a visionary master-planned community spanning 10 million square meters, where wellness-oriented design meets strategic connectivity. Located adjacent to the Golf District with seamless access to Emirates Road and Sheikh Mohammed bin Zayed Road, this gated enclave positions residents minutes from Al Maktoum International Airport.
                </p>
                <p>
                  Featuring beautifully crafted 3, 4 and 5-bedroom townhouses alongside semi-detached villas, HAYAT embraces minimalist architecture guided by nature — with each home maximising privacy while fostering a vibrant, walkable neighbourhood experience. Two distinct phases, HAYAT 4 and HAYAT 5, offer over 200 units with generous land plots and private gardens.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Dubai South Properties</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src={overviewImg} alt="HAYAT Community" className="rounded-2xl shadow-luxury w-full" />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">200+</div>
                    <div className="text-sm text-muted-foreground">Townhouse Units</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Key Highlights</span>
            <h2 className="text-heading text-foreground">Why Choose HAYAT</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Wellness-Led Design", desc: "Architecture guided by nature with open-plan layouts, private gardens, and natural light-filled interiors." },
              { title: "10M sq.m Master Community", desc: "A fully integrated gated neighbourhood with lagoon, parks, retail boulevard, and world-class amenities." },
              { title: "Strategic Location", desc: "Adjacent to Golf District, minutes from Al Maktoum Airport, with direct access to major highways." },
            ].map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bubble-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {i === 0 ? <Leaf className="w-8 h-8 text-primary" /> : i === 1 ? <MapPin className="w-8 h-8 text-primary" /> : <Car className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-xl font-display font-medium text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Available Units</span>
            <h2 className="text-heading text-foreground">Spacious Townhouses & Villas</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitTypes.map((unit, index) => (
              <motion.div key={unit.type} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bubble-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-display font-medium text-foreground mb-2">{unit.type}</h3>
                <p className="text-muted-foreground text-sm mb-3">{unit.size}</p>
                <div className="font-semibold text-primary">{unit.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section className="py-12 bg-muted/30">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Payment Plan</span>
            <h2 className="text-heading text-foreground mb-4">Flexible Payment Options</h2>
            <p className="text-muted-foreground mb-6">Payment plan details are available on request. Register your interest to receive the full payment schedule and pricing information.</p>
            <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: PROJECT_NAME, ctaType: "Payment Plan" })}>
              <Download className="w-4 h-4 mr-2" />
              Request Payment Plan
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">A World of Amenities</span>
            <h2 className="text-heading text-foreground">Where Life Unfolds With Intention</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div key={amenity.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }} className="glass-panel p-5 rounded-xl text-center group hover:border-primary/30 transition-all">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Gallery</span>
            <h2 className="text-heading text-foreground">Experience HAYAT Living</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div key={image.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group relative overflow-hidden rounded-xl aspect-square">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Connected to Dubai</span>
              <h2 className="text-heading text-foreground mb-6">Where Access Is Redefined</h2>
              <p className="text-muted-foreground mb-8">
                HAYAT is strategically positioned within Dubai South with direct access to Emirates Road and Sheikh Mohammed bin Zayed Road, minutes from the world's largest airport, and adjacent to the Golf District — connecting residents to economic hubs and leisure destinations effortlessly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locationHighlights.map((item, index) => (
                  <motion.div key={item.place} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
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
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-luxury">
              <img src={connectivityImg} alt="HAYAT Location" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Investment Potential</span>
              <h2 className="text-heading text-background mb-6">Why Invest in HAYAT?</h2>
              <div className="space-y-4">
                {investmentHighlights.map((highlight, index) => (
                  <motion.div key={highlight} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-charcoal" />
                    </div>
                    <span className="text-background/90">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-display text-background">AI Investment Insight</h3>
              </div>
              <p className="text-background/80 leading-relaxed">
                "HAYAT by Dubai South represents a compelling opportunity for family-oriented investors seeking value in a government-backed master community. The strategic proximity to Al Maktoum International Airport and Dubai South Free Zone, combined with generous plot sizes and a wellness-first design philosophy, positions this development for strong long-term capital appreciation as the Dubai South district matures."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-gold-dark/10">
        <div className="container-luxury text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-heading text-foreground mb-4">Ready to Explore HAYAT?</h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and the full brochure. Our investment advisors are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => requestBrochureDownload("/brochures/dubai-south-properties/hayat-dubai-south.pdf", PROJECT_NAME)}>
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: PROJECT_NAME, ctaType: "Get Floor Plan" })}>
                <Download className="w-4 h-4 mr-2" />
                Get Floor Plan
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openLeadCapture({ projectName: PROJECT_NAME, ctaType: "Register Interest" })}>
                <Phone className="w-4 h-4 mr-2" />
                Register Interest
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
