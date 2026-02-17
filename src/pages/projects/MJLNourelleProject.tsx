import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
  TreePine,
  Users,
  Baby,
  Store,
  Mountain,
  Sparkles
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/projects/mjl-nourelle-hero.jpg";
import interiorImage from "@/assets/projects/mjl-nourelle-interior.jpg";
import skybridgeImage from "@/assets/projects/mjl-nourelle-skybridge.jpg";
import lobbyImage from "@/assets/projects/mjl-nourelle-lobby.jpg";

const projectHighlights = [
  { icon: Mountain, label: "Burj Al Arab Views" },
  { icon: Sparkles, label: "Dramatic Skybridge" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: TreePine, label: "Sky Gardens" },
];

const amenities = [
  { icon: Waves, name: "Infinity Pool", description: "Rooftop infinity pool on skybridge" },
  { icon: TreePine, name: "Sky Gardens", description: "Elevated gardens with panoramic views" },
  { icon: Dumbbell, name: "Modern Gym", description: "State-of-the-art fitness center" },
  { icon: Users, name: "Yoga Spaces", description: "Dedicated wellness and yoga areas" },
  { icon: Baby, name: "Kids' Play Zones", description: "Safe play areas for children" },
  { icon: Store, name: "Community Stores", description: "Convenient retail within community" },
];

const galleryImages = [
  { src: heroImage, alt: "MJL Nourelle Exterior" },
  { src: interiorImage, alt: "Luxury Interior" },
  { src: skybridgeImage, alt: "Skybridge Amenities" },
  { src: lobbyImage, alt: "Elegant Lobby" },
];

const MJLNourelleProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>MJL Nourelle | Meraas Luxury Residences</title>
        <meta 
          name="description" 
          content="Discover MJL Nourelle by Meraas with premium facilities and elegant design at Madinat Jumeirah Living, Umm Suqeim."
        />
        <meta name="keywords" content="MJL Nourelle, Meraas, Madinat Jumeirah Living, luxury apartments Dubai, Umm Suqeim residences" />
      </Helmet>

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
                <Badge variant="secondary" className="mb-4">Sold Out</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  MJL Nourelle
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                  by Meraas • Madinat Jumeirah Living, Umm Suqeim
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
                  <p className="font-semibold">Umm Suqeim</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold">Sold Out</p>
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
                      <h2 className="text-3xl font-bold mb-6">Madinat Jumeirah Living Nourelle</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        The latest addition to this vibrant community, Nourelle is a trio of contemporary 
                        residential buildings seamlessly connected by a dramatic skybridge and thoughtfully 
                        woven into the Madinat Jumeirah Living landscape. Offering 1- to 4-bedroom apartments, 
                        it presents a lifestyle where days flow effortlessly between calm retreat and vibrant 
                        connection, always framed by the city skyline.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        At Nourelle, the residences are planned to maximise light, space, and perspective. 
                        Whether overlooking the Burj Al Arab or the city skyline, every home offers a setting 
                        that makes every moment feel exceptional.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">Elegance Woven Into Every Line</h3>
                        <p className="text-sm text-muted-foreground">
                          Nourelle redefines the community's architectural language with scale and presence. 
                          Its façades feature clean lines, bold geometry, and elegant cut-outs softened with 
                          greenery, creating light-filled, open spaces that embody enduring elegance.
                        </p>
                      </div>
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">A Sanctuary Above The City</h3>
                        <p className="text-sm text-muted-foreground">
                          The skybridge at Nourelle is a destination in itself. With an infinity pool, 
                          sky gardens, a modern gym, and yoga spaces, it creates an elevated retreat 
                          where wellbeing and leisure come together above the city.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Premium Features</h2>
                      <div className="grid gap-4">
                        {[
                          "Trio of contemporary towers connected by dramatic skybridge",
                          "1 to 4-bedroom apartments with bespoke finishes",
                          "Iconic views of Burj Al Arab and city skyline",
                          "Clean lines, bold geometry, and elegant façade cut-outs",
                          "Light-filled open spaces with modern layouts",
                          "Refined aesthetics and premium materials throughout",
                          "Elegant lobbies and sophisticated lounges",
                          "Seamlessly integrated into Madinat Jumeirah Living landscape"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Bespoke Finishes</h3>
                      <p className="text-muted-foreground">
                        Inside Nourelle, every space is shaped with care and sophistication. From elegant 
                        lobbies and lounges to thoughtfully finished apartments, interiors combine bespoke 
                        materials, refined aesthetics, and modern layouts delivering comfort, style, and 
                        a sense of home at every step.
                      </p>
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
                      <h3 className="text-xl font-semibold mb-4">Madinat Jumeirah Living Community</h3>
                      <p className="text-muted-foreground mb-4">
                        Part of the prestigious Madinat Jumeirah Living master community, residents enjoy 
                        access to day care centres, kids' play zones, community stores, pocket parks, 
                        and lush landscaped areas throughout the development.
                      </p>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Day Care Centres
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Pocket Parks
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Community Stores
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Landscaped Gardens
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
                    <h3 className="text-xl font-bold mb-2">MJL Nourelle</h3>
                    <p className="text-muted-foreground mb-6">
                      Luxury 1-4 BR Apartments at Madinat Jumeirah Living
                    </p>

                    <div className="space-y-4">
                      <Button className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4" />
                        Download Floor Plans
                      </Button>
                      
                      <Button variant="outline" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Download Price Plan" })}>
                        <Download className="w-4 h-4" />
                        Download Price Plan
                      </Button>
                      
                      <Button variant="secondary" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Book a Consultation" })}>
                        <Phone className="w-4 h-4" />
                        Book Consultation
                      </Button>
                      
                      <Button variant="outline" className="w-full gap-2" size="lg" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Request Details" })}>
                        <MessageCircle className="w-4 h-4" />
                        Request Details
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
                      <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Project Brochure
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: "MJL Nourelle", ctaType: "Download Masterplan" })}>
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

export default MJLNourelleProject;
