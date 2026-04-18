import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Phone, TrendingUp, 
  MapPin, Building, Calendar, Home, Waves, Dumbbell, 
  Baby, Gamepad2, Utensils, Briefcase,
  Star, Check, Sparkles, Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import aspirzHero from "@/assets/projects/aspirz-hero.jpg";
import aspirzPool from "@/assets/projects/aspirz-pool.jpg";
import aspirzLobby from "@/assets/projects/aspirz-lobby.jpg";
import aspirzGym from "@/assets/projects/aspirz-gym.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const quickStats = [
  { label: "Starting From", value: "AED 850K", icon: TrendingUp },
  { label: "Location", value: "Sports City, Dubai", icon: MapPin },
  { label: "Developer", value: "Danube Properties", icon: Building },
  { label: "Handover", value: "Q4 2028", icon: Calendar },
  { label: "Units", value: "Studio - 3 BR + Offices", icon: Home },
  { label: "Payment Plan", value: "1% Monthly", icon: Check },
];

const amenityCategories = [
  {
    title: "Pools & Wellness",
    icon: Waves,
    amenities: ["Infinity Pool", "Leisure Pool", "Jacuzzi", "Spa & Steam", "Health Club", "Wellness Zone"],
  },
  {
    title: "Fitness & Sports",
    icon: Dumbbell,
    amenities: ["Modern Gym", "Outdoor Gym", "Jogging Track", "Sports Courts", "Yoga Deck", "CrossFit Zone"],
  },
  {
    title: "Kids & Family",
    icon: Baby,
    amenities: ["Kids Play Area", "Splash Pool", "Sand Pit", "Family Lounge", "Landscaped Gardens", "Pet Area"],
  },
  {
    title: "Recreation",
    icon: Gamepad2,
    amenities: ["Games Room", "Billiards", "Table Tennis", "Outdoor Cinema", "BBQ Area", "Cabana Seating"],
  },
  {
    title: "Business & Work",
    icon: Briefcase,
    amenities: ["Business Center", "Meeting Rooms", "Coworking Space", "High-Speed WiFi", "Office Floors", "Concierge"],
  },
  {
    title: "Lifestyle",
    icon: Utensils,
    amenities: ["Retail Outlets", "Café Lounge", "Multipurpose Hall", "Prayer Hall", "24/7 Security", "Covered Parking"],
  },
];

const highlights = [
  "Mixed-Use Tower (Residential + Office)",
  "Smart Convertible Apartments",
  "30+ Premium Amenities",
  "1% Monthly Payment Plan",
  "Fully Furnished Units",
  "Dubai Sports City Location",
];

const distances = [
  { place: "Dubai Autodrome", time: "5 min" },
  { place: "Dubai Sports City", time: "2 min" },
  { place: "Mall of the Emirates", time: "15 min" },
  { place: "Al Maktoum Intl Airport", time: "20 min" },
  { place: "Downtown Dubai", time: "25 min" },
  { place: "Dubai Marina", time: "18 min" },
];

const unitTypes = [
  { type: "Studio", size: "400-500 sq.ft", price: "From AED 850K" },
  { type: "1 Bedroom", size: "700-900 sq.ft", price: "From AED 1.1M" },
  { type: "2 Bedroom", size: "1,100-1,400 sq.ft", price: "From AED 1.6M" },
  { type: "3 Bedroom", size: "1,600-2,000 sq.ft", price: "From AED 2.2M" },
  { type: "Office Space", size: "500-2,000 sq.ft", price: "From AED 950K" },
];

