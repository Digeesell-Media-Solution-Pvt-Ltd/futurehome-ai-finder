import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Phone, TrendingUp, 
  MapPin, Building, Calendar, Briefcase, Layers, Users,
  Plane, Building2, Wifi, Car, Coffee, Award,
  Star, Check, Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import shahrukhzLobby from "@/assets/projects/shahrukhz-lobby.jpg";
import shahrukhzSkypool from "@/assets/projects/shahrukhz-skypool.jpg";
import shahrukhzHelipad from "@/assets/projects/shahrukhz-helipad.jpg";
import shahrukhzLounge from "@/assets/projects/shahrukhz-lounge.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const quickStats = [
  { label: "Starting From", value: "AED 1.9M", icon: TrendingUp },
  { label: "Location", value: "Sheikh Zayed Road", icon: MapPin },
  { label: "Developer", value: "Danube Properties", icon: Building },
  { label: "Completion", value: "2029", icon: Calendar },
  { label: "Floors", value: "55 Storeys", icon: Layers },
  { label: "Units", value: "615 Offices", icon: Briefcase },
];

const amenityCategories = [
  {
    title: "Executive Facilities",
    icon: Crown,
    amenities: ["Helipad", "Sky Pool", "Sky Deck", "Private Lounges", "VIP Parking", "Concierge Services"],
  },
  {
    title: "Business Services",
    icon: Briefcase,
    amenities: ["Business Center", "Meeting Rooms", "Coworking Spaces", "Video Conferencing", "High-Speed Internet", "Admin Support"],
  },
  {
    title: "Networking & Events",
    icon: Users,
    amenities: ["Networking Lounges", "Event Spaces", "Club House", "Cinema Hall", "Rooftop Terrace", "Dining Areas"],
  },
  {
    title: "Wellness & Lifestyle",
    icon: Coffee,
    amenities: ["Fitness Center", "Spa & Wellness", "Health Bar", "Relaxation Zones", "Outdoor Spaces", "Premium Cafés"],
  },
  {
    title: "Transport & Parking",
    icon: Car,
    amenities: ["Premium Parking", "EV Charging", "Valet Service", "Shuttle Service", "Metro Access", "Drop-off Zone"],
  },
  {
    title: "Technology",
    icon: Wifi,
    amenities: ["Smart Building Systems", "Fiber Connectivity", "Security Systems", "Access Control", "Climate Control", "Energy Efficient"],
  },
];

const officeTypes = [
  { type: "Standard", size: "500 - 1,000 sq.ft.", description: "Ideal for startups and small teams" },
  { type: "Executive", size: "1,000 - 3,000 sq.ft.", description: "Perfect for growing businesses" },
  { type: "Premium", size: "3,000 - 6,000 sq.ft.", description: "Designed for established companies" },
  { type: "Prestige", size: "6,000 - 11,000 sq.ft.", description: "Corporate headquarters & enterprises" },
];

const distances = [
  { place: "Palm Jumeirah", time: "5 min" },
  { place: "Dubai Marina", time: "8 min" },
  { place: "Mall of Emirates", time: "8 min" },
  { place: "Burj Al Arab", time: "8 min" },
  { place: "Dubai Intl Airport", time: "20 min" },
  { place: "Dubai Expo", time: "20 min" },
];

