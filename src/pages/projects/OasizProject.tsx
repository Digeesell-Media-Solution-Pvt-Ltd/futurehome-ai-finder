import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BadgeCheck, 
  Building2, 
  Calendar, 
  Check, 
  Clock, 
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
  Shield,
  Car,
  Baby,
  Palmtree,
  Sofa,
  Sun,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import oasizHero from "@/assets/projects/oasiz-hero.jpg";
import oasizPool from "@/assets/projects/oasiz-pool.jpg";
import oasizLobby from "@/assets/projects/oasiz-lobby.jpg";
import oasizInterior from "@/assets/projects/oasiz-interior.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const quickStats = [
  { label: "Starting Price", value: "AED 699K", icon: TrendingUp },
  { label: "Handover", value: "Nov 2027", icon: Calendar },
  { label: "Units", value: "410", icon: Home },
  { label: "Payment Plan", value: "1% Monthly", icon: Clock },
];

const unitTypes = [
  { type: "Studio", size: "From 400 sq.ft", price: "From AED 699K" },
  { type: "1 Bedroom", size: "From 700 sq.ft", price: "From AED 950K" },
  { type: "2 Bedroom", size: "From 1,100 sq.ft", price: "From AED 1.4M" },
  { type: "3 Bedroom", size: "From 1,500 sq.ft", price: "From AED 1.85M" },
];

const amenities = [
  { name: "Podium Pool", icon: Waves, description: "Elevated escape in the heart of luxury" },
  { name: "Private Pool Units", icon: Waves, description: "Personal retreat in select apartments" },
  { name: "Indoor Gym", icon: Dumbbell, description: "State-of-the-art fitness center" },
  { name: "Kids Daycare", icon: Baby, description: "Safe, fun, and nurturing environment" },
  { name: "Cabana Seating", icon: Palmtree, description: "Exclusive poolside relaxation" },
  { name: "Landscaped Gardens", icon: TreePine, description: "Lush greenery and walkways" },
  { name: "24/7 Security", icon: Shield, description: "Round-the-clock safety" },
  { name: "Covered Parking", icon: Car, description: "Secure resident parking" },
  { name: "Lobby Lounge", icon: Sofa, description: "Premium reception area" },
  { name: "Sun Deck", icon: Sun, description: "Relaxation with panoramic views" },
  { name: "Social Spaces", icon: Users, description: "Community gathering areas" },
  { name: "Central Park Access", icon: TreePine, description: "1 min to Central Park" },
];

const locationHighlights = [
  { place: "Central Park", time: "1 min" },
  { place: "Silicon Central Mall", time: "2 mins" },
  { place: "Al Ain - Dubai Road", time: "2 mins" },
  { place: "Proposed Metro Station", time: "3 mins" },
  { place: "Sheikh Mohammed Bin Zayed Road", time: "3 mins" },
  { place: "DSO Lake", time: "5 mins" },
];

const galleryImages = [
  { src: oasizHero, title: "Exterior View" },
  { src: oasizPool, title: "Podium Pool" },
  { src: oasizLobby, title: "Grand Lobby" },
  { src: oasizInterior, title: "Living Space" },
];

