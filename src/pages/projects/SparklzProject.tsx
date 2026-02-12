import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Phone, TrendingUp, 
  MapPin, Building, Calendar, Home, Waves, Dumbbell, 
  Baby, Gamepad2, Utensils, Heart, BookOpen, Briefcase,
  Star, Check, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import sparklzInterior from "@/assets/projects/sparklz-interior.jpg";
import sparklzPool from "@/assets/projects/sparklz-pool.jpg";
import sparklzLobby from "@/assets/projects/sparklz-lobby.jpg";
import sparklzGym from "@/assets/projects/sparklz-gym.jpg";

const quickStats = [
  { label: "Starting From", value: "AED 900K", icon: TrendingUp },
  { label: "Location", value: "Al Furjan, Dubai", icon: MapPin },
  { label: "Developer", value: "Danube Properties", icon: Building },
  { label: "Handover", value: "Q2 2028", icon: Calendar },
  { label: "Bedrooms", value: "Studio - 3 BR", icon: Home },
  { label: "Payment Plan", value: "1% Monthly", icon: Check },
];

const amenityCategories = [
  {
    title: "Pools & Wellness",
    icon: Waves,
    amenities: ["Infinity Pool", "Private Pool", "Jacuzzi", "Spa & Therapy", "Health Bar", "Aquatic Gym"],
  },
  {
    title: "Fitness & Sports",
    icon: Dumbbell,
    amenities: ["Indoor Gym", "Outdoor Gym", "Mini Golf", "Paddle Court", "Cricket Pitch", "Yoga Deck"],
  },
  {
    title: "Kids & Family",
    icon: Baby,
    amenities: ["Kids Play Area", "Daycare", "Splash Pool", "Sand Pit", "Trampoline", "Wall Climbing"],
  },
  {
    title: "Recreation",
    icon: Gamepad2,
    amenities: ["Basketball Court", "Badminton Court", "Table Tennis", "Snooker", "Chess Zone", "Joggers Track"],
  },
  {
    title: "Lifestyle",
    icon: Utensils,
    amenities: ["Outdoor Cinema", "BBQ Deck", "Cigar Lounge", "Party Area", "Cabana Seating", "Sparklz Garden"],
  },
  {
    title: "Services",
    icon: Briefcase,
    amenities: ["Business Center", "Library", "Prayer Hall", "Concierge", "Smart Controls", "Changing Rooms"],
  },
];

const highlights = [
  "Smart Convertible Apartments",
  "Private Balcony Pools",
  "30+ Premium Amenities",
  "1% Monthly Payment Plan",
  "Fully Furnished Units",
  "Prime Al Furjan Location",
];

const distances = [
  { place: "Gardens Metro", time: "2 min" },
  { place: "Ibn Battuta Mall", time: "5 min" },
  { place: "The Palm Jumeirah", time: "10 min" },
  { place: "Expo City", time: "11 min" },
  { place: "Global Village", time: "15 min" },
  { place: "Burj Khalifa", time: "18 min" },
];

export default function SparklzProject() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={sparklzInterior}
            alt="Sparklz by Danube"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-tag flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
                <span className="badge-tag">Smart Living</span>
                <span className="badge-tag">1% Monthly</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4">
                Sparklz by Danube
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-6">
                Live Brilliantly — Smart Living with 30+ Premium Amenities in Al Furjan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-10 -mt-16">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">About Sparklz</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    SPARKLZ by Danube brings modern elegance to the thriving community of Al Furjan. 
                    Crafted for contemporary lifestyle, this exceptional development features sleek design, 
                    a prime location, and over 30 lifestyle-enhancing amenities to offer an unmatched living experience.
                  </p>
                  <p>
                    With its perfect blend of style, comfort, and convenience, SPARKLZ stands out as the 
                    best choice for elevated urban living. The project offers smart convertible apartments 
                    where studios can transform into 1 BHKs and 1 BHKs into 2 BHKs for maximum flexibility.
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-panel p-4 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location Distances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Prime Location</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {distances.map((item, index) => (
                    <div key={index} className="glass-panel p-4 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.place}</div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={sparklzPool}
                      alt="Private Pool"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={sparklzLobby}
                      alt="Lobby"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden col-span-2">
                    <img
                      src={sparklzGym}
                      alt="Indoor Gym"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">30+ World-Class Amenities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {amenityCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bubble-card p-5"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-medium text-foreground">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.amenities.map((amenity, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* AI Insight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-2">
                      AI Investment Insight
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Ideal for:</strong> Families and young professionals seeking modern living 
                      in a connected neighborhood. Al Furjan's strategic location near the metro, malls, 
                      and Expo City offers strong rental demand with projected yields of 7-9%. The 
                      convertible apartment design adds flexibility for growing families or rental optimization.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Inquiry Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-display text-xl font-medium text-foreground mb-4">
                    Request Information
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                    <Button variant="hero" className="w-full rounded-full">
                      Get Floor Plans & Pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                >
                  <Button variant="gold" className="w-full rounded-full" asChild>
                    <a href="https://wa.me/9718005757" target="_blank" rel="noopener noreferrer">
                      WhatsApp Inquiry
                    </a>
                  </Button>
                  <Button variant="gold-outline" className="w-full rounded-full" asChild>
                    <a href="tel:+971800575757">
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Call
                    </a>
                  </Button>
                </motion.div>

                {/* Virtual Tour */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass-panel p-5 rounded-xl"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">
                    Virtual Tour
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience Sparklz in immersive 360° detail
                  </p>
                  <Button variant="gold-outline" size="sm" className="w-full rounded-full" asChild>
                    <a href="https://danube.discoverin360.com/SPARKLZ/" target="_blank" rel="noopener noreferrer">
                      Launch Virtual Tour
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </motion.div>

                {/* Developer Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-panel p-5 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Danube Properties</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "Danube's commitment to innovation shines with Sparklz — a fusion of form, 
                    functionality, and futuristic design."
                  </p>
                  <Button variant="ghost" size="sm" className="w-full mt-3" asChild>
                    <Link to="/developers/7">
                      View Developer Profile
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Projects CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury text-center">
          <h2 className="text-heading text-foreground mb-4">Explore More Projects</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover other premium off-plan projects from Danube Properties and top UAE developers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" className="rounded-full" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="gold-outline" className="rounded-full" asChild>
              <Link to="/ai-search">
                AI Property Search
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
