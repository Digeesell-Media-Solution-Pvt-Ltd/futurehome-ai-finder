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
  Users,
  Car,
  Briefcase,
  Coffee,
  ShoppingBag,
  Utensils,
  Gamepad2,
  Leaf,
  Sun,
  Bike
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import damacDistrictHero from "@/assets/projects/damac-district-hero.jpg";
import damacDistrictPool from "@/assets/projects/damac-district-pool.jpg";
import damacDistrictGym from "@/assets/projects/damac-district-gym.jpg";
import damacDistrictLifestyle from "@/assets/projects/damac-district-lifestyle.jpg";

const quickStats = [
  { label: "Starting Price", value: "AED 1.59M", icon: TrendingUp },
  { label: "Handover", value: "Q3 2029", icon: Calendar },
  { label: "Unit Type", value: "1-2 BR", icon: Home },
  { label: "Community", value: "42M sq.ft", icon: MapPin },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "Up to 1,006 sq.ft", price: "From AED 1,591,000" },
  { type: "2 Bedroom Apartment", size: "Up to 1,400 sq.ft", price: "From AED 2,100,000" },
  { type: "Office Space", size: "Various Sizes", price: "Contact for Price" },
];

const amenities = [
  { name: "Whispering Waters", icon: Waves, description: "Serene streams and organic pool sanctuary" },
  { name: "Cloud Zen Lounge", icon: Leaf, description: "Yoga, calm waters, and tranquil relaxation" },
  { name: "AI Training Gym", icon: Dumbbell, description: "High-tech gym with AI-powered training" },
  { name: "Private Dining Pods", icon: Utensils, description: "Exclusive meals in nature's embrace" },
  { name: "Sunset Bar", icon: Coffee, description: "Signature cocktails with golden sky views" },
  { name: "Padel Courts", icon: Gamepad2, description: "World-class courts for competition" },
  { name: "Trump Golf Club", icon: TreePine, description: "30,000 sq.ft luxury clubhouse access" },
  { name: "Outdoor Workspaces", icon: Briefcase, description: "Flexible pods with garden views" },
  { name: "Retail & Dining", icon: ShoppingBag, description: "Curated retail and F&B experiences" },
  { name: "Cycling Tracks", icon: Bike, description: "Scenic trails through the community" },
  { name: "Kids Play Areas", icon: Users, description: "Safe and engaging play zones" },
  { name: "Green Parks", icon: Sun, description: "Landscaped gardens and walkways" },
];

const locationHighlights = [
  { place: "Trump International Golf Club", time: "5 mins" },
  { place: "Dubai Autodrome", time: "10 mins" },
  { place: "Dubai Sports City", time: "10 mins" },
  { place: "Mall of Emirates", time: "15 mins" },
  { place: "Dubai International Airport", time: "20 mins" },
  { place: "Al Maktoum International Airport", time: "20 mins" },
];

const investmentHighlights = [
  "Mixed-use development in established DAMAC Hills community",
  "42 million sq.ft master community with golf course",
  "60/40 payment plan for flexible investment",
  "Live, work, and play lifestyle destination",
  "Premium rental yield potential in golf community",
  "DAMAC developer credibility and track record",
];

const galleryImages = [
  { src: damacDistrictHero, title: "Masterplan View" },
  { src: damacDistrictPool, title: "Whispering Waters" },
  { src: damacDistrictGym, title: "AI Training Gym" },
  { src: damacDistrictLifestyle, title: "Padel Courts" },
];

export default function DamacDistrictProject() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={damacDistrictHero}
            alt="DAMAC District"
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
                <span className="text-primary">DAMAC District</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Mixed-Use</span>
                <span className="badge-tag">DAMAC Hills</span>
                <span className="badge-tag">Golf Community</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                DAMAC District
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Your Home. Your Office. One Address in DAMAC Hills
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>DAMAC Hills, Dubai, UAE</span>
              </div>

              {/* Quick Stats */}
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

      {/* Live Work Play Strip */}
      <section className="py-8 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-primary mb-3">Where Ambition and Lifestyle Meet in Perfect Harmony</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Live Without Limits", "Work Productively", "Play Endlessly"].map((item, index) => (
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
                A Vibrant Lifestyle Hub in DAMAC Hills
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Rising within DAMAC Hills, this vibrant destination features luxury residences, 
                  contemporary offices, and curated amenities to create a place where ambition and 
                  lifestyle meet in perfect harmony.
                </p>
                <p>
                  Here, balance is effortless. From serene water retreats, yoga gardens, and private 
                  dining pods to AI-powered gyms, padel courts, and wellness therapies, every detail 
                  has been shaped to ensure wellness, leisure, and productivity flow as one.
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
                src={damacDistrictPool}
                alt="DAMAC District Amenities"
                className="rounded-2xl shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-semibold text-foreground">7-9%</div>
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
              Available Units
            </span>
            <h2 className="text-heading text-foreground">
              Premium Apartments & Office Spaces
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
                  {unit.type.includes("Office") ? (
                    <Briefcase className="w-8 h-8 text-primary" />
                  ) : (
                    <Home className="w-8 h-8 text-primary" />
                  )}
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
              Live, Work, Play Without Limits
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
              Experience DAMAC District Living
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
                DAMAC District is ideally situated within the renowned DAMAC Hills community, 
                offering convenient access to Dubai's key destinations, world-class golf, 
                entertainment, and shopping.
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
                src={damacDistrictLifestyle}
                alt="DAMAC District Location"
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
                Why Invest in DAMAC District?
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
                "DAMAC District is ideal for lifestyle investors and professionals seeking a premium 
                live-work environment within an established golf community. The mixed-use format and 
                DAMAC Hills location offer strong long-term rental yield potential and capital appreciation."
              </p>
            </motion.div>
          </div>
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
              Ready to Explore DAMAC District?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and payment plan details. 
              Our investment advisors are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Floor Plan
              </Button>
              <Button variant="gold" size="lg" className="rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Download Price Plan
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
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

          <div className="flex justify-center">
            <Link
              to="/projects/damac/damac-islands-2"
              className="group bubble-card overflow-hidden max-w-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={damacDistrictHero}
                  alt="DAMAC Islands 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  DAMAC Islands 2
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Tropical Island Villas</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  View Project <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
