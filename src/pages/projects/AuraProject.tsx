import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  BadgeCheck, 
  Download, 
  Phone, 
  MessageCircle,
  Building2,
  Sparkles,
  Dumbbell,
  Car,
  Waves,
  TreePine,
  Train,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/projects/aura-hero.jpg";
import interiorImage from "@/assets/projects/aura-interior.jpg";
import poolImage from "@/assets/projects/aura-pool.jpg";
import gymImage from "@/assets/projects/aura-gym.jpg";

const projectData = {
  name: "Aura",
  developer: "Azizi Developments",
  location: "Jebel Ali, Dubai",
  type: "Residential Tower (Completed)",
  units: "1 & 2 Bedroom",
  handover: "Ready",
  price: "AED 1.33M",
  roi: "7-9%",
  floors: "G+17",
  totalUnits: "479 Apartments",
  
  overview: `Mix business with leisure, elegantly. You split your life across two worlds and you need a home that helps you do so with finesse.

Welcome to Aura—a game changer of a residence. This beacon of elevated living, nestled in the vibrant heart of Dubai's JAFZA effortlessly combines comfort and adventure.

With every corner echoing sophistication, Aura is more than a residence—it's the meeting point of work and leisure that ensures you thrive.`,

  highlights: [
    "Ready to Move In",
    "Direct Metro Access (UAE Exchange)",
    "G+17 Tower with 479 Units",
    "1 & 2 Bedroom Options",
    "Landscaped Gardens",
    "Prime JAFZA Location"
  ],

  amenities: [
    { icon: Waves, name: "Swimming Pool", description: "Outdoor pool with sun deck" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym equipment" },
    { icon: TreePine, name: "Landscaped Gardens", description: "Beautifully manicured outdoor spaces" },
    { icon: Car, name: "Covered Parking", description: "Secure basement parking" },
    { icon: Users, name: "24/7 Security", description: "Round-the-clock security services" },
    { icon: Train, name: "Metro Access", description: "Direct link to UAE Exchange Metro" }
  ],

  connectivity: [
    { time: "1 min", destination: "UAE Exchange Metro Station" },
    { time: "5 min", destination: "Jebel Ali Free Zone" },
    { time: "10 min", destination: "Ibn Battuta Mall" },
    { time: "15 min", destination: "Expo 2020 Site" },
    { time: "20 min", destination: "Al Maktoum International Airport" },
    { time: "25 min", destination: "Dubai Marina" },
    { time: "30 min", destination: "Dubai Mall & Downtown" }
  ],

  gallery: [
    { src: heroImage, alt: "Aura Tower Exterior" },
    { src: interiorImage, alt: "Modern Interior" },
    { src: poolImage, alt: "Swimming Pool" },
    { src: gymImage, alt: "Fitness Center" }
  ]
};

export default function AuraProject() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971000000000?text=Hi, I'm interested in Aura by Azizi in Jebel Ali", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={projectData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container-luxury">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge-tag flex items-center gap-1">
                    <Train className="w-3 h-3" />
                    Metro Access
                  </span>
                  <span className="badge-tag">Ready Property</span>
                  <span className="badge-tag">Investment</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">
                  {projectData.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>{projectData.developer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{projectData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{projectData.handover}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-primary font-semibold">{projectData.roi} Expected ROI</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Info Bar */}
        <section className="bg-card border-b border-border py-6">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                <p className="text-xl font-semibold text-foreground">{projectData.price}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Unit Types</p>
                <p className="text-xl font-semibold text-foreground">{projectData.units}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Tower Height</p>
                <p className="text-xl font-semibold text-foreground">{projectData.floors}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                <p className="text-xl font-semibold text-foreground">{projectData.totalUnits}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="text-xl font-semibold text-primary">{projectData.handover}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display text-foreground mb-4">Mix Business with Leisure, Elegantly</h2>
                  <div className="prose prose-lg text-muted-foreground">
                    {projectData.overview.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display text-foreground mb-6">Key Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <Train className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{highlight}</span>
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
                  <h2 className="text-2xl font-display text-foreground mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {projectData.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="absolute bottom-3 left-3 text-white text-sm">{image.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display text-foreground mb-6">Premium Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectData.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <amenity.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{amenity.name}</h3>
                          <p className="text-sm text-muted-foreground">{amenity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display text-foreground mb-6">Location & Connectivity</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground mb-6">
                      Aura enjoys a prime location in Jebel Ali with direct access to UAE Exchange Metro Station. This strategic position offers excellent connectivity to Dubai's major business and entertainment hubs while providing a peaceful residential environment.
                    </p>
                    <div className="space-y-3">
                      {projectData.connectivity.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-foreground">{item.destination}</span>
                          <span className="text-primary font-semibold">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* AI Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">AI Investment Insight</h3>
                      <p className="text-muted-foreground">
                        Aura is ideal for working professionals and budget-conscious buyers seeking value in Dubai. The direct metro connectivity and proximity to JAFZA make it attractive for corporate tenants. As a ready property, it offers immediate rental income potential with no construction risk, making it perfect for investors seeking stable returns in a growing business district.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - CTA Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Aura?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" asChild>
                        <a href="tel:+971000000000">
                          <Phone className="w-4 h-4 mr-2" />
                          Book a Call
                        </a>
                      </Button>
                      
                      <Button variant="gold-outline" className="w-full" onClick={handleWhatsApp}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="#" download>
                          <Download className="w-4 h-4 mr-2" />
                          Download Floor Plans
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="#" download>
                          <Download className="w-4 h-4 mr-2" />
                          Download Price Plan
                        </a>
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-muted/50 rounded-xl p-4 text-center"
                  >
                    <p className="text-sm text-muted-foreground">
                      This project is verified by our team
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <BadgeCheck className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">Azizi Certified</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