export default function OasizProject() {
  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Oasiz by Danube | Off-Plan Dubai Apartments"
        description="Oasiz by Danube Properties — studio to 3-bedroom off-plan apartments in Dubai from AED 950K with world-class amenities."
        canonicalPath="/projects/danube/oasiz"
      />

      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={oasizHero}
            alt="Oasiz by Danube"
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
                <span className="text-primary">Oasiz</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">New Launch</span>
                <span className="badge-tag">Affordable Luxury</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Oasiz by Danube
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Affordable Luxury Homes in Dubai Silicon Oasis
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Dubai Silicon Oasis, Dubai, UAE</span>
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
                Discover Your Oasis in Dubai Silicon Oasis
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Oasiz by Danube is a visionary 38-storey residential development 
                  where luxury meets affordability in the heart of Dubai Silicon Oasis. 
                  Featuring modern studios, 1-, 2-, and 3-bedroom apartments designed 
                  with open layouts, premium finishes, and abundant natural light.
                </p>
                <p>
                  Positioned in one of Dubai's key tech and lifestyle hubs, Oasiz blends 
                  elegant design with modern amenities, offering the perfect balance of 
                  comfort and style. As a tech-centric free zone, DSO offers benefits 
                  such as 100% foreign ownership and zero taxes, making it a prime hub 
                  for innovation and an excellent choice for real estate investments.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Danube Properties</span>
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
                src={oasizInterior}
                alt="Oasiz Interior"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">8-10%</div>
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
              Unit Types
            </span>
            <h2 className="text-heading text-foreground">
              Choose Your Perfect Home
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

          {/* Private Pool Units Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card p-6 rounded-2xl flex items-center justify-between flex-wrap gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Waves className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-medium text-foreground">Private Pool Units Available</h4>
                <p className="text-sm text-muted-foreground">Select apartments feature your own private pool retreat</p>
              </div>
            </div>
            <Button variant="gold-outline" className="rounded-full">
              View Private Pool Units
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
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
              Amenities & Lifestyle
            </span>
            <h2 className="text-heading text-foreground">
              World-Class Facilities
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
              Experience Oasiz Living
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
                Dubai Silicon Oasis – Tech Hub Living
              </h2>
              <p className="text-muted-foreground mb-8">
                Dubai Silicon Oasis (DSO) is a vibrant tech community offering a 
                perfect blend of modern living and business opportunities. Strategically 
                located with easy access to Al Ain – Dubai Road and Sheikh Mohammed Bin 
                Zayed Road ensures seamless connectivity. This vibrant community is ideal 
                for families and professionals seeking a healthy, green lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {locationHighlights.map((item, index) => (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
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
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28900.957426752644!2d55.36849!3d25.1212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4f4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oasiz Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section className="section-padding bg-charcoal text-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Flexible Payment
            </span>
            <h2 className="text-heading text-background">
              1% Monthly Payment Plan
            </h2>
            <p className="text-background/70 mt-4 max-w-2xl mx-auto">
              Experience affordable luxury with Danube's signature 1% monthly payment plan. 
              Spread your payments over time while building your dream home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl border border-background/20"
            >
              <div className="text-4xl font-display font-semibold text-primary mb-2">10%</div>
              <div className="text-background/70">Down Payment</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-2xl border border-background/20"
            >
              <div className="text-4xl font-display font-semibold text-primary mb-2">55%</div>
              <div className="text-background/70">During Construction</div>
              <div className="text-xs text-primary mt-1">(1% per month)</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-2xl border border-background/20"
            >
              <div className="text-4xl font-display font-semibold text-primary mb-2">35%</div>
              <div className="text-background/70">On Handover</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button variant="gold" size="lg" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download Payment Plan
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Insight */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(214, 199, 161, 0.3)",
                      "0 0 20px rgba(214, 199, 161, 0.5)",
                      "0 0 10px rgba(214, 199, 161, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0"
                >
                  <Sparkles className="w-6 h-6 text-charcoal" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-3">
                    AI Investment Insight
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oasiz by Danube is ideal for investors and modern families seeking 
                    contemporary living in Dubai's technology-driven Silicon Oasis district. 
                    With DSO's 100% foreign ownership benefits, zero taxes, and high rental 
                    demand from tech professionals, this project offers strong capital 
                    appreciation potential. The affordable entry point starting at AED 699K 
                    combined with Danube's proven 1% monthly payment plan makes this an 
                    accessible investment for first-time buyers and seasoned investors alike.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-heading text-foreground mb-4">
              Ready to Discover Your Oasis?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get exclusive access to floor plans, pricing, and availability. 
              Our property advisors are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full">
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
      
    </div>
  );
}
