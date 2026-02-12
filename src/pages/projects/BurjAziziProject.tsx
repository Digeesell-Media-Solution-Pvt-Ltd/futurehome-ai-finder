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
  Mountain,
  Utensils,
  Eye,
  Users,
  Gem,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/projects/burj-azizi-hero.jpg";
import loungeImage from "@/assets/projects/burj-azizi-lounge.jpg";
import interiorImage from "@/assets/projects/burj-azizi-interior.jpg";
import lobbyImage from "@/assets/projects/burj-azizi-lobby.jpg";

const projectData = {
  name: "Burj Azizi",
  developer: "Azizi Developments",
  location: "Sheikh Zayed Road, Dubai",
  type: "Ultra-Luxury Mixed-Use Tower",
  height: "725 meters",
  floors: "131+ Floors",
  handover: "2029",
  price: "On Request",
  roi: "Premium Asset",
  
  overview: `Rising 725 meters into the Dubai sky, Burj Azizi is set to become the world's second tallest tower and the tallest residential building ever constructed. This architectural marvel on Sheikh Zayed Road represents the pinnacle of ultra-luxury living.

More than a skyscraper, Burj Azizi is a vertical city featuring branded residences, a world-class hotel, exclusive retail, and unprecedented amenities including the world's highest observation deck, restaurant, spa, and nightclub.

As the only freehold property on the iconic Sheikh Zayed Road strip, Burj Azizi offers international investors a once-in-a-generation opportunity to own a piece of Dubai's future skyline.`,

  highlights: [
    "World's Second Tallest Tower (725m)",
    "Only Freehold on Sheikh Zayed Road",
    "Highest Observation Deck (649m)",
    "Highest Restaurant in Dubai (544m)",
    "Highest Club in the World (567m)",
    "Highest Spa in the World (415m)"
  ],

  worldRecords: [
    { record: "Highest Lobby in the World", height: "498m" },
    { record: "Highest Occupied Hotel Room", height: "512m" },
    { record: "Highest Restaurant in Dubai", height: "544m" },
    { record: "Highest Club in the World", height: "567m" },
    { record: "Highest Observation Deck", height: "649m" },
    { record: "Highest Spa in the World", height: "415m" },
    { record: "Highest Cinema in the World", height: "310m" },
    { record: "Highest Supermarket in the World", height: "310m" }
  ],

  amenities: [
    { icon: Eye, name: "Sky Observation Deck", description: "World's highest at 649 meters" },
    { icon: Utensils, name: "Fine Dining", description: "Dubai's highest restaurant at 544m" },
    { icon: Crown, name: "Sky Club", description: "World's highest nightclub at 567m" },
    { icon: Gem, name: "Luxury Spa", description: "World's highest spa at 415m" },
    { icon: Users, name: "Concierge", description: "24/7 white-glove concierge services" },
    { icon: Mountain, name: "Panoramic Views", description: "Unmatched 360° Dubai skyline views" }
  ],

  connectivity: [
    { time: "2 min", destination: "Dubai World Trade Centre" },
    { time: "5 min", destination: "Dubai International Financial Centre (DIFC)" },
    { time: "10 min", destination: "Downtown Dubai & Burj Khalifa" },
    { time: "15 min", destination: "Dubai International Airport" },
    { time: "20 min", destination: "Palm Jumeirah" }
  ],

  gallery: [
    { src: heroImage, alt: "Burj Azizi Tower" },
    { src: loungeImage, alt: "Sky Lounge" },
    { src: interiorImage, alt: "Luxury Residence" },
    { src: lobbyImage, alt: "Grand Lobby" }
  ]
};

export default function BurjAziziProject() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971000000000?text=Hi, I'm interested in Burj Azizi on Sheikh Zayed Road", "_blank");
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
                  <span className="badge-tag flex items-center gap-1 bg-primary/30 border-primary/50">
                    <Crown className="w-3 h-3" />
                    World's Tallest Residential
                  </span>
                  <span className="badge-tag">Iconic</span>
                  <span className="badge-tag">Sheikh Zayed Road</span>
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
                    <span className="text-primary font-semibold">{projectData.roi}</span>
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
                <p className="text-sm text-muted-foreground mb-1">Tower Height</p>
                <p className="text-xl font-semibold text-primary">{projectData.height}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Floors</p>
                <p className="text-xl font-semibold text-foreground">{projectData.floors}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                <p className="text-xl font-semibold text-foreground">{projectData.price}</p>
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
                  <h2 className="text-2xl font-display text-foreground mb-4">Aiming Beyond the Sky</h2>
                  <div className="prose prose-lg text-muted-foreground">
                    {projectData.overview.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {/* World Records */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display text-foreground mb-6">Breaking World Records</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectData.worldRecords.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg">
                        <span className="text-foreground font-medium">{record.record}</span>
                        <span className="text-primary font-bold">{record.height}</span>
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
                  <h2 className="text-2xl font-display text-foreground mb-6">Prime Central Location</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground mb-6">
                      Burj Azizi is perfectly positioned in the heart of Dubai on Sheikh Zayed Road, offering unmatched access to the city's landmarks and lifestyle destinations. As the only freehold property on this iconic strip, residents enjoy central connectivity with prestige.
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
                        Burj Azizi is ideal for international luxury buyers seeking rare, trophy assets with long-term value preservation. As the world's tallest residential tower and the only freehold on Sheikh Zayed Road, this development offers unparalleled scarcity value. Expect strong capital appreciation driven by Dubai's status as a global wealth hub and the project's iconic landmark status.
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
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Burj Azizi?</h3>
                    
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" asChild>
                        <a href="tel:+971000000000">
                          <Phone className="w-4 h-4 mr-2" />
                          Book a Consultation
                        </a>
                      </Button>
                      
                      <Button variant="gold-outline" className="w-full" onClick={handleWhatsApp}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Inquiry
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
                        <a href="https://assets.ctfassets.net/og52t9hg6rhr/4xEZHEfyhlG3vLiwMRsooQ/a2a330dbc5eb87fcd70d6d3f17a91da9/Burj_Azizi_Factsheet.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Download Factsheet
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="https://downloads.ctfassets.net/og52t9hg6rhr/1pXNkSPWwvk3iHJr1P7OCU/96da890b4a406548fe0d93ae33366133/Burj_Azizi_Brochure-LR.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Download Brochure
                        </a>
                      </Button>
                      
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
                    className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-4 text-center"
                  >
                    <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-foreground font-medium">
                      World's Tallest Residential Tower
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      725 meters • 131+ floors
                    </p>
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
