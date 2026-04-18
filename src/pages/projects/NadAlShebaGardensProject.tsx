import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, Phone, Mail, Dumbbell, Users, Baby, Sparkles, Home, TreesIcon, Camera, Building, Plane, Waves, Dog, Footprints, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/nad-al-sheba-gardens-hero.jpg";
import interiorImage from "@/assets/projects/nad-al-sheba-gardens-interior.jpg";
import parkImage from "@/assets/projects/nad-al-sheba-gardens-park.jpg";
import poolImage from "@/assets/projects/nad-al-sheba-gardens-pool.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const NadAlShebaGardensProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Nad Al Sheba Gardens - Luxury Villa Community" },
    { src: interiorImage, alt: "Nad Al Sheba Gardens - Premium Villa Interior" },
    { src: parkImage, alt: "Nad Al Sheba Gardens - Community Park" },
    { src: poolImage, alt: "Nad Al Sheba Gardens - Community Pool" },
  ];

  const highlights = [
    { icon: Home, label: "3-7 BR Villas", description: "Townhouses & Villas" },
    { icon: TreesIcon, label: "Garden Living", description: "Lush landscapes" },
    { icon: Users, label: "Family Community", description: "Private & gated" },
    { icon: Shield, label: "Meraas Quality", description: "Premium developer" },
  ];

  const amenities = [
    { icon: Sparkles, name: "Yoga Lawn" },
    { icon: Footprints, name: "Running Track" },
    { icon: Dumbbell, name: "Sports Facilities" },
    { icon: Baby, name: "Kids Play Areas" },
    { icon: Waves, name: "Wave Pool" },
    { icon: Waves, name: "Lagoon" },
    { icon: Calendar, name: "Event Spaces" },
    { icon: TreesIcon, name: "Lawns" },
    { icon: Users, name: "Amphitheatre" },
    { icon: Dog, name: "Dog Park" },
  ];

  const unitTypes = [
    { type: "3 Bedroom Townhouse", description: "Three-level modern living" },
    { type: "4 Bedroom Villa", description: "Spacious family home with garden" },
    { type: "5 Bedroom Villa", description: "Premium detached villa" },
    { type: "6 Bedroom Villa", description: "Luxury family estate" },
    { type: "7 Bedroom Villa", description: "Ultra-exclusive mansion" },
  ];

  const connectivity = [
    { icon: Building, destination: "Burj Khalifa", time: "10 km" },
    { icon: Building2, destination: "City Walk", time: "16 km" },
    { icon: Building, destination: "Downtown Dubai", time: "Minutes away" },
    { icon: Dumbbell, destination: "Meydan Racetrack", time: "Nearby" },
    { icon: Waves, destination: "Deep Dive Dubai", time: "Nearby" },
    { icon: Plane, destination: "Major Highways", time: "Short drive" },
  ];


  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Nad Al Sheba Gardens by Meraas | Off-Plan"
        description="Nad Al Sheba Gardens by Meraas — off-plan villas and townhouses in a lush Dubai community with green open spaces and top amenities."
        canonicalPath="/projects/meraas/nad-al-sheba-gardens"
      />

      <Header />
      
      {/* SEO Meta */}
      <title>Nad Al Sheba Gardens Villas by Meraas | Family Living in Dubai</title>
      <meta name="description" content="Experience spacious garden villas in Nad Al Sheba Gardens by Meraas." />

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
                <Badge className="bg-amber-600 text-white">Sold Out</Badge>
                <Badge variant="outline" className="text-white border-white/50">Nad Al Sheba</Badge>
                <Badge variant="outline" className="text-white border-white/50">Villas</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Nad Al Sheba Gardens
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Meraas
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Nad Al Sheba, Dubai</span>
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
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Live in Dubai at Your Own Pace
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      The private gated community of Nad Al Sheba Gardens welcomes you to live in Dubai at your own pace. In a space carefully designed to nurture your inner and outer growth. The villas, detached villas and townhouses within Nad Al Sheba Gardens each draw inspiration from comfort, nature, and community.
                    </p>
                    <p>
                      Amid scenic surroundings, the distinguished villas and townhouses achieve a modern and refined look while sunlight generously suffuses the living areas, forging a seamless connection with nature.
                    </p>
                    <p>
                      Nad Al Sheba Gardens is a living reflection of who you are. A reflection of your ambition to create a space for precious family moments. Nestled on lush, landscaped land, the neighbourhood combines distinct architectural designs with green areas.
                    </p>
                    <p>
                      Nad Al Sheba Gardens features ultra-exclusive homes with beautiful open-plan gardens. Complete with hardwood floors, porcelain countertops, and a luxurious aluminum finish, residents can choose from bespoke villas and townhouses.
                    </p>
                  </div>
                </motion.section>

                {/* Unit Types */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Villa Collection
                  </h2>
                  <div className="grid gap-4">
                    {unitTypes.map((unit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="p-4 hover:shadow-lg transition-all hover:border-gold-dark/50 border-gold-light/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-charcoal">{unit.type}</h3>
                              <p className="text-sm text-muted-foreground">{unit.description}</p>
                            </div>
                            <Badge variant="outline" className="bg-amber-100 text-amber-800">Sold Out</Badge>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="lifestyle" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Modern Living in Natural Splendour
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <TreesIcon className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Garden Living</h3>
                      <p className="text-muted-foreground">Ultra-exclusive homes with beautiful open-plan gardens, nestled on lush, landscaped land combining distinct architectural designs with green areas.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Home className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Bespoke Design</h3>
                      <p className="text-muted-foreground">Hardwood floors, porcelain countertops, and luxurious aluminum finishes. Modern and refined look with sunlight generously suffusing living areas.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Users className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Private Community</h3>
                      <p className="text-muted-foreground">A private gated community designed to nurture your inner and outer growth. A space for precious family moments.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <MapPin className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Convenient Location</h3>
                      <p className="text-muted-foreground">Minutes away from Downtown Dubai, connected to Meydan Racetrack, Deep Dive Dubai, and short drive from all major highways.</p>
                    </Card>
                  </div>
                </motion.section>

                {/* Connectivity */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Convenience on Your Doorstep
                  </h2>
                  <div className="space-y-3">
                    {connectivity.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center justify-between p-4 bg-cream/50 rounded-lg hover:bg-cream transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
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

              <TabsContent value="amenities" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Discover Exciting Features
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              {/* Price Card */}
              <Card className="p-6 bg-gradient-to-br from-charcoal to-charcoal-light text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-dark/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="text-center mb-6">
                    <p className="text-cream/80 text-sm mb-1">Status</p>
                    <p className="text-2xl font-bold text-amber-400">Sold Out</p>
                    <p className="text-cream/70 text-sm">67.4% Complete</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Meraas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">Nad Al Sheba</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">3-7 BR Villas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Property Type</span>
                      <span className="font-medium">Villas & Townhouses</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "Nad Al Sheba Gardens", ctaType: "Download Floor Plan" })}>
                  <Download className="w-4 h-4" />
                  Download Floor Plan
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "Nad Al Sheba Gardens", ctaType: "Download Price Plan" })}>
                  <Download className="w-4 h-4" />
                  Download Price Plan
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "Nad Al Sheba Gardens", ctaType: "Book a Consultation" })}>
                  <Phone className="w-4 h-4" />
                  Contact Sales
                </Button>
              </div>

              {/* Developer Info */}
              <Card className="p-4 bg-cream/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-charcoal">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">Meraas</p>
                    <p className="text-sm text-muted-foreground">Master Developer</p>
                    <Link to="/developers/meraas" className="text-sm text-gold-dark hover:underline">
                      View All Projects →
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NadAlShebaGardensProject;
