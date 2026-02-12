import { motion } from "framer-motion";
import { 
  ArrowRight, Download, Phone, TrendingUp, 
  MapPin, Building, Calendar, Home, Waves, Dumbbell, 
  Baby, Gamepad2, Utensils, Heart, Briefcase,
  Star, Check, Sparkles, Mountain
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import bayz102Hero from "@/assets/projects/bayz102-hero.jpg";
import bayz102Pool from "@/assets/projects/bayz102-pool.jpg";
import bayz102Lobby from "@/assets/projects/bayz102-lobby.jpg";
import bayz102Interior from "@/assets/projects/bayz102-interior.jpg";

const quickStats = [
  { label: "Starting From", value: "AED 1.38M", icon: TrendingUp },
  { label: "Location", value: "Business Bay, Dubai", icon: MapPin },
  { label: "Developer", value: "Danube Properties", icon: Building },
  { label: "Handover", value: "June 2029", icon: Calendar },
  { label: "Bedrooms", value: "Studio - Penthouse", icon: Home },
  { label: "Payment Plan", value: "1% Monthly", icon: Check },
];

const unitTypes = [
  { type: "Studio", size: "363-405 sq.ft." },
  { type: "1 Bedroom", size: "700-850 sq.ft." },
  { type: "2 Bedroom", size: "1,100-1,300 sq.ft." },
  { type: "3 Bedroom", size: "1,500-1,800 sq.ft." },
  { type: "4 Bedroom", size: "2,200-2,600 sq.ft." },
  { type: "Penthouse", size: "3,500+ sq.ft." },
];

const amenityCategories = [
  {
    title: "Pools & Wellness",
    icon: Waves,
    amenities: ["Infinity Pool", "Sky Pool", "Jacuzzi", "Spa & Sauna", "Health Club", "Aquatic Gym"],
  },
  {
    title: "Fitness & Sports",
    icon: Dumbbell,
    amenities: ["State-of-art Gym", "Yoga Studio", "Sports Courts", "Jogging Track", "Boxing Ring", "Outdoor Gym"],
  },
  {
    title: "Kids & Family",
    icon: Baby,
    amenities: ["Kids Play Zone", "Splash Pool", "Daycare", "Kids Cinema", "Indoor Games", "Learning Center"],
  },
  {
    title: "Recreation",
    icon: Gamepad2,
    amenities: ["Cinema Hall", "Gaming Zone", "Billiards Room", "Library Lounge", "Music Room", "Art Studio"],
  },
  {
    title: "Lifestyle",
    icon: Utensils,
    amenities: ["Sky Lounge", "BBQ Area", "Party Hall", "Rooftop Terrace", "Landscaped Gardens", "Cabanas"],
  },
  {
    title: "Premium Services",
    icon: Briefcase,
    amenities: ["Helipad", "Concierge", "Valet Parking", "EV Charging", "Smart Home", "24/7 Security"],
  },
];

const highlights = [
  "Burj Khalifa & Canal Views",
  "Helipad Access",
  "Italian DOLCE VITA Furniture",
  "1% Monthly Payment Plan",
  "Fully Furnished Units",
  "956 Premium Apartments",
];

const distances = [
  { place: "Burj Khalifa", time: "5 min" },
  { place: "Dubai Mall", time: "7 min" },
  { place: "DIFC", time: "8 min" },
  { place: "Dubai Canal", time: "2 min" },
  { place: "Dubai Airport", time: "15 min" },
  { place: "Palm Jumeirah", time: "20 min" },
];

export default function Bayz102Project() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={bayz102Hero}
            alt="Bayz 102 by Danube"
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
                <span className="badge-tag">Business Bay</span>
                <span className="badge-tag">Luxury Living</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4">
                Bayz 102 by Danube
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-6">
                Your Home in the Sky — Luxury Living with Burj Khalifa & Dubai Canal Views
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
                <h2 className="text-heading text-foreground mb-6">About Bayz 102</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Imagine owning a piece of Dubai's iconic skyline, with each morning greeted by stunning 
                    views of the Burj Khalifa and serene Dubai Canal. BAYZ 102 by Danube, the crown jewel 
                    of Danube Properties, turns this dream into reality.
                  </p>
                  <p>
                    Every detail is crafted for sophistication, from the fully furnished homes with premium 
                    Italian DOLCE VITA furniture to the exclusive helipad offering effortless access to 
                    Sky Taxis and Helicopters. This isn't just a home; it's a lifestyle of unmatched 
                    convenience and elegance, designed for those who demand the best.
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
                <h2 className="text-heading text-foreground mb-6">Unit Types & Layouts</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {unitTypes.map((unit, index) => (
                    <div key={index} className="glass-panel p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">{unit.type}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{unit.size}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location Distances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Prime Business Bay Location</h2>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Business Bay, Bayz 102 offers unparalleled access to Dubai's 
                  most iconic landmarks and business districts. The Dubai Canal waterfront provides 
                  a serene lifestyle while being minutes away from the city's vibrant attractions.
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
                      src={bayz102Pool}
                      alt="Infinity Pool"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={bayz102Lobby}
                      alt="Lobby"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden col-span-2">
                    <img
                      src={bayz102Interior}
                      alt="Interior"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Flexible Payment Plan</h2>
                <div className="glass-card p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-primary/5 rounded-xl">
                      <div className="text-4xl font-display font-semibold text-primary mb-2">70%</div>
                      <div className="text-sm text-muted-foreground">During Construction</div>
                      <div className="text-xs text-muted-foreground mt-1">Pay 1% Monthly</div>
                    </div>
                    <div className="text-center p-6 bg-primary/5 rounded-xl">
                      <div className="text-4xl font-display font-semibold text-primary mb-2">30%</div>
                      <div className="text-sm text-muted-foreground">Post Handover</div>
                      <div className="text-xs text-muted-foreground mt-1">Flexible Terms</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    One of the most attractive payment plans in Business Bay, designed for hassle-free investing.
                  </p>
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
                      <strong>Ideal for:</strong> Investors and luxury seekers targeting high-growth 
                      potential in Dubai's most prestigious business district. With Burj Khalifa views, 
                      premium finishes, and excellent rental demand from professionals, Bayz 102 offers 
                      projected yields of 7-9% with strong capital appreciation. The helipad access 
                      and Italian furnishings add exceptional value for the ultra-luxury market segment.
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
                    Experience Bayz 102 in immersive 360° detail
                  </p>
                  <Button variant="gold-outline" size="sm" className="w-full rounded-full" asChild>
                    <a href="https://view.propvr.tech/m7FKGa/projectscene/6694f167bad40b8cfa62094e/6697cd9499d23eab75aa1ba4" target="_blank" rel="noopener noreferrer">
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
                    One of Dubai's most trusted developers with 49+ successful projects delivered.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/developers/7">
                      View Developer Profile
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Related Projects */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="glass-panel p-5 rounded-xl"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-4">
                    Related Projects
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: "shahrukhz", name: "Shahrukhz", location: "Sheikh Zayed Road", price: "AED 1.9M" },
                      { id: "sparklz", name: "Sparklz", location: "Al Furjan", price: "AED 900K" },
                      { id: "aspirz", name: "Aspirz", location: "Sports City", price: "AED 850K" },
                    ].map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="block p-3 rounded-lg hover:bg-background/50 transition-colors"
                      >
                        <div className="font-medium text-foreground text-sm">{project.name} by Danube</div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                          <span>{project.location}</span>
                          <span className="text-primary">{project.price}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
