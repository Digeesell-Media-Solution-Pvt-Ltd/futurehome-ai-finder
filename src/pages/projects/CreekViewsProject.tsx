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
  Store,
  Eye,
  TreePine
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/creek-views-hero.jpg";
import rooftopImage from "@/assets/projects/creek-views-rooftop.jpg";
import interiorImage from "@/assets/projects/creek-views-interior.jpg";
import poolImage from "@/assets/projects/creek-views-pool.jpg";

const projectData = {
  name: "Creek Views",
  developer: "Azizi Developments",
  location: "Dubai Healthcare City",
  type: "Residential Apartments",
  units: "Studio, 1 & 2 Bedroom",
  handover: "Ready",
  price: "AED 873K",
  roi: "8-10%",
  
  overview: `Nestled on the banks of the iconic Dubai Creek, Creek Views lays out all the capital has to offer—with panoramic views that connect Dubai's traditional vista with its futuristic cityscape.

Located close to Downtown Dubai, the residence harmoniously blends a connected lifestyle with every modern convenience, all wrapped in the calm of nature's embrace.

Discover a location perfectly tailored to your needs, complemented by elegant design. Accessible via Al Khail Road, Creek Views offers proximity to extensive shopping options at Dubai and Wafi malls.`,

  highlights: [
    "Panoramic Creek & Skyline Views",
    "Studio, 1 & 2 BR Options",
    "Rooftop Lounge with Views",
    "Near Downtown Dubai",
    "Modern Health Club & Gym",
    "Ready to Move In"
  ],

  amenities: [
    { icon: Waves, name: "Swimming Pool", description: "Luxurious pool with creek views" },
    { icon: Dumbbell, name: "Modern Gym", description: "State-of-the-art fitness equipment" },
    { icon: Eye, name: "Rooftop Lounge", description: "Panoramic skyline views" },
    { icon: Store, name: "Retail & Dining", description: "Cafés and restaurants on-site" },
    { icon: TreePine, name: "Park Views", description: "Scenic green park surroundings" },
    { icon: Car, name: "Spacious Garage", description: "Covered parking for residents" }
  ],

  connectivity: [
    { time: "2 min", destination: "Al Khail Road" },
    { time: "5 min", destination: "Dubai Creek" },
    { time: "8 min", destination: "Business Bay" },
    { time: "10 min", destination: "Downtown Dubai" },
    { time: "12 min", destination: "Wafi Mall" },
    { time: "15 min", destination: "Dubai Mall" },
    { time: "20 min", destination: "Dubai International Airport" }
  ],

  gallery: [
    { src: heroImage, alt: "Creek Views Tower" },
    { src: rooftopImage, alt: "Rooftop Lounge" },
    { src: interiorImage, alt: "Modern Interior" },
    { src: poolImage, alt: "Swimming Pool" }
  ]
};

export default function CreekViewsProject() {
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
                    <Eye className="w-3 h-3" />
                    Creek Views
                  </span>
                  <span className="badge-tag">Modern Tower</span>
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
                <p className="text-sm text-muted-foreground mb-1">Status</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Where Dubai's Past and Future Meet</h2>
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
                        <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                      Creek Views enjoys a prime location in Dubai Healthcare City with direct access to Al Khail Road. Minutes from Downtown Dubai, Business Bay, and major shopping destinations, it offers the perfect balance of urban convenience and waterfront tranquility.
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
                        Creek Views is perfect for long-term investors seeking stable rental income. The waterfront location combined with proximity to Downtown Dubai and Business Bay creates strong tenant demand from professionals. The ready-to-move status and competitive entry price point make it an attractive buy-to-let opportunity with consistent appreciation potential.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Creek Views?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: "Creek Views", ctaType: "Book a Consultation" })}>
                        <Phone className="w-4 h-4 mr-2" />
                        Book a Call
                      </Button>
                      
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: "Creek Views", ctaType: "Request Details" })}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request Details
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
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "Creek Views", ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Floor Plans
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "Creek Views", ctaType: "Download Price Plan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Price Plan
                      </Button>
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
