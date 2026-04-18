import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, Waves, Dumbbell, Users, TreesIcon, Baby, Home, Sparkles, FileText, Camera, Car, Fence, Route, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { SeoHead } from "@/components/seo/SeoHead";

import heroImage from "@/assets/projects/mudon-al-ranim-5-hero.jpg";
import interiorImage from "@/assets/projects/mudon-al-ranim-5-interior.jpg";
import poolImage from "@/assets/projects/mudon-al-ranim-5-pool.jpg";
import gardenImage from "@/assets/projects/mudon-al-ranim-5-garden.jpg";

const MudonAlRanim5Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Mudon Al Ranim 5 - Contemporary Townhouses by Dubai Properties" },
    { src: interiorImage, alt: "Mudon Al Ranim 5 - Townhouse Interior" },
    { src: poolImage, alt: "Mudon Al Ranim 5 - Community Pool Area" },
    { src: gardenImage, alt: "Mudon Al Ranim 5 - Landscaped Gardens & Parks" },
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
    { icon: Dumbbell, name: "Gym" },
    { icon: ShoppingBag, name: "Community Retail" },
  ];

  const connectivity = [
    { icon: Route, destination: "Ibn Battuta Mall", time: "10 min" },
    { icon: Route, destination: "Sheikh Zayed Road", time: "15 min" },
    { icon: Route, destination: "Al Maktoum Airport", time: "20 min" },
    { icon: Building2, destination: "Dubai Mall & Downtown", time: "25 min" },
    { icon: Building2, destination: "Dubai International Airport", time: "35 min" },
  ];

  const unitTypes = [
    { type: "3 Bedroom Townhouse", size: "2,100 – 2,400 sq.ft", price: "From AED 2.06M" },
    { type: "4 Bedroom Townhouse", size: "2,500 – 2,900 sq.ft", price: "From AED 2.5M" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Mudon Al Ranim 5 by Dubai Properties | Townhouses in Mudon Dubai"
        description="Explore Mudon Al Ranim 5 offering 3 & 4 bedroom townhouses in Mudon, Dubailand, Dubai. Family-focused living in a green gated community. Handover Q2 2026."
        canonicalPath="/projects/dubai-properties/mudon-al-ranim-5"
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gold-dark text-white">Under Construction</Badge>
                <Badge variant="outline" className="text-white border-white/50">Family Friendly</Badge>
                <Badge variant="outline" className="text-white border-white/50">Gated Community</Badge>
                <Badge variant="outline" className="text-white border-white/50">Handover Q2 2026</Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Mudon Al Ranim 5
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
                    <p className="font-bold text-charcoal text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Tabbed Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="brochure">Brochure</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              {/* OVERVIEW TAB */}
              <TabsContent value="overview" className="space-y-8">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Community Living, Naturally Elevated
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light space-y-4">
                    <p>
                      Mudon Al Ranim 5 is the latest phase within Dubai Properties' award-winning Mudon master community in the heart of Dubailand. This thoughtfully designed collection of 3 and 4-bedroom townhouses blends contemporary architecture with lush, nature-inspired surroundings to deliver an exceptional family living experience.
                    </p>
                    <p>
                      Each townhouse features generous layouts, private gardens, and premium finishes. Seamlessly integrated into the established Mudon community, residents enjoy immediate access to resort-style pools, children's play areas, landscaped parks, jogging tracks, and community retail — all within a secure, gated environment.
                    </p>
                    <p>
                      Strategically located near Ibn Battuta Mall and major road networks, Mudon Al Ranim 5 offers excellent connectivity to Dubai's key business and leisure hubs. With a Q2 2026 handover and starting from AED 2.06M, this project is ideal for families and investors alike.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">Starting from AED 2.06 Million</p>
                  </div>
                </motion.section>

                {/* Unit Types */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">Unit Types</h2>
                  <div className="space-y-3">
                    {unitTypes.map((unit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between p-5 bg-cream/50 rounded-xl hover:bg-cream transition-colors border border-gold-light/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div>
                          <p className="font-bold text-charcoal">{unit.type}</p>
                          <p className="text-sm text-muted-foreground">{unit.size}</p>
                        </div>
                        <Badge className="bg-gold-dark text-white text-sm px-3 py-1">{unit.price}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Connectivity */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Connected to Everything
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
                          <item.icon className="w-5 h-5 text-gold-dark" />
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

              {/* AMENITIES TAB */}
              <TabsContent value="amenities" className="space-y-8">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">Community Amenities</h2>
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
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">Why Mudon Al Ranim 5?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: TreesIcon, title: "Lush Green Spaces", desc: "Landscaped parks and greenery surrounding every home, bringing nature to your doorstep." },
                      { icon: Shield, title: "Safe & Secure", desc: "A fully gated community with 24/7 security, CCTV, and a close-knit neighbourhood atmosphere." },
                      { icon: Route, title: "Excellent Connectivity", desc: "Quick access to Ibn Battuta Mall, Sheikh Zayed Road, and Al Maktoum International Airport." },
                      { icon: Users, title: "Established Community", desc: "Part of the thriving Mudon master community with operational schools, retail, and leisure." },
                    ].map((item, idx) => (
                      <Card key={idx} className="p-6 bg-gradient-to-br from-cream to-white border-gold-light/20">
                        <item.icon className="w-12 h-12 text-gold-dark mb-4" />
                        <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </Card>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              {/* BROCHURE TAB */}
              <TabsContent value="brochure" className="space-y-8">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">Download Resources</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30">
                      <FileText className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Project Brochure</h3>
                      <p className="text-muted-foreground mb-4 text-sm">Complete details including specifications, amenities, and community features of Mudon Al Ranim 5.</p>
                      <Button variant="gold" className="w-full gap-2" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 5", ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </Button>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30">
                      <Home className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Floor Plans</h3>
                      <p className="text-muted-foreground mb-4 text-sm">Detailed floor plans for all 3 & 4 bedroom townhouse layouts with dimensions and specifications.</p>
                      <Button variant="gold-outline" className="w-full gap-2" onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 5", ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4" />
                        Download Floor Plans
                      </Button>
                    </Card>
                  </div>
                </motion.section>
              </TabsContent>

              {/* GALLERY TAB */}
              <TabsContent value="gallery" className="space-y-8">
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">Project Gallery</h2>
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
                    <p className="text-cream/60 text-xs mt-1">3 & 4 Bedroom Townhouses</p>
                  </div>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-semibold">Dubai Properties</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-cream/70">Location</span>
                      <span className="font-semibold">Mudon, Dubai</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-cream/70">Property Type</span>
                      <span className="font-semibold">Townhouse</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-cream/70">Bedrooms</span>
                      <span className="font-semibold">3 & 4 BR</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-cream/70">Status</span>
                      <span className="font-semibold text-gold-light">Under Construction</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Handover</span>
                      <span className="font-semibold text-gold-light">Q2 2026</span>
                    </div>
                  </div>
                  <Button
                    variant="gold"
                    className="w-full mb-3"
                    onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 5", ctaType: "Request Details" })}
                  >
                    Request Details
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10"
                    onClick={() => openLeadCapture({ projectName: "Mudon Al Ranim 5", ctaType: "Schedule Viewing" })}
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </Card>

              {/* Investment Tags */}
              <Card className="p-5 border-gold-light/30">
                <h3 className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">Investment Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {["High Capital Appreciation", "Rental Income Focused", "Investor Hotspot"].map((tag) => (
                    <Badge key={tag} className="bg-gold-dark/10 text-gold-dark border border-gold-dark/20 text-xs">{tag}</Badge>
                  ))}
                </div>
              </Card>

              {/* Legal Disclaimer */}
              <Card className="p-4 bg-muted/50 border-muted">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> This platform operates as a digital property discovery and marketing portal. We do not provide brokerage services. All information is subject to change. Prices and availability are indicative only.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MudonAlRanim5Project;