export default function AspirzProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Aspirz by Danube | Off-Plan Dubai Sports City"
        description="Aspirz by Danube in Dubai Sports City — off-plan 1–3 BR apartments from AED 1.1M with 40+ world-class amenities."
        canonicalPath="/projects/danube/aspirz"
      />

      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={aspirzHero}
            alt="Aspirz by Danube"
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
                <span className="badge-tag">Mixed-Use</span>
                <span className="badge-tag">Convertible</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4">
                Aspirz by Danube
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-6">
                Live Smart — Work Smart in Dubai Sports City
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
                <h2 className="text-heading text-foreground mb-6">About Aspirz</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Aspirz by Danube redefines the future of urban living and working in Dubai Sports City. 
                    Seamlessly blending premium convertible hotel apartments with modern office spaces, 
                    Aspirz offers unmatched flexibility, luxury, and functionality under one iconic address.
                  </p>
                  <p>
                    With over 30 lifestyle amenities, separate entrances for residences and offices, 
                    and fully furnished smart convertible units, Aspirz creates a dynamic environment 
                    for modern professionals and families seeking both comfort and convenience in the heart of Dubai.
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

              {/* Unit Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Unit Types & Pricing</h2>
                <div className="space-y-4">
                  {unitTypes.map((unit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-panel p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          {unit.type === "Office Space" ? (
                            <Briefcase className="w-6 h-6 text-primary" />
                          ) : (
                            <Home className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{unit.type}</div>
                          <div className="text-sm text-muted-foreground">{unit.size}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{unit.price}</div>
                      </div>
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
                      src={aspirzPool}
                      alt="Infinity Pool"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={aspirzLobby}
                      alt="Grand Lobby"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden col-span-2">
                    <img
                      src={aspirzGym}
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

              {/* Payment Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-heading text-foreground mb-6">Flexible Payment Plan</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-panel p-5 rounded-xl text-center">
                    <div className="text-4xl font-display font-semibold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">During Construction</div>
                    <div className="text-xs text-muted-foreground mt-1">(1% Monthly)</div>
                  </div>
                  <div className="glass-panel p-5 rounded-xl text-center">
                    <div className="text-4xl font-display font-semibold text-primary mb-2">30%</div>
                    <div className="text-sm text-muted-foreground">Post-Handover</div>
                    <div className="text-xs text-muted-foreground mt-1">(1% Monthly)</div>
                  </div>
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
                      <strong>Ideal for:</strong> Smart investors looking for both living and work value 
                      in a single address. Dubai Sports City's strategic location offers excellent 
                      rental yields for both residential and commercial units. The mixed-use concept 
                      provides diversification within a single investment, appealing to professionals, 
                      entrepreneurs, and families alike.
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
                   <div className="space-y-3">
                    <Button variant="hero" className="w-full rounded-full" onClick={() => openLeadCapture({ projectName: "Aspirz by Danube", ctaType: "Get Pricing" })}>
                      Get Floor Plans & Pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>

                {/* Contact Actions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                >
                  <Button variant="gold" className="w-full rounded-full" onClick={() => openLeadCapture({ projectName: "Aspirz by Danube", ctaType: "Book a Consultation" })}>
                    Book a Consultation
                  </Button>
                  <Button variant="gold-outline" className="w-full rounded-full" onClick={() => openLeadCapture({ projectName: "Aspirz by Danube", ctaType: "Request Details" })}>
                    Request Details
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
                    Experience Aspirz in immersive 360° detail
                  </p>
                  <Button variant="gold-outline" size="sm" className="w-full rounded-full" asChild>
                    <a href="https://danube.discoverin360.com/ASPIRZ/" target="_blank" rel="noopener noreferrer">
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
                  <p className="text-sm text-muted-foreground mb-4">
                    Danube Properties continues to innovate with Aspirz — combining residential 
                    comfort and professional flexibility within Dubai's dynamic Sports City.
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
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

      {/* Related Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <h2 className="text-heading text-foreground mb-8">Related Danube Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "sparklz", name: "Sparklz", location: "Al Furjan", price: "AED 900K" },
              { id: "timez", name: "Timez", location: "Dubai Silicon Oasis", price: "AED 550K" },
              { id: "breez", name: "Breez", location: "Maritime City", price: "AED 700K" },
            ].map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-5"
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-2">{project.name} by Danube</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{project.price}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/projects/${project.id}`}>
                      View
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
