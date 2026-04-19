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
  Waves,
  Dumbbell,
  Palmtree,
  Umbrella,
  Ship,
  TreePalm,
  Home
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/shoreline-hero.jpg";
import poolImage from "@/assets/projects/shoreline-pool.jpg";
import interiorImage from "@/assets/projects/shoreline-interior.jpg";
import beachImage from "@/assets/projects/shoreline-beach.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const projectData = {
  name: "Shoreline by DAMAC",
  developer: "DAMAC Properties",
  location: "Al Marjan Island, Ras Al Khaimah",
  type: "Luxury Apartments & Townhouses",
  units: "1-5 Bedroom Residences",
  handover: "2028",
  roi: "8-10%",
  paymentPlan: "1% Monthly",
  
  overview: `Discover a world where luxury meets artistry. Nestled on Al Marjan Island, these branded beachfront residences blend sophistication with island charm.

Shoreline by DAMAC offers a curated selection of 4- and 5-bedroom townhouses, alongside 1-, 2-, and 3-bedroom apartments, each crafted for the ultimate beachside retreat.

With direct access to pristine sands and world-class amenities, every moment feels like paradise. Where art meets island living, experience the finest coastal luxury in the UAE.`,

  highlights: [
    "Branded Beachfront Residences",
    "1-5 Bedroom Apartments & Townhouses",
    "Direct Private Beach Access",
    "Al Marjan Island Prime Location",
    "World-Class Amenities",
    "1% Monthly Payment Plan"
  ],

  amenities: [
    { icon: Waves, name: "Adult Pool", description: "Infinity pool with breathtaking beach views" },
    { icon: Waves, name: "Kids' Pool", description: "Safe shallow waters with beach views" },
    { icon: TreePalm, name: "Bamboo Forest", description: "Refreshing escape with natural cooling" },
    { icon: Dumbbell, name: "Fitness Center", description: "Light-filled gym with cutting-edge equipment" },
    { icon: Sparkles, name: "Yoga Studio", description: "Sweeping sea views for balance and peace" },
    { icon: Ship, name: "Water Sports", description: "Thrilling adventures with expansive sea views" },
    { icon: Umbrella, name: "Private Beach", description: "Direct access to white sands and azure waves" },
    { icon: Home, name: "Luxury Lounges", description: "Exclusive resident social spaces" }
  ],

  connectivity: [
    { time: "10 min", destination: "RAK Beach & Al Hamra Mall" },
    { time: "15 min", destination: "Ras Al Khaimah International Airport" },
    { time: "20 min", destination: "Sheikh Khalifa Specialty Hospital" },
    { time: "45 min", destination: "Dubai International Airport" },
    { time: "50 min", destination: "Downtown Dubai" }
  ],

  gallery: [
    { src: heroImage, alt: "Shoreline Tower Exterior" },
    { src: poolImage, alt: "Infinity Pool & Beach" },
    { src: interiorImage, alt: "Luxury Interior" },
    { src: beachImage, alt: "Private Beach Access" }
  ]
};

export default function ShorelineProject() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Shoreline by DAMAC | Off-Plan Beachfront Dubai"
        description="Shoreline by DAMAC Properties — off-plan beachfront residences in Dubai with direct beach access, sea views, and resort-style living."
        canonicalPath="/projects/damac/shoreline"
      />

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
                    <Waves className="w-3 h-3" />
                    Seafront
                  </span>
                  <span className="badge-tag">Coastal Living</span>
                  <span className="badge-tag">Premium Views</span>
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
                <p className="text-xl font-semibold text-foreground">On Request</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Unit Types</p>
                <p className="text-xl font-semibold text-foreground">{projectData.units}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Payment Plan</p>
                <p className="text-xl font-semibold text-primary">{projectData.paymentPlan}</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Where Art Meets Island Living</h2>
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
                        <Waves className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">A World of Coastal Amenities</h2>
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
                      Shoreline by DAMAC is nestled on Al Marjan Island, Ras Al Khaimah's premier coastal destination. Enjoy the tranquility of island living with convenient access to key UAE destinations.
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
                        Shoreline by DAMAC is ideal for high-end second homes and international investors seeking premium coastal living. Al Marjan Island's emerging luxury market, combined with RAK's growing tourism infrastructure and tax-free environment, positions this development for exceptional capital appreciation and strong holiday rental yields.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Shoreline?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}>Book a Consultation</Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>Request Details</Button>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Floor Plans</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}><Download className="w-4 h-4 mr-2" />Price Plan</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}><Download className="w-4 h-4 mr-2" />Brochure</Button>
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