export default function ShahrukhzProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Shahrukhz by Danube | Off-Plan Dubai"
        description="Shahrukhz by Danube Properties — a celebrity-inspired off-plan development in Dubai featuring unique themed residences and premium amenities."
        canonicalPath="/projects/danube/shahrukhz"
      />

      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={shahrukhzLobby}
            alt="Shahrukhz by Danube"
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
                <span className="badge-tag flex items-center gap-1 bg-primary/90">
                  <Building2 className="w-3 h-3" />
                  Commercial
                </span>
                <span className="badge-tag">Grade-A Offices</span>
                <span className="badge-tag">Sheikh Zayed Road</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4">
                Shahrukhz by Danube
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-6">
                Premium 55-Storey Commercial Tower — Where Every Office Tells a Story of Success
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
                <h2 className="text-heading text-foreground mb-6">About Shahrukhz</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Rising on the iconic Sheikh Zayed Road, Shahrukhz by Danube is a premium 55-storey 
                    commercial office tower offering unmatched visibility and seamless access in the 
                    heart of Dubai. Inspired by the self-made journey of Shahrukh Khan, this tower is 
                    a tribute to those who script their own destiny.
                  </p>
                  <p>
                    Designed for entrepreneurs, business leaders, founders, and visionaries, Shahrukhz 
                    offers Grade-A office spaces ranging from 500 to 11,000 sq.ft. With world-class 
                    amenities curated for productivity, prestige, and wellbeing, every detail elevates 
                    the way you work.
                  </p>
                </div>
              </motion.div>

              {/* Office Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Office Categories</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {officeTypes.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-panel p-5 rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-medium text-foreground">{office.type}</h3>
                          <p className="text-sm text-primary">{office.size}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{office.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location & Accessibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Prime Location</h2>
                <p className="text-muted-foreground mb-6">
                  Sheikh Zayed Road is Dubai's premier business corridor, home to Fortune 500 companies, 
                  global banks, and iconic landmarks. Shahrukhz offers unparalleled visibility and 
                  connectivity to the entire UAE.
                </p>
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
                      src={shahrukhzSkypool}
                      alt="Sky Pool"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={shahrukhzHelipad}
                      alt="Helipad"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden col-span-2">
                    <img
                      src={shahrukhzLounge}
                      alt="Executive Lounge"
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
                <h2 className="text-heading text-foreground mb-6">World-Class Amenities</h2>
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
                    <div className="text-3xl font-display font-bold text-primary mb-2">70%</div>
                    <div className="text-foreground font-medium mb-1">During Construction</div>
                    <div className="text-sm text-muted-foreground">1% Monthly Payment</div>
                  </div>
                  <div className="glass-panel p-5 rounded-xl text-center">
                    <div className="text-3xl font-display font-bold text-primary mb-2">30%</div>
                    <div className="text-foreground font-medium mb-1">Post Handover</div>
                    <div className="text-sm text-muted-foreground">Flexible Terms</div>
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
                    <Award className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-2">
                      AI Investment Insight
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Ideal for:</strong> Corporate headquarters, investment portfolios, and 
                      global business expansions. Sheikh Zayed Road's prime visibility and Grade-A 
                      specifications position Shahrukhz for strong capital appreciation and premium 
                      rental yields of 7-9% in Dubai's thriving commercial sector.
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
                    Contact Advisor
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
                    <select className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors text-muted-foreground">
                      <option>Select Office Type</option>
                      <option>Standard (500-1,000 sq.ft.)</option>
                      <option>Executive (1,000-3,000 sq.ft.)</option>
                      <option>Premium (3,000-6,000 sq.ft.)</option>
                      <option>Prestige (6,000-11,000 sq.ft.)</option>
                    </select>
                    <Button variant="hero" className="w-full rounded-full">
                      Get Commercial Brochure
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
                  <Button variant="gold" className="w-full rounded-full" onClick={() => openLeadCapture({ projectName: "Shahrukhz", ctaType: "Request Details" })}>
                    Request Details
                  </Button>
                  <Button variant="gold-outline" className="w-full rounded-full" onClick={() => openLeadCapture({ projectName: "Shahrukhz", ctaType: "Book a Consultation" })}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
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
                    Experience Shahrukhz in immersive 360° detail
                  </p>
                  <Button variant="gold-outline" size="sm" className="w-full rounded-full" asChild>
                    <a href="https://danube.discoverin360.com/Shahrukh-z/" target="_blank" rel="noopener noreferrer">
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
                    "Shahrukhz exemplifies Danube's vision of iconic architecture and 
                    business-focused real estate offerings for visionaries who build empires."
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
            Discover other premium projects from Danube Properties and top UAE developers.
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
    </div>
  );
}
