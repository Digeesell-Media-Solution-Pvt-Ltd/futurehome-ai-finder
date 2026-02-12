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
  Baby,
  Heart,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/projects/samana-boulevard-hero.jpg";
import interiorImage from "@/assets/projects/samana-boulevard-interior.jpg";
import poolImage from "@/assets/projects/samana-boulevard-pool.jpg";
import spaImage from "@/assets/projects/samana-boulevard-spa.jpg";

const projectData = {
  name: "Samana Boulevard Heights",
  developer: "Samana Developers",
  location: "Arjan, Dubai",
  type: "Residential Apartments",
  units: "Studio, 1 & 2 Bedroom",
  handover: "2028",
  price: "AED 893K",
  roi: "8-10%",
  
  overview: `Samana Boulevard Heights offers a sanctuary for those seeking balance between luxury and wellness. More than a home, it's a lifestyle destination where sophistication meets comfort in every thoughtfully designed space.

The development features Samana's signature private balcony pools, allowing residents to enjoy their own personal oasis with stunning views. Every unit is crafted with wellness in mind, creating homes that nurture both body and mind.

With wide boulevards, open greens, and an abundance of urban conveniences, Boulevard Heights reflects a new way of living—balanced between connection and calm, perfect for health-conscious investors and rental-focused buyers.`,

  highlights: [
    "Private Balcony Pools",
    "Studio, 1 & 2 BR Options",
    "Wellness-Focused Design",
    "Smart Home Features",
    "Spa-Level Amenities",
    "Near Miracle Garden"
  ],

  amenities: [
    { icon: Waves, name: "Private Pools", description: "Balcony plunge pools" },
    { icon: Heart, name: "Wellness Spa", description: "Sauna & steam rooms" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym" },
    { icon: Baby, name: "Kids Play Zone", description: "Safe play areas" },
    { icon: Users, name: "Concierge", description: "24/7 concierge services" },
    { icon: Car, name: "Covered Parking", description: "Secure basement parking" }
  ],

  connectivity: [
    { time: "5 min", destination: "Miracle Garden" },
    { time: "8 min", destination: "Global Village" },
    { time: "10 min", destination: "Motor City" },
    { time: "15 min", destination: "Mall of the Emirates" },
    { time: "20 min", destination: "Dubai Marina" },
    { time: "25 min", destination: "Downtown Dubai" },
    { time: "30 min", destination: "Dubai International Airport" }
  ],

  gallery: [
    { src: heroImage, alt: "Samana Boulevard Heights" },
    { src: interiorImage, alt: "Private Pool Interior" },
    { src: poolImage, alt: "Rooftop Leisure Deck" },
    { src: spaImage, alt: "Wellness Spa" }
  ]
};

export default function SamanaBoulevardProject() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971565204129?text=Hi, I'm interested in Samana Boulevard Heights in Arjan", "_blank");
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
                    <Heart className="w-3 h-3" />
                    Wellness Living
                  </span>
                  <span className="badge-tag">Balcony Pools</span>
                  <span className="badge-tag">Featured</span>
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
                    <span>Handover: {projectData.handover}</span>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                <p className="text-xl font-semibold text-foreground">{projectData.price}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Unit Types</p>
                <p className="text-xl font-semibold text-foreground">{projectData.units}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Expected ROI</p>
                <p className="text-xl font-semibold text-primary">{projectData.roi}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Handover</p>
                <p className="text-xl font-semibold text-foreground">{projectData.handover}</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Smart Wellness Living in Arjan</h2>
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
                        <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">Wellness Amenities</h2>
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
                      Boulevard Heights enjoys a prime position in Arjan, one of Dubai's fastest-growing communities. The location offers easy access to major attractions like Miracle Garden and Global Village, while maintaining excellent connectivity to business districts and entertainment hubs.
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
                        Samana Boulevard Heights is ideal for health-conscious investors and rental-focused buyers. The private balcony pools are a unique selling point that commands premium rental rates and strong tenant demand. The wellness-focused amenities attract long-term tenants seeking quality lifestyle, making it excellent for both holiday rentals and annual leasing strategies.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Boulevard Heights?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" asChild>
                        <a href="tel:+971800726262">
                          <Phone className="w-4 h-4 mr-2" />
                          Book Tour
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
                          Floor Plan
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="#" download>
                          <Download className="w-4 h-4 mr-2" />
                          Brochure
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
                      <span className="text-sm font-medium text-foreground">Samana Certified</span>
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
