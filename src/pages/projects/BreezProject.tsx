import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowLeft, ArrowRight, Download, Phone, MessageCircle, MapPin, Building, 
  Calendar, Bed, TrendingUp, BadgeCheck, Heart, Share2, Play,
  Waves, Dumbbell, Film, Utensils, TreePalm, Baby, Gamepad2, Car,
  Sparkles, Coffee, Wifi
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import breezHero from "@/assets/projects/breez-hero.jpg";
import breezAmenities from "@/assets/projects/breez-amenities.jpg";
import breezRooftop from "@/assets/projects/breez-rooftop.jpg";

const amenitiesGroups = [
  {
    title: "Pool & Leisure",
    icon: Waves,
    items: ["Infinity Pool", "Kid's Pool", "Kid's Splash Pool", "Jacuzzi", "Pool Bar", "Beach Deck", "Water Lounges", "Sunbed Relaxing Zone"],
  },
  {
    title: "Fitness & Sports",
    icon: Dumbbell,
    items: ["Gym", "Outdoor Gym", "Padel Court", "Badminton Court", "Cricket Court", "Table Tennis Zone", "Running Track"],
  },
  {
    title: "Entertainment",
    icon: Film,
    items: ["Cinema", "Multipurpose Hall", "Club House", "Indoor Games", "Cigar Lounge", "Sky Lounge"],
  },
  {
    title: "Kids & Family",
    icon: Baby,
    items: ["Kid's Playground", "Kid's Wall Climbing", "Sand Playground", "Trampoline", "Kid's Daycare", "Multi-Functional Kid's Bridge"],
  },
  {
    title: "Wellness & Relaxation",
    icon: TreePalm,
    items: ["Spa", "Zen Garden", "Open Air Yoga", "Hammock Zone", "Sunken Seating", "Breez Swing"],
  },
  {
    title: "Dining & Social",
    icon: Utensils,
    items: ["BBQ Area", "Garden Walk", "Outdoor Shower"],
  },
];

const floorPlans = [
  { type: "Flex Studio A", size: "414 sq.ft", floors: "2-46" },
  { type: "Flex Studio B", size: "411-447 sq.ft", floors: "2-46" },
  { type: "Flex Studio C", size: "478 sq.ft", floors: "2-46" },
  { type: "Flex Studio D", size: "466 sq.ft", floors: "2-46" },
  { type: "1 Bedroom A", size: "702-738 sq.ft", floors: "2-46" },
  { type: "1 Bedroom B", size: "672-694 sq.ft", floors: "2-46" },
  { type: "2 Bedroom", size: "1,129 sq.ft", floors: "2-46" },
  { type: "3 Bedroom", size: "1,525 sq.ft", floors: "2-46" },
];

const highlights = [
  { label: "Floors", value: "60" },
  { label: "Amenities", value: "40+" },
  { label: "Starting Price", value: "AED 700K" },
  { label: "Handover", value: "Q4 2028" },
];

export default function BreezProjectPage() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={breezHero}
            alt="Breez by Danube"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
          
          {/* Back Button */}
          <div className="absolute top-24 left-0 right-0 z-10">
            <div className="container-luxury">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-background hover:bg-background/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Projects</span>
              </Link>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="container-luxury pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Waterfront", "High ROI", "Fully Furnished", "Premium Living"].map((tag) => (
                    <span key={tag} className="badge-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                  Breez by Danube
                </h1>
                
                {/* Location & Developer */}
                <div className="flex flex-wrap items-center gap-4 text-background/80">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Dubai Maritime City
                  </span>
                  <span className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Danube Properties
                  </span>
                  <span className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    Verified Developer
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="bg-charcoal py-6 relative z-20 -mt-1">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-semibold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-background/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container-luxury py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Summary */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">About the Project</h2>
                <div className="glass-card p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Breez by Danube is a 60-storey fully furnished oceanfront tower featuring over 40 resort-style amenities. 
                    Designed with marble, fluted glass, travertine and inspired by oceanic tranquility, this project offers 
                    premium investment potential in Dubai Maritime City.
                  </p>
                  
                  {/* AI Insight */}
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-charcoal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">AI Investment Insight</p>
                        <p className="text-sm text-muted-foreground">
                          Ideal for investors seeking waterfront lifestyle with high rental yield potential. 
                          Dubai Maritime City is an emerging hotspot with projected 12-15% capital appreciation by handover.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Unit Types */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">Available Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {floorPlans.map((plan, index) => (
                    <motion.div
                      key={plan.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bubble-card p-5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">{plan.type}</h3>
                        <Bed className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{plan.size}</span>
                        <span>Floors {plan.floors}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Amenities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">40+ Resort-Style Amenities</h2>
                
                {/* Amenities Image */}
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <img
                    src={breezAmenities}
                    alt="Breez Amenities"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>

                {/* Rooftop Image */}
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <img
                    src={breezRooftop}
                    alt="Breez Rooftop Amenities"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-background">60th Floor Sky Amenities</span>
                  </div>
                </div>
                
                {/* Amenities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {amenitiesGroups.map((group, index) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-5"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <group.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-medium text-foreground">{group.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Developer Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-heading text-foreground mb-6">About the Developer</h2>
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-foreground">Danube Properties</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary">Verified Developer</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                    "We don't just build homes, we deliver trust, quality, and lifestyle."
                    <footer className="text-sm font-medium text-foreground mt-2">— Rizwan Sajan, Founder</footer>
                  </blockquote>
                  <Button variant="gold-outline" size="sm" className="rounded-full" asChild>
                    <Link to="/developers/7">
                      View All Danube Projects
                    </Link>
                  </Button>
                </div>
              </motion.section>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-6"
                >
                  <div className="text-sm text-muted-foreground mb-1">Starting Price</div>
                  <div className="text-3xl font-display font-semibold text-foreground mb-2">
                    AED 700,000
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary mb-6">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">Est. 12-15% ROI</span>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Bedrooms</span>
                      <span className="font-medium text-foreground">Studio - 3 BR</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Handover</span>
                      <span className="font-medium text-foreground">Q4 2028</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Payment Plan</span>
                      <span className="font-medium text-foreground">60/40</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Furnishing</span>
                      <span className="font-medium text-foreground">Fully Furnished</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Call
                    </Button>
                    <Button 
                      variant="gold" 
                      size="lg" 
                      className="w-full rounded-full"
                      onClick={() => window.open("https://wa.me/971800575757", "_blank")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Inquiry
                    </Button>
                  </div>

                  {/* Save & Share */}
                  <div className="flex items-center gap-2 mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      onClick={() => setIsSaved(!isSaved)}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isSaved ? "fill-primary text-primary" : ""}`} />
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </motion.div>

                {/* Downloads Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-medium text-foreground mb-4">Downloads</h3>
                  <div className="space-y-3">
                    <a
                      href="/downloads/breez-floor-plans.pdf"
                      download
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <Download className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Floor Plans</div>
                        <div className="text-xs text-muted-foreground">PDF • 2.5 MB</div>
                      </div>
                    </a>
                    <a
                      href="/downloads/breez-floor-plans.pdf"
                      download
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <Download className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Price Plan</div>
                        <div className="text-xs text-muted-foreground">PDF • 1.2 MB</div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Browse More CTA */}
        <section className="bg-cream section-padding">
          <div className="container-luxury text-center">
            <h2 className="text-heading text-foreground mb-4">Explore More Projects</h2>
            <p className="text-muted-foreground mb-6">Discover other off-plan opportunities from top developers.</p>
            <Button variant="gold" asChild>
              <Link to="/projects">
                Browse All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
