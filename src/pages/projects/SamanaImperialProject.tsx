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
  Heart,
  Flower2,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/projects/samana-imperial-hero.jpg";
import interiorImage from "@/assets/projects/samana-imperial-interior.jpg";
import lagoonImage from "@/assets/projects/samana-imperial-lagoon.jpg";
import zenImage from "@/assets/projects/samana-imperial-zen.jpg";

const projectData = {
  name: "Samana Imperial Garden",
  developer: "Samana Developers",
  location: "Arjan, Dubai",
  type: "Premium Apartments",
  units: "1, 2 & 3 Bedroom",
  handover: "2028",
  price: "AED 1.2M",
  roi: "8-10%",
  
  overview: `Samana Imperial Garden represents the pinnacle of nature-inspired luxury living. This elegant residential development offers a seamless blend of indoor comfort and outdoor serenity, with every design element crafted to create harmony between residents and their natural surroundings.

The floral-inspired architecture features a distinctive curved façade adorned with landscaped balconies, creating a living canvas of greenery. Each residence opens to private outdoor spaces filled with carefully curated plants, bringing the garden experience to every home.

Perfect for serenity seekers and luxury short-stay investors, Imperial Garden offers an unparalleled living experience in Arjan's wellness district, where tranquility meets sophisticated urban living.`,

  highlights: [
    "Floral-Inspired Architecture",
    "1, 2 & 3 BR Options",
    "Landscaped Balconies",
    "Lagoon Pool",
    "Zen Garden & Yoga Deck",
    "Wellness District Location"
  ],

  amenities: [
    { icon: Waves, name: "Lagoon Pool", description: "Resort-style lagoon" },
    { icon: Flower2, name: "Zen Garden", description: "Tranquil meditation spaces" },
    { icon: Heart, name: "Spa Zone", description: "Wellness & relaxation" },
    { icon: Wind, name: "Yoga Deck", description: "Outdoor yoga platform" },
    { icon: Dumbbell, name: "Fitness Center", description: "Modern gym facilities" },
    { icon: Car, name: "Covered Parking", description: "Secure parking" }
  ],

  connectivity: [
    { time: "5 min", destination: "Miracle Garden" },
    { time: "8 min", destination: "Butterfly Garden" },
    { time: "10 min", destination: "Global Village" },
    { time: "15 min", destination: "Mall of the Emirates" },
    { time: "20 min", destination: "Dubai Marina" },
    { time: "25 min", destination: "Downtown Dubai" },
    { time: "30 min", destination: "Dubai International Airport" }
  ],

  gallery: [
    { src: heroImage, alt: "Samana Imperial Garden" },
    { src: interiorImage, alt: "Premium Interior" },
    { src: lagoonImage, alt: "Lagoon Pool" },
    { src: zenImage, alt: "Zen Garden" }
  ]
};

export default function SamanaImperialProject() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971565204129?text=Hi, I'm interested in Samana Imperial Garden in Arjan", "_blank");
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
                    <Flower2 className="w-3 h-3" />
                    Imperial Living
                  </span>
                  <span className="badge-tag">Nature Inspired</span>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Grand Serenity at Arjan</h2>
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
                        <Flower2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">Signature Amenities</h2>
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
                      Imperial Garden is located in Arjan's wellness district, surrounded by lush landscapes and close to Dubai's most beloved nature attractions including Miracle Garden and Butterfly Garden. The location offers excellent connectivity while maintaining a serene, retreat-like atmosphere.
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
                        Samana Imperial Garden is perfect for serenity seekers and luxury short-stay investors. The unique floral-inspired architecture and wellness-focused amenities create strong differentiation in the market, commanding premium rates for holiday rentals. The larger unit configurations (up to 3BR) also appeal to families seeking quality living, ensuring diverse tenant demand year-round.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Imperial Garden?</h3>
                    
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
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="#" download>
                          <Download className="w-4 h-4 mr-2" />
                          Price List
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
