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
  Trees,
  Home,
  Shield,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/r-hills-hero.jpg";
import interiorImage from "@/assets/projects/r-hills-interior.jpg";
import poolImage from "@/assets/projects/r-hills-pool.jpg";
import gymImage from "@/assets/projects/r-hills-gym.jpg";

const projectData = {
  name: "R. Hills",
  tagline: "The First of Reportage's Upscale Signature Line",
  developer: "Reportage Properties",
  location: "Dubailand, Dubai",
  type: "Gated Townhouse Community",
  units: "3 & 4 Bedroom Townhouses",
  handover: "2026",
  price: "AED 1.8M",
  roi: "8-10%",
  
  overview: `In a community where real connections thrive and authenticity is the keyword, everyday life becomes an experience to celebrate. Nestled in the heart of Dubai yet away from the bustle, R Hills is a contemporary gated townhouse community tailored to redefine high-end signature living.

With timeless designs and world-class amenities, R Hills in Dubai offers an unmatched lifestyle for those who seek serenity and a life of absolute authenticity. Sleek architecture sings in shades of blues, evoking a rhythm of calm elegance and soulful sophistication like the timeless melodies of a jazz ballad.

With a warm touch of wood on the aesthetic facades, bold patterns, and a unique colour palette, R Hills stands out as an icon of timeless beauty in Dubailand's most sought-after residential enclave.`,

  highlights: [
    "Gated Townhouse Community",
    "3 & 4 Bedroom Options",
    "Smart Home Features",
    "Landscaped Gardens",
    "Swimming Pool",
    "Premium Finishes"
  ],

  amenities: [
    { icon: Home, name: "Gated Community", description: "Secure private enclave" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym" },
    { icon: Trees, name: "Landscaped Gardens", description: "Lush green spaces" },
    { icon: Users, name: "Community Areas", description: "Social gathering spaces" },
    { icon: Shield, name: "24/7 Security", description: "Round-the-clock safety" },
    { icon: Car, name: "Private Parking", description: "Dedicated parking spaces" }
  ],

  connectivity: [
    { time: "5 min", destination: "Dubai Sports City" },
    { time: "10 min", destination: "Dubai Investment Park" },
    { time: "15 min", destination: "Cityland Mall" },
    { time: "15 min", destination: "Global Village" },
    { time: "15 min", destination: "Plantation Equestrian & Polo Club" },
    { time: "20 min", destination: "Al Maktoum International Airport" },
    { time: "30 min", destination: "Palm Jumeirah" },
    { time: "35 min", destination: "Burj Khalifa" }
  ],

  gallery: [
    { src: heroImage, alt: "R. Hills Exterior" },
    { src: interiorImage, alt: "Luxury Interior" },
    { src: poolImage, alt: "Swimming Pool" },
    { src: gymImage, alt: "Fitness Center" }
  ]
};

export default function RHillsProject() {
  const { openLeadCapture } = useLeadCapture();

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
                    <Home className="w-3 h-3" />
                    Townhouses
                  </span>
                  <span className="badge-tag">Dubailand</span>
                  <span className="badge-tag">Gated Community</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-2">
                  {projectData.name}
                </h1>
                <p className="text-xl text-primary font-display italic mb-4">{projectData.tagline}</p>
                
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Signature Living in Dubailand</h2>
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
                        <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">Community Amenities</h2>
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
                      Dubailand is designed to be Dubai's entertainment hub, stretching across an immense 3 billion square feet in the heart of the city. R Hills enjoys excellent connectivity to major landmarks, leisure attractions, and transport links.
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
                        R Hills represents Reportage's first upscale signature development, positioning it as a premium offering in the growing Dubailand district. The gated townhouse format appeals to families seeking space and privacy within a community setting. Dubailand's emergence as a popular residential destination, combined with excellent connectivity and competitive townhouse pricing, creates strong potential for capital appreciation and family rental demand.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in R. Hills?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}>Enquire Now</Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>Request Details</Button>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}><Download className="w-4 h-4 mr-2" />Brochure</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Factsheet</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Unit Types</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Master Plan</Button>
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
                      <span className="text-sm font-medium text-foreground">Reportage Certified</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
