import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, MessageSquare, Waves, Dumbbell, Users, TreesIcon, Baby, Home, ChefHat, Sparkles, FileText, Camera, Car, Fence, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { SeoHead } from "@/components/seo/SeoHead";

import heroImage from "@/assets/projects/mudon-al-ranim-7-hero.jpg";
import interiorImage from "@/assets/projects/mudon-al-ranim-7-interior.jpg";
import gardenImage from "@/assets/projects/mudon-al-ranim-7-garden.jpg";
import poolImage from "@/assets/projects/mudon-al-ranim-7-pool.jpg";

const MudonAlRanim7Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Mudon Al Ranim 7 - Contemporary Townhouses by Dubai Properties" },
    { src: interiorImage, alt: "Mudon Al Ranim 7 - Townhouse Interior" },
    { src: gardenImage, alt: "Mudon Al Ranim 7 - Landscaped Gardens & Parks" },
    { src: poolImage, alt: "Mudon Al Ranim 7 - Community Pool Area" },
  ];

  const highlights = [
    { icon: Home, label: "3 & 4 BR Townhouses", description: "Family-sized homes" },
    { icon: Fence, label: "Gated Community", description: "Safe & private" },
    { icon: TreesIcon, label: "Landscaped Parks", description: "Nature at your door" },
    { icon: Sparkles, label: "From AED 2.06M", description: "Starting price" },
  ];

  const amenities = [
    { icon: Waves, name: "Swimming Pool" },
    { icon: Baby, name: "Kids Play Area" },
    { icon: TreesIcon, name: "Landscaped Gardens" },
    { icon: Dumbbell, name: "Jogging Track" },
    { icon: Shield, name: "24/7 Security" },
    { icon: Car, name: "Covered Parking" },
    { icon: Users, name: "Community Centre" },
    { icon: ChefHat, name: "BBQ Area" },
  ];

  const connectivity = [
    { icon: Route, destination: "Arabian Ranches", time: "5 min" },
    { icon: Route, destination: "Sheikh Mohammed Bin Zayed Road", time: "10 min" },
    { icon: Building2, destination: "Dubai Mall & Downtown", time: "25 min" },
    { icon: Building2, destination: "Dubai International Airport", time: "30 min" },
    { icon: Route, destination: "Al Ain Road", time: "10 min" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Mudon Al Ranim 7 by Dubai Properties | Townhouses Dubai"
        description="Explore Mudon Al Ranim 7 offering 3 & 4 bedroom townhouses in Mudon, Dubai. Family-focused living in a green gated community."
        canonicalPath="/projects/dubai-properties/mudon-al-ranim-7"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gold-dark text-white">Newly Launched</Badge>
                <Badge variant="outline" className="text-white border-white/50">Family Friendly</Badge>
                <Badge variant="outline" className="text-white border-white/50">Gated Community</Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Mudon Al Ranim 7
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Dubai Properties
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Mudon, Dubailand, Dubai</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-8 right-8 hidden md:flex gap-2">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === idx ? "border-gold-dark scale-110" : "border-white/30 hover:border-white/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="text-center p-4 bg-cream/50 border-gold-light/30 hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 mx-auto mb-2 text-gold-dark" />
                    <p className="font-bold text-charcoal">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Tabbed Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="highlights">Amenities</TabsTrigger>
                <TabsTrigger value="brochure">Brochure</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Family Living, Naturally
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      Start your next chapter today with the latest addition to Mudon Al Ranim. Part of the family-friendly Mudon community, and located in the heart of Dubailand, this addition offers 3 and 4-bedroom townhouses starting from AED 2.06M.
                    </p>
                    <p>
                      A place where nature lies just beyond your doorstep and community living takes on a new perspective. Join a community designed to be lived, explored and enjoyed by you and your loved ones.
                    </p>
                    <p>
                      Discover the best in close-knit community living at Mudon Al Ranim, featuring lush greenery, landscaped parks, and ready-to-use amenities in a safe, family-friendly neighbourhood.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 2.06 Million
                    </p>
                  </div>
                </motion.section>

                {/* Connectivity */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Connected to Everything That Matters
                  </h2>
                  <div className="space-y-3">
                    {connectivity.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-cream/50 rounded-lg hover:bg-cream transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-6 h-6 text-gold-dark" />
                          <span className="font-medium text-charcoal">{item.destination}</span>
                        </div>
                        <Badge variant="outline" className="bg-gold-dark text-white border-0">
                          {item.time}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="highlights" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Community Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Card className="p-4 text-center hover:shadow-lg transition-all hover:border-gold-dark/50 border-gold-light/30 cursor-pointer group">
                          <amenity.icon className="w-10 h-10 mx-auto mb-3 text-gold-dark group-hover:scale-110 transition-transform" />
                          <p className="font-medium text-charcoal text-sm">{amenity.name}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Why Mudon Al Ranim 7?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <TreesIcon className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Lush Green Spaces</h3>
                      <p className="text-muted-foreground">Landscaped parks and greenery surround every home, bringing nature to your doorstep.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Shield className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Safe Neighbourhood</h3>
                      <p className="text-muted-foreground">A gated, family-friendly community with 24/7 security and a close-knit atmosphere.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Route className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Excellent Connectivity</h3>
                      <p className="text-muted-foreground">Quick access to Sheikh Mohammed Bin Zayed Road, Al Ain Road, and major Dubai landmarks.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Sparkles className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Ready Amenities</h3>
                      <p className="text-muted-foreground">Move into a community with fully operational pools, parks, jogging tracks, and more.</p>
                    </Card>
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="brochure" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Download Resources
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30">
                      <FileText className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Project Brochure</h3>
                      <p className="text-muted-foreground mb-4">Complete details about Mudon Al Ranim 7 including specifications, amenities, and community features.</p>
                      <Button variant="gold" className="w-full gap-2" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 7", ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </Button>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30">
                      <Home className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Floor Plans</h3>
                      <p className="text-muted-foreground mb-4">Detailed floor plans for all 3 & 4 bedroom townhouse layouts with dimensions.</p>
                      <Button variant="gold-outline" className="w-full gap-2" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 7", ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4" />
                        Download Floor Plans
                      </Button>
                    </Card>
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Project Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-xl overflow-hidden cursor-pointer relative group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setActiveImage(idx)}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Info Card */}
              <Card className="p-6 bg-gradient-to-br from-charcoal to-charcoal-light text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-dark/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="text-center mb-6">
                    <p className="text-cream/80 text-sm mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-gold-light">AED 2.06M</p>
                    <p className="text-cream/70 text-sm">Townhouses in Mudon</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Dubai Properties</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">Mudon, Dubailand</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">3 & 4 BR Townhouses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Handover</span>
                      <span className="font-medium text-gold-light">Q4 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Status</span>
                      <span className="font-medium text-gold-light">Newly Launched</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 7", ctaType: "Request Details" })}>
                  <MessageSquare className="w-4 h-4" />
                  Request Details
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 7", ctaType: "Download Brochure" })}>
                  <FileText className="w-4 h-4" />
                  Download Brochure
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 7", ctaType: "Book Consultation" })}>
                  <Download className="w-4 h-4" />
                  Book Consultation
                </Button>
              </div>

              {/* Developer Info */}
              <Card className="p-4 bg-cream/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-charcoal">DP</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">Dubai Properties</p>
                    <p className="text-sm text-muted-foreground">Part of Dubai Holding</p>
                    <Badge variant="outline" className="mt-1 text-xs">Listed</Badge>
                  </div>
                </div>
              </Card>

              {/* Legal Disclaimer */}
              <p className="text-xs text-muted-foreground text-center">
                This platform operates as a digital property discovery and marketing portal. We do not provide brokerage services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MudonAlRanim7Project;
