import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Shield, Download, Phone, MessageSquare, Mail, Waves, Dumbbell, Users, TreesIcon, Baby, Sparkles, Home, ShoppingBag, Coffee, Footprints, Calendar, FileText, Camera, Building, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/city-walk-crestlane-hero.jpg";
import interiorImage from "@/assets/projects/city-walk-crestlane-interior.jpg";
import poolImage from "@/assets/projects/city-walk-crestlane-pool.jpg";
import retailImage from "@/assets/projects/city-walk-crestlane-retail.jpg";

const CityWalkCrestlaneProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const images = [
    { src: heroImage, alt: "City Walk Crestlane - Urban Luxury Residences" },
    { src: interiorImage, alt: "City Walk Crestlane - Premium Apartment Interior" },
    { src: poolImage, alt: "City Walk Crestlane - Infinity Pool & Amenities" },
    { src: retailImage, alt: "City Walk Crestlane - Retail Promenade" },
  ];

  const highlights = [
    { icon: Home, label: "1-4 BR + Duplexes", description: "Premium layouts" },
    { icon: Waves, label: "Waterfront Living", description: "Flowing water features" },
    { icon: ShoppingBag, label: "Walkable Retail", description: "City Walk district" },
    { icon: Shield, label: "Meraas Quality", description: "Premium developer" },
  ];

  const amenities = [
    { icon: Waves, name: "Water Features" },
    { icon: Waves, name: "Swimming Pools" },
    { icon: Dumbbell, name: "Sport Courts" },
    { icon: Baby, name: "Kids Play Areas" },
    { icon: Dumbbell, name: "Outdoor Fitness" },
    { icon: Users, name: "Community Hubs" },
    { icon: Calendar, name: "Event Lawns" },
    { icon: TreesIcon, name: "Yoga & Exercise Lawns" },
    { icon: Users, name: "Sunken Seats" },
    { icon: Footprints, name: "Jogging Tracks" },
  ];

  const unitTypes = [
    { type: "1 Bedroom Apartment", description: "Open-plan living with city views" },
    { type: "2 Bedroom Apartment", description: "Spacious layouts with balconies" },
    { type: "3 Bedroom Apartment", description: "Family-sized with premium finishes" },
    { type: "4 Bedroom Apartment", description: "Luxury living spaces" },
    { type: "4 Bedroom Duplex", description: "Two-level premium residences" },
  ];

  const connectivity = [
    { icon: ShoppingBag, destination: "City Walk Mall", time: "2 min walk" },
    { icon: Building, destination: "Sheikh Zayed Road", time: "3 min" },
    { icon: Waves, destination: "Jumeirah Beach", time: "7 min" },
    { icon: ShoppingBag, destination: "Dubai Mall", time: "7 min" },
    { icon: Building2, destination: "DIFC", time: "11 min" },
    { icon: Plane, destination: "Dubai International Airport", time: "15 min" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* SEO Meta */}
      <title>City Walk Crestlane by Meraas | Luxury Residences Dubai</title>
      <meta name="description" content="Discover City Walk Crestlane — premium urban living in Dubai's iconic City Walk by Meraas." />

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
                <Badge variant="outline" className="text-white border-white/50">City Walk</Badge>
                <Badge variant="outline" className="text-white border-white/50">Off-Plan</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                City Walk Crestlane
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Meraas
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">City Walk, Dubai</span>
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
                    Where Urban Energy Meets Waterfront Calm
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      Discover City Walk Crestlane, an exclusive collection of 1- to 4-bedroom apartments and duplexes that perfectly blend the vibrant pace of the city with the calm of waterfront living. Nestled in the heart of Dubai, every corner pulses with energy, and every moment invites you to explore, unwind, and connect.
                    </p>
                    <p>
                      Water isn't just a feature at City Walk Crestlane—it's the essence of this masterfully designed community. Surrounded by water, every building offers tranquil reflections and gentle ripples that create an atmosphere of calm and connection. Whether enjoying the view, taking a refreshing dip, or gliding through its depths, water invites you to experience it at your own pace.
                    </p>
                    <p>
                      Surrounded by vibrant greenery and flowing water features, City Walk Crestlane offers modern residences with exceptional amenities in a tranquil urban retreat. Discover a community where wellness and lifestyle converge, featuring panoramic water views, state-of-the-art fitness facilities, infinity pools, and much more.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 2.70 Million
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

              <TabsContent value="lifestyle" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Luxury Urban Living at City Walk
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Waves className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Waterfront Experience</h3>
                      <p className="text-muted-foreground">Water isn't just a feature—it's the essence of this community. Tranquil reflections and gentle ripples create an atmosphere of calm and connection.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <ShoppingBag className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Walkable Neighborhood</h3>
                      <p className="text-muted-foreground">Just 2 minutes walk from City Walk Mall with access to 400+ retail outlets, cafés, and restaurants at your doorstep.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <Sparkles className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Premium Interiors</h3>
                      <p className="text-muted-foreground">Sleek finishes, open layouts, and skyline views. The ultimate blend of elegance and relaxation in a harmonious urban sanctuary.</p>
                    </Card>
                    <Card className="p-6 bg-gradient-to-br from-cream to-white">
                      <TreesIcon className="w-12 h-12 text-gold-dark mb-4" />
                      <h3 className="text-xl font-bold text-charcoal mb-2">Green Living</h3>
                      <p className="text-muted-foreground">Surrounded by vibrant greenery and flowing water features, creating a tranquil urban retreat in the heart of Dubai.</p>
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
                    <p className="text-3xl font-bold text-gold-light">AED 2.70M</p>
                    <p className="text-cream/70 text-sm">Properties Available</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Meraas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">City Walk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">1-4 BR + Duplexes</span>
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
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "City Walk Crestlane", ctaType: "Download Floor Plan" })}>
                  <Download className="w-4 h-4" />
                  Download Floor Plan
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "City Walk Crestlane", ctaType: "Download Price Plan" })}>
                  <FileText className="w-4 h-4" />
                  Download Price Plan
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "City Walk Crestlane", ctaType: "Book a Consultation" })}>
                  <Phone className="w-4 h-4" />
                  Contact Advisor
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "City Walk Crestlane", ctaType: "Request Details" })}>
                  <MessageSquare className="w-4 h-4" />
                  Request Details
                </Button>
              </div>

              {/* Contact Form */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">Request More Info</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input 
                      id="whatsapp" 
                      placeholder="+971 50 123 4567"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="dark">
                    <Mail className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </Card>

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

export default CityWalkCrestlaneProject;
