import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SeoHead } from "@/components/seo/SeoHead";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Download, 
  Phone, 
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Users,
  Baby,
  Sparkles,
  Crown,
  Star,
  Award
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/projects/jumeirah-emirates-tower-hero.jpg";
import interiorImage from "@/assets/projects/jumeirah-emirates-tower-interior.jpg";
import skypoolImage from "@/assets/projects/jumeirah-emirates-tower-skypool.jpg";
import lobbyImage from "@/assets/projects/jumeirah-emirates-tower-lobby.jpg";

const projectHighlights = [
  { icon: Crown, label: "Jumeirah Branded" },
  { icon: Star, label: "Signature Services" },
  { icon: Waves, label: "Sky Pools" },
  { icon: Award, label: "Iconic Architecture" },
];

const amenities = [
  { icon: UtensilsCrossed, name: "Restaurant", description: "Fine dining venue on-site" },
  { icon: Waves, name: "Infinity Pool", description: "Stunning sky pool with city views" },
  { icon: Waves, name: "Family & Kids Pool", description: "Dedicated family and children's pools" },
  { icon: Dumbbell, name: "Yoga & Spinning Studio", description: "Premium fitness and wellness studios" },
  { icon: Users, name: "Social Hall", description: "Exclusive gatherings and events space" },
  { icon: Baby, name: "Playground", description: "Safe play areas for children" },
  { icon: Sparkles, name: "Private Dining", description: "Intimate private dining areas" },
  { icon: Award, name: "Padel Court", description: "Premium sports facilities" },
];

const galleryImages = [
  { src: heroImage, alt: "Jumeirah Emirates Towers Exterior" },
  { src: interiorImage, alt: "Luxury Interior" },
  { src: skypoolImage, alt: "Sky Pool & Terrace" },
  { src: lobbyImage, alt: "Grand Lobby" },
];

const JumeirahEmiratesTowerProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        title="Jumeirah Emirates Tower Residences | Luxury Meraas Homes"
        description="Premium branded residences by Meraas at Emirates Tower. Exclusive 1-4 BR apartments with Jumeirah Signature Services starting from AED 3.51M."
        canonicalPath="/projects/meraas/jumeirah-emirates-tower"
      />


      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Branded Residences</Badge>
                  <Badge className="bg-primary text-primary-foreground">Properties Available</Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  Jumeirah Residences Emirates Towers
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                  by Meraas • Trade Centre 2, Dubai
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {projectHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <highlight.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{highlight.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-card border-y border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Unit Types</p>
                  <p className="font-semibold">1-4 BR Apartments</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Trade Centre 2</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                  <p className="font-semibold">AED 3.51M</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Expected ROI</p>
                  <p className="font-semibold">7-9%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start mb-8 bg-muted/50">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Rising Above The City</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Rising above the city, Jumeirah Residences Emirates Towers stand as the new 
                        architectural icons on Dubai's skyline. This exclusive collection of residences 
                        offers one- to four-bedroom apartments, where every detail reflects thoughtful 
                        craftsmanship and refined living.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        From sky pools to Jumeirah Signature Services, each element is designed to 
                        elevate the daily experience of discerning residents. This is where world-class 
                        hospitality meets premium branded living.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">Crafted For Ambition</h3>
                        <p className="text-sm text-muted-foreground">
                          Sheltered beneath a striking cantilever, the arrival zone offers a grand, 
                          warm welcome. The private entrance sets a calm, refined tone where the 
                          architecture appears to float and time seems to pause.
                        </p>
                      </div>
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">A New Standard of Refinement</h3>
                        <p className="text-sm text-muted-foreground">
                          From curated materials to thoughtful spatial flow, each element reflects 
                          an unwavering commitment to perfection. With no internal columns interrupting 
                          the interiors, spaces feel open, fluid, and elegantly unobstructed.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Crown className="w-5 h-5 text-primary" />
                        Jumeirah Signature Services
                      </h3>
                      <p className="text-muted-foreground">
                        From personalised spa treatments to private dining and concierge, every service 
                        is tailored to match your pace. This is a lifestyle of seamless efficiency, 
                        where daily details are expertly managed, freeing you to focus on what matters most.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Premium Features</h2>
                      <div className="grid gap-4">
                        {[
                          "Iconic twin towers on Dubai's skyline",
                          "1 to 4-bedroom apartments including double-height units",
                          "Jumeirah Signature Services included",
                          "Column-free interiors for open, fluid spaces",
                          "Striking cantilever architectural entrance",
                          "Private sky terrace with infinity pool",
                          "Curated materials and bespoke finishes",
                          "Personalised spa, dining, and concierge services"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">An Escape In The Sky</h3>
                      <p className="text-muted-foreground">
                        Host gatherings framed by skyline views in this intimate setting suspended 
                        above the city. The private sky terrace offers the perfect blend of exclusivity 
                        and dramatic perspective. Lounge seating, infinity pool, and curated greenery 
                        create a natural rhythm, completing the sense of escape.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Floor Plan Options</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["1 Bedroom", "2 Bedroom + Maid", "3 Bedroom", "3 BR Double Height", "4 Bedroom"].map((type) => (
                          <div key={type} className="bg-muted/30 p-4 rounded-lg text-center">
                            <p className="font-medium">{type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">World-Class Amenities</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {amenities.map((amenity, index) => (
                          <div key={index} className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <amenity.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">{amenity.name}</h3>
                              <p className="text-sm text-muted-foreground">{amenity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4">Additional Facilities</h3>
                      <ul className="grid grid-cols-2 gap-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Pet Lawn
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Multi-Purpose Space
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Sky Terrace
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Concierge Services
                        </li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-8">
                    <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {galleryImages.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video rounded-xl overflow-hidden">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center text-muted-foreground mt-4">{image.alt}</p>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Sidebar - CTAs */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Branded Residences</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Jumeirah Emirates Tower</h3>
                    <p className="text-2xl font-bold text-primary mb-4">From AED 3.51M</p>
                    <p className="text-muted-foreground mb-6">
                      Luxury 1-4 BR Apartments with Jumeirah Signature Services
                    </p>

                    <div className="space-y-4">
                      <Button className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </Button>
                      
                      <Button variant="outline" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Download Price Plan" })}>
                        <Download className="w-4 h-4" />
                        Download Price Plan
                      </Button>
                      
                      <Button variant="secondary" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Request Details" })}>
                        <Phone className="w-4 h-4" />
                        Enquire Now
                      </Button>
                      
                      <Button variant="outline" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Book a Consultation" })}>
                        <MessageCircle className="w-4 h-4" />
                        Book Consultation
                      </Button>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4">Developer</h4>
                    <Link to="/developers/meraas" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Meraas</p>
                        <p className="text-sm text-muted-foreground">View all projects →</p>
                      </div>
                    </Link>
                  </div>

                  <div className="bg-muted/30 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4">Additional Downloads</h4>
                    <div className="space-y-3">
                      <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Floor Plans
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "Jumeirah Emirates Tower", ctaType: "Download Masterplan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Masterplan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JumeirahEmiratesTowerProject;
