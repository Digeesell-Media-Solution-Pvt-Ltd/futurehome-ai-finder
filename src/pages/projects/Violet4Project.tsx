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
  TreePalm,
  Waves,
  Home,
  Users,
  Dumbbell,
  Film
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/violet4-hero.jpg";
import parkImage from "@/assets/projects/violet4-park.jpg";
import interiorImage from "@/assets/projects/violet4-interior.jpg";
import amenitiesImage from "@/assets/projects/violet4-amenities.jpg";

const projectData = {
  name: "Violet 4",
  developer: "DAMAC Properties",
  location: "DAMAC Hills 2, Dubai",
  type: "4-Bedroom Townhouses",
  handover: "Q3 2027",
  roi: "6-8%",
  paymentPlan: "1% Monthly",
  
  overview: `Imagine a life where every moment becomes a treasured memory at Violet 4, an urban oasis in DAMAC Hills 2. These 4-bedroom townhouses, inspired by the vibrant hues of the violet flower, seamlessly blend luxury, comfort, and nature.

With private gardens and rooftop retreats, they are designed for family living and lasting adventures. Residents enjoy world-class amenities, from Water Town's wave pool to the serene zen garden. Here, tranquillity meets excitement, creating a unique community atmosphere perfect for everyone.`,

  highlights: [
    "4-Bedroom Townhouses with Private Gardens",
    "Rooftop Retreats for Outdoor Living",
    "Water Town with Wave Pool & Lazy River",
    "Zen Garden & Green Walkways",
    "Floating Cinema & Sports Fields",
    "1% Monthly Payment Plan"
  ],

  amenities: [
    { icon: Waves, name: "Wave Pool", description: "Thrilling aquatic excitement with endless fun" },
    { icon: TreePalm, name: "Zen Garden", description: "Tranquil retreat for mind and spirit rejuvenation" },
    { icon: Sparkles, name: "Malibu Beach", description: "Beach vibes with water park thrills" },
    { icon: Dumbbell, name: "Sports Fields", description: "Tennis, padel, volleyball, and football courts" },
    { icon: Film, name: "Floating Cinema", description: "Outdoor cinema under the stars" },
    { icon: Waves, name: "Lazy River", description: "Scenic oasis for relaxation" },
    { icon: Home, name: "Private Gardens", description: "Personal outdoor space for each home" },
    { icon: Users, name: "Kids Play Areas", description: "Safe and engaging children's zones" }
  ],

  connectivity: [
    { time: "5 min", destination: "Community Center & Retail" },
    { time: "10 min", destination: "Global Village" },
    { time: "15 min", destination: "Dubai Sports City" },
    { time: "20 min", destination: "Downtown Dubai" },
    { time: "25 min", destination: "Dubai International Airport" }
  ],

  gallery: [
    { src: heroImage, alt: "Violet 4 Townhouse Exterior" },
    { src: parkImage, alt: "Community Park & Green Spaces" },
    { src: interiorImage, alt: "Townhouse Interior" },
    { src: amenitiesImage, alt: "Water Town Amenities" }
  ]
};

export default function Violet4Project() {
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
                  <span className="badge-tag">Family Community</span>
                  <span className="badge-tag">Suburban Living</span>
                  <span className="badge-tag">Townhouses</span>
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
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <p className="text-xl font-semibold text-foreground">On Request</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Unit Type</p>
                <p className="text-xl font-semibold text-foreground">4 BR Townhouses</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Project Overview</h2>
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
                        <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">World-Class Amenities</h2>
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
                      Violet 4 is strategically located within DAMAC Hills 2, offering seamless connectivity to Dubai's key destinations while maintaining a peaceful suburban atmosphere.
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
                        Violet 4 is ideal for first-time buyers and families seeking spacious townhouse living with premium community amenities. The 1% monthly payment plan makes ownership accessible, while DAMAC Hills 2's established infrastructure and proximity to key Dubai destinations ensures strong long-term value appreciation and rental demand.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Violet 4?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}>Book a Call</Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>Request Details</Button>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Download Floor Plans</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}><Download className="w-4 h-4 mr-2" />Download Price Plan</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}><Download className="w-4 h-4 mr-2" />Download Brochure</Button>
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
                      <span className="text-sm font-medium text-foreground">DAMAC Certified</span>
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
