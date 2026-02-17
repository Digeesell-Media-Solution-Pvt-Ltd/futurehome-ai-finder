import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, Phone, Calendar, MessageSquare, Mail, Dumbbell, Users, Baby, Sparkles, Home, Palette, Camera, Building, Plane, TreesIcon, PlayCircle, Briefcase, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/the-edit-d3-hero.jpg";
import interiorImage from "@/assets/projects/the-edit-d3-interior.jpg";
import rooftopImage from "@/assets/projects/the-edit-d3-rooftop.jpg";
import gymImage from "@/assets/projects/the-edit-d3-gym.jpg";

const TheEditD3Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: heroImage, alt: "The Edit at d3 - Sculptural Towers in Design District" },
    { src: interiorImage, alt: "The Edit at d3 - Contemporary Apartment Interior" },
    { src: rooftopImage, alt: "The Edit at d3 - Rooftop Leisure Terrace" },
    { src: gymImage, alt: "The Edit at d3 - State-of-the-art Fitness Center" },
  ];

  const highlights = [
    { icon: Home, label: "1-4 BR + Penthouses", description: "Exclusive residences" },
    { icon: Palette, label: "Design District", description: "Creative hub location" },
    { icon: TreesIcon, label: "Sky Gardens", description: "Green sanctuaries" },
    { icon: Shield, label: "Meraas Quality", description: "Premium developer" },
  ];

  const amenities = [
    { icon: Dumbbell, name: "Gym" },
    { icon: PlayCircle, name: "Cinema Room" },
    { icon: Baby, name: "Kid's Club" },
    { icon: Users, name: "Events Lounge" },
    { icon: Briefcase, name: "Co-working Space" },
    { icon: Users, name: "Teenager's Club" },
    { icon: Sparkles, name: "Yoga Studio" },
    { icon: Sparkles, name: "Wellness Studio" },
    { icon: TreesIcon, name: "Sky Garden" },
    { icon: Dumbbell, name: "Padel Court" },
  ];

  const unitTypes = [
    { type: "1 Bedroom Apartment", description: "Modern living with design ethos" },
    { type: "2 Bedroom Apartment", description: "Spacious layouts with balconies" },
    { type: "3 Bedroom Apartment", description: "Family-sized with sky garden views" },
    { type: "4 Bedroom Apartment", description: "Luxury living in the creative hub" },
    { type: "Penthouse", description: "Exclusive top-floor residences" },
  ];

  const connectivity = [
    { icon: Building, destination: "Dubai Mall", time: "6 min" },
    { icon: Building2, destination: "Downtown Dubai", time: "7 min" },
    { icon: Coffee, destination: "City Walk", time: "7 min" },
    { icon: Building, destination: "Burj Khalifa", time: "10 min" },
    { icon: Building2, destination: "Business Bay", time: "10 min" },
    { icon: Plane, destination: "DIFC", time: "12 min" },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* SEO Meta */}
      <title>The Edit at d3 | Designer Living in Dubai</title>
      <meta name="description" content="A creative hub with premium residential design in the heart of d3." />

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
                <Badge className="bg-gold-dark text-white">Coming Soon</Badge>
                <Badge variant="outline" className="text-white border-white/50">Design District</Badge>
                <Badge variant="outline" className="text-white border-white/50">Creative Living</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                The Edit at d3
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Meraas
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Dubai Design District (d3)</span>
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
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Unscripted. By Design.
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      The Edit at d3 offers 1 to 4-bedroom residences and exclusive penthouses in Dubai's premier creative district. More than just a residence, The Edit at d3 redefines urban living by blending innovative architecture with thriving community.
                    </p>
                    <p>
                      Rising as a statement of considered design, three sculptural towers evoke rhythm, balance and connection to nature. Soft edges, filleted corners, and continuous balcony lines shape the façades, while sky gardens carve dramatic recesses into the vertical structure, creating a sense of light, space, and greenery even from the outside.
                    </p>
                    <p>
                      Dramatic sky gardens punctuate the towers, offering sanctuaries where nature, wellness and community blend. Serene, resort-style pools offer a tranquil escape, while a state-of-the-art wellness club promotes balance and vitality through yoga, boxing and meditation studios.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 2.00 Million
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
                    Residence Collection
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
                            <Badge variant="outline" className="bg-cream text-charcoal">Available</Badge>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="design" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    A Waterfront Triad
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Palette className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Sculptural Architecture</h3>
                      <p className="text-muted-foreground">Three towers evoke rhythm, balance and connection to nature with soft edges and filleted corners shaping contemporary façades.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <TreesIcon className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Sky Gardens</h3>
                      <p className="text-muted-foreground">Dramatic sky gardens carve recesses into the vertical structure, offering sanctuaries where nature, wellness and community blend.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Sparkles className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Wellness Focus</h3>
                      <p className="text-muted-foreground">Resort-style pools and state-of-the-art wellness club with yoga, boxing and meditation studios promote balance and vitality.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Briefcase className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Creative Hub</h3>
                      <p className="text-muted-foreground">Located in Dubai Design District, surrounded by world-class galleries, studios, and creative enterprises.</p>
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
                    <p className="text-cream/80 text-sm mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-gold-light">AED 2.00M</p>
                    <p className="text-cream/70 text-sm">Coming Soon</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Meraas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">d3 Design District</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">1-4 BR + Penthouses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Status</span>
                      <span className="font-medium text-gold-light">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "The Edit at d3", ctaType: "Download Floor Plan" })}>
                  <Download className="w-4 h-4" />
                  Download Floor Plan
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "The Edit at d3", ctaType: "Download Price Plan" })}>
                  <Download className="w-4 h-4" />
                  Download Price Plan
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "The Edit at d3", ctaType: "Book a Consultation" })}>
                  <Calendar className="w-4 h-4" />
                  Schedule a Tour
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

export default TheEditD3Project;
