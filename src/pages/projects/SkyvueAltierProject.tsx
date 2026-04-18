import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, Phone, MessageSquare, Mail, Waves, Dumbbell, Users, TreesIcon, Baby, BookOpen, Theater, Sparkles, Home, ChefHat, Music, Plane, Building, Mountain, FileText, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/skyvue-altier-hero.jpg";
import interiorImage from "@/assets/projects/skyvue-altier-interior.jpg";
import lagoonImage from "@/assets/projects/skyvue-altier-lagoon.jpg";
import rooftopImage from "@/assets/projects/skyvue-altier-rooftop.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const SkyvueAltierProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Skyvue Altier at Sobha Hartland 2 - Waterfront Tower" },
    { src: interiorImage, alt: "Skyvue Altier - Luxury Apartment Interior" },
    { src: lagoonImage, alt: "Skyvue Altier - Crystal Lagoon & Pool" },
    { src: rooftopImage, alt: "Skyvue Altier - Rooftop Infinity Pool" },
  ];

  const highlights = [
    { icon: Home, label: "1-2 BR Apartments", description: "Smart layouts" },
    { icon: Waves, label: "Waterfront Living", description: "Lagoon views" },
    { icon: Sparkles, label: "551 - 1,226 sq.ft", description: "Saleable area" },
    { icon: Shield, label: "Sobha Quality", description: "Premium finishes" },
  ];

  const amenities = [
    { icon: Waves, name: "Leisure & Infinity Pool" },
    { icon: Baby, name: "Kids Play Area" },
    { icon: Theater, name: "Open Cinema Area" },
    { icon: Users, name: "Skate Park" },
    { icon: Music, name: "Art & Music Room" },
    { icon: BookOpen, name: "Library & Reading" },
    { icon: ChefHat, name: "BBQ Zone" },
    { icon: Dumbbell, name: "Jogging Loop" },
    { icon: TreesIcon, name: "Yoga Zone" },
    { icon: Theater, name: "Indoor Cinema" },
  ];

  const floorPlans = [
    { type: "1 Bedroom Type A", area: "551.01 sq.ft", suite: "498.37 sq.ft", balcony: "52.64 sq.ft", features: "1 BR + 1 Balcony" },
    { type: "1 Bedroom Type B", area: "560.15 sq.ft", suite: "504.07 sq.ft", balcony: "56.08 sq.ft", features: "1 BR + 1 Balcony" },
    { type: "1 Bedroom Type C", area: "626.57 - 626.68 sq.ft", suite: "522.70 - 523.13 sq.ft", balcony: "103.44 - 103.98 sq.ft", features: "1 BR + 1 Balcony" },
    { type: "1 Bedroom Type D", area: "739.05 sq.ft", suite: "631.63 sq.ft", balcony: "107.42 sq.ft", features: "1 BR + Powder Room + 1 Balcony" },
    { type: "2 Bedroom Type A", area: "1,001.58 sq.ft", suite: "921.71 sq.ft", balcony: "79.87 sq.ft", features: "2 BR + 1 Balcony" },
    { type: "2 Bedroom Type B", area: "839.48 sq.ft", suite: "730.76 sq.ft", balcony: "108.72 sq.ft", features: "2 BR + 1 Balcony" },
    { type: "2 Bedroom Type C", area: "884.58 sq.ft", suite: "829.90 sq.ft", balcony: "54.68 sq.ft", features: "2 BR + 1 Balcony" },
    { type: "2 Bedroom Type D", area: "1,226.23 sq.ft", suite: "1,020.10 sq.ft", balcony: "206.13 sq.ft", features: "2 BR + Powder + Store + 1 Balcony" },
  ];

  const connectivity = [
    { icon: Mountain, destination: "Ras Al Khor Wildlife Sanctuary", time: "5 min" },
    { icon: Building, destination: "Downtown Dubai", time: "10 min" },
    { icon: Building2, destination: "Business Bay", time: "12 min" },
    { icon: Plane, destination: "Dubai International Airport", time: "12 min" },
    { icon: Building, destination: "Burj Khalifa & Dubai Mall", time: "15 min" },
  ];


  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Skyvue Altier by Sobha | Off-Plan Dubai"
        description="Skyvue Altier by Sobha Realty — premium off-plan high-rise in Dubai offering panoramic city views and world-class residential amenities."
        canonicalPath="/projects/sobha/skyvue-altier"
      />

      <Header />
      
      {/* SEO Meta */}
      <title>Skyvue Altier at Sobha Hartland 2 | Waterfront Living</title>
      <meta name="description" content="Book luxury residences at Skyvue Altier by Sobha in Hartland 2. Access pricing, floor plans & direct developer offers." />

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
                <Badge className="bg-gold-dark text-white">Featured</Badge>
                <Badge variant="outline" className="text-white border-white/50">Waterfront</Badge>
                <Badge variant="outline" className="text-white border-white/50">Off-Plan</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Skyvue Altier
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Sobha Realty
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Sobha Hartland 2, Dubai</span>
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
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="brochure">Brochure</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Where Urban Energy Meets Sky-High Serenity
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      Skyvue Altier is the defining point of Sobha Hartland II, the final tower in a master community where city life and calm living meet in perfect balance. Rising at the edge of the northern skyline, it offers a rare vantage point over two worlds: the glittering Downtown Dubai skyline and the protected beauty of the Ras Al Khor Wildlife Sanctuary.
                    </p>
                    <p>
                      Every residence is shaped by a philosophy of smart design and timeless appeal. The innovative, geometry-led architecture is crafted to maximize natural light, sightlines, and openness, creating homes that feel connected to the horizon yet intimately private.
                    </p>
                    <p>
                      Set within an 8 million sq. ft. master community, Skyvue Altier places you at the centre of a fully integrated lifestyle where retail, education, wellness, and leisure are all thoughtfully woven into the everyday fabric of life.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 1.84 Million | USD 504K
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
                    The Best of the City, Within Minutes
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
                    Designed for Every Passion
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

                {/* Key Features */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Signature Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Waves className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Waterfront Lifestyle</h3>
                      <p className="text-muted-foreground">Direct views of Downtown Dubai skyline and Ras Al Khor Wildlife Sanctuary from every residence.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Sparkles className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Innovative Design</h3>
                      <p className="text-muted-foreground">Geometry-led architecture maximizing natural light, sightlines, and openness in every home.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Shield className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Luxurious Finishes</h3>
                      <p className="text-muted-foreground">Premium materials and Sobha's signature quality craftsmanship in every detail.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Building2 className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">8M sq.ft Community</h3>
                      <p className="text-muted-foreground">Integrated master community with retail, education, wellness, and leisure amenities.</p>
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
                      <p className="text-muted-foreground mb-4">Complete details about Skyvue Altier including specifications, amenities, and lifestyle features.</p>
                      <Button variant="gold" className="w-full gap-2" asChild>
                        <a href="https://sobharealty.com/sites/default/files/2025-11/SKYVUE%20ALTIER%20-%20Brochure.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          View Brochure
                        </a>
                      </Button>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30">
                      <Home className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Floor Plans</h3>
                      <p className="text-muted-foreground mb-4">Detailed floor plans for all 1 & 2 bedroom apartment types with dimensions.</p>
                      <Button variant="gold-outline" className="w-full gap-2" asChild>
                        <a href="https://sobharealty.com/sites/default/files/2025-11/SKYVUE%20ALTIER%20-%20Brochure.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          View Floor Plans
                        </a>
                      </Button>
                    </Card>
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Apartment Collection & Pricing
                  </h2>
                  <div className="bg-cream/50 p-6 rounded-xl mb-6">
                    <p className="text-2xl font-bold text-gold-dark text-center">Starting from AED 1.84 Million</p>
                    <p className="text-center text-muted-foreground">USD 504K | EUR 444K | GBP 387K</p>
                    <p className="text-center text-sm text-muted-foreground mt-2">*Subject to inventory availability. Prices may vary as per exchange rate.</p>
                  </div>
                  <div className="grid gap-4">
                    {floorPlans.map((plan, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Card className="p-4 hover:shadow-lg transition-all hover:border-gold-dark/50 border-gold-light/30">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <h3 className="font-bold text-charcoal">{plan.type}</h3>
                              <p className="text-sm text-muted-foreground">{plan.features}</p>
                              <p className="text-xs text-muted-foreground mt-1">Suite: {plan.suite} | Balcony: {plan.balcony}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gold-dark">{plan.area}</p>
                              <p className="text-sm text-muted-foreground">Total Area</p>
                            </div>
                          </div>
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
                    A Visual Symphony
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
                    <p className="text-3xl font-bold text-gold-light">AED 1.84M</p>
                    <p className="text-cream/70 text-sm">USD 504K</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Sobha Realty</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">Sobha Hartland 2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">1-2 BR Apartments</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Status</span>
                      <span className="font-medium text-gold-light">Off-Plan</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "Skyvue Altier", ctaType: "Download Pricing" })}>
                  <Download className="w-4 h-4" />
                  Download Pricing
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "Skyvue Altier", ctaType: "Download Brochure" })}>
                  <FileText className="w-4 h-4" />
                  View Brochure
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "Skyvue Altier", ctaType: "Request Details" })}>
                  <MessageSquare className="w-4 h-4" />
                  Request Details
                </Button>
              </div>

              {/* Developer Info */}
              <Card className="p-4 bg-cream/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-xl font-bold text-charcoal">SR</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">Sobha Realty</p>
                    <p className="text-sm text-muted-foreground">Premium Developer</p>
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

export default SkyvueAltierProject;
