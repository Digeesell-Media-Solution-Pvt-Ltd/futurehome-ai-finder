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
  Palmtree,
  Waves,
  Ship,
  Droplets,
  TreePalm,
  Home,
  Umbrella
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/damac-islands-hero.jpg";
import lagoonImage from "@/assets/projects/damac-islands-lagoon.jpg";
import interiorImage from "@/assets/projects/damac-islands-interior.jpg";
import beachImage from "@/assets/projects/damac-islands-beach.jpg";

const projectData = {
  name: "DAMAC Islands",
  developer: "DAMAC Properties",
  location: "Dubai Islands (Waterfront)",
  type: "Premium Villas & Townhouses",
  units: "5,915 Units",
  masterCommunity: "30 Million Sq.Ft.",
  startingPrice: "AED 2,750,000",
  handover: "2027",
  roi: "10-12%",
  paymentPlan: "1% Monthly",
  
  overview: `Imagine waking up each day to the blissful vibes of the world's most enchanting islands, from the serenity of the Maldives to the charm of Seychelles. DAMAC Islands isn't just a place to live; it's a perpetual journey through the world's most beautiful island destinations.

Discover experiences designed to elevate your senses, where tranquil lagoons, lush jungle rivers, exhilarating water adventures, and serene escapes come together to create an idyllic paradise.

Inspired by 6 of the world's best tropical island destinations, DAMAC Islands brings the ultimate island lifestyle to Dubai with 5,915 premium villas and townhouses across a 30 million sq.ft. master community.`,

  highlights: [
    "5,915 Villas & Townhouses on 30M Sq.Ft.",
    "Inspired by 6 Tropical Island Destinations",
    "Crystal Lagoons & Sandy Beaches",
    "Jungle Rivers & Aqua Parks",
    "Yacht Marina & Water Sports",
    "1% Monthly Payment Plan"
  ],

  amenities: [
    { icon: Waves, name: "Central Hub Fountain", description: "Mesmerising water, light, and fire spectacle" },
    { icon: Ship, name: "Water Platforms", description: "Elevated retreats above serene waters" },
    { icon: Droplets, name: "Lagoon Waterfalls", description: "Tranquil cascading water escapes" },
    { icon: TreePalm, name: "Jungle River", description: "Lush journey through vibrant retreats" },
    { icon: Umbrella, name: "Aqua Park", description: "Thrilling slides and aquatic adventures" },
    { icon: Sparkles, name: "Jungle Swings", description: "Soar above shimmering waters" },
    { icon: Waves, name: "Sandy Beaches", description: "White sand beaches with crystal waters" },
    { icon: Home, name: "Premium Villas", description: "Luxury living inspired by the Maldives" }
  ],

  connectivity: [
    { time: "5 min", destination: "NMC Royal Hospital" },
    { time: "10 min", destination: "Al Maktoum International Airport" },
    { time: "15 min", destination: "Dubai Polo & Equestrian Club" },
    { time: "20 min", destination: "Downtown Dubai" },
    { time: "25 min", destination: "Dubai Marina" }
  ],

  gallery: [
    { src: heroImage, alt: "DAMAC Islands Master Community" },
    { src: lagoonImage, alt: "Lagoon Waterfalls" },
    { src: interiorImage, alt: "Villa Interior" },
    { src: beachImage, alt: "Private Beach" }
  ]
};

export default function DamacIslandsProject() {
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
                    <TreePalm className="w-3 h-3" />
                    Island Villas
                  </span>
                  <span className="badge-tag">DAMAC Waterfront</span>
                  <span className="badge-tag">Tropical Lifestyle</span>
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
                <p className="text-xl font-semibold text-foreground">{projectData.startingPrice}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                <p className="text-xl font-semibold text-foreground">{projectData.units}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Payment Plan</p>
                <p className="text-xl font-semibold text-primary">{projectData.paymentPlan}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Master Community</p>
                <p className="text-xl font-semibold text-foreground">{projectData.masterCommunity}</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Live the Island State of Mind</h2>
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
                        <TreePalm className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-2xl font-display text-foreground mb-6">A World of Tropical Amenities</h2>
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
                      DAMAC Islands is strategically positioned with excellent connectivity to Dubai's key destinations, offering the perfect balance between island serenity and urban accessibility.
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
                        DAMAC Islands represents ultra-luxury living with exceptional long-term exclusivity value. The unique tropical island concept, unprecedented scale of 30 million sq.ft., and world-class amenities position this as one of Dubai's most prestigious waterfront developments. Ideal for high-net-worth investors seeking rare lifestyle assets with strong capital appreciation potential.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in DAMAC Islands?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}>
                        Book a Consultation
                      </Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>
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
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Floor Plans
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Price Plan
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
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
