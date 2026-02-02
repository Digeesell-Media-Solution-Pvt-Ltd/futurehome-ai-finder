import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2, Shield, Download, Phone, MessageSquare, Mail, TreesIcon, Users, Dumbbell, Leaf, Home, Waves, Bike, TreeDeciduous, Sparkles, Heart, Footprints, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroImage from "@/assets/projects/the-brooks-hero.jpg";
import interiorImage from "@/assets/projects/the-brooks-interior.jpg";
import parkImage from "@/assets/projects/the-brooks-park.jpg";
import clubhouseImage from "@/assets/projects/the-brooks-clubhouse.jpg";

const TheBrooksProject = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const images = [
    { src: heroImage, alt: "The Brooks at Sobha Sanctuary - Wellness Townhouse Exterior" },
    { src: interiorImage, alt: "The Brooks - Contemporary Living Room Interior" },
    { src: parkImage, alt: "The Brooks - Linear Park & Waterways" },
    { src: clubhouseImage, alt: "The Brooks - Wellness Center & Clubhouse" },
  ];

  const highlights = [
    { icon: Home, label: "4-5 BR Villas", description: "Wellness-focused layouts" },
    { icon: Heart, label: "Wellness Living", description: "Active lifestyle design" },
    { icon: Sparkles, label: "2,459 - 4,107 sq.ft", description: "Saleable area range" },
    { icon: Shield, label: "Sobha Quality", description: "Premium craftsmanship" },
  ];

  const amenities = [
    { icon: Footprints, name: "Adventure Walk" },
    { icon: TreesIcon, name: "Community Garden" },
    { icon: Dumbbell, name: "Fitness & Wellness Decks" },
    { icon: Waves, name: "Beach Lagoon" },
    { icon: Bike, name: "Cycling Networks" },
    { icon: Users, name: "Massive Clubhouse" },
    { icon: TreeDeciduous, name: "Forest Play Park" },
    { icon: Building2, name: "Co-working Space" },
  ];

  const villaTypes = [
    { type: "4 Bedroom Villa Type A", area: "2,521 sq.ft", features: "4 BR + Powder Room + Utility + Store + Balcony" },
    { type: "4 Bedroom Villa Type B", area: "2,459 sq.ft", features: "4 BR + Powder Room + Utility + Store + Balcony" },
    { type: "4 Bedroom Villa Type C", area: "3,430 sq.ft", features: "4 BR + Powder Room + Utility + Store + 2 Balconies" },
    { type: "4 Bedroom Villa Type D", area: "3,329 sq.ft", features: "4 BR + Powder Room + Utility + Store + 2 Balconies" },
    { type: "5 Bedroom Villa Type A", area: "4,107 sq.ft", features: "5 BR + Powder Room + Maid Room + 3 Balconies + Roof Terrace" },
  ];

  const connectivity = [
    { destination: "Dubai Rugby Sevens", time: "5 min" },
    { destination: "Dubai Outlet Mall", time: "8 min" },
    { destination: "Downtown Dubai", time: "20 min" },
    { destination: "Dubai International Airport", time: "25 min" },
    { destination: "Al Maktoum International Airport", time: "30 min" },
  ];

  const lifestyleFeatures = [
    { title: "Active Living", description: "Jogging loops, cycling paths, and sports courts integrated throughout the community" },
    { title: "Wellness Focus", description: "Yoga zones, meditation decks, and fitness facilities promote daily vitality" },
    { title: "Nature Connection", description: "Located along the central green spine with direct access to landscaped parks" },
    { title: "Community Hub", description: "Walking distance to district park, wellness centre, community mall, and sports grounds" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
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
                <Badge className="bg-gold-dark text-white">Featured</Badge>
                <Badge variant="outline" className="text-white border-white/50">Off-Plan</Badge>
                <Badge variant="outline" className="text-white border-white/50">Wellness Villas</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                The Brooks
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Sobha Realty
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Sobha Sanctuary, Dubai</span>
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
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="masterplan">Master Plan</TabsTrigger>
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Where Life Moves with Purpose
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      The Brooks is a wellness-driven neighbourhood designed for residents who thrive on movement, energy, and everyday vitality. Located along Sobha Sanctuary's central green spine, the cluster enjoys direct access to landscaped parks, walking trails, and active green corridors that shape daily routines.
                    </p>
                    <p>
                      Homes are within easy walking distance of the district park, wellness centre, community mall, and sports grounds, all seamlessly connected by cycling and pedestrian networks. Here, everyday life feels active, balanced, and naturally connected to nature.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 5.83 Million | USD 1.60 Million
                    </p>
                  </div>
                </motion.section>

                {/* Villa Types */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Villa Collection
                  </h2>
                  <div className="grid gap-4">
                    {villaTypes.map((villa, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="p-4 hover:shadow-lg transition-all hover:border-gold-dark/50 border-gold-light/30">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <h3 className="font-bold text-charcoal">{villa.type}</h3>
                              <p className="text-sm text-muted-foreground">{villa.features}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gold-dark">{villa.area}</p>
                              <p className="text-sm text-muted-foreground">Saleable Area</p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="features" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Where Wellness Flows Through Everyday Living
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

                {/* Connectivity */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    A Neighbourhood in Motion
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
                        <span className="font-medium text-charcoal">{item.destination}</span>
                        <Badge variant="outline" className="bg-gold-dark text-white border-0">
                          {item.time}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="masterplan" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Community Master Plan
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="p-6 bg-gradient-to-br from-cream to-white">
                        <Map className="w-12 h-12 text-gold-dark mb-4" />
                        <h3 className="text-xl font-bold text-charcoal mb-2">Central Green Spine</h3>
                        <p className="text-muted-foreground">The Brooks is strategically positioned along Sobha Sanctuary's blue-green network, offering direct access to flowing waterways and linear parks.</p>
                      </Card>
                      <Card className="p-6 bg-gradient-to-br from-cream to-white">
                        <Footprints className="w-12 h-12 text-gold-dark mb-4" />
                        <h3 className="text-xl font-bold text-charcoal mb-2">Walkable Streets</h3>
                        <p className="text-muted-foreground">Pedestrian-friendly design with shaded walking paths connecting homes to retail, dining, and community hubs.</p>
                      </Card>
                    </div>
                    <div className="rounded-xl overflow-hidden h-[400px]">
                      <img src={parkImage} alt="The Brooks Master Plan" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.section>
              </TabsContent>

              <TabsContent value="lifestyle" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    A Community Shaped by Movement, Wellness, and Connection
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {lifestyleFeatures.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="p-6 hover:shadow-lg transition-all border-gold-light/30 h-full">
                          <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Gallery */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-xl overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setActiveImage(idx)}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
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
                    <p className="text-3xl font-bold text-gold-light">AED 5.83M</p>
                    <p className="text-cream/70 text-sm">USD 1.60 Million</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Sobha Realty</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">Sobha Sanctuary</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Unit Types</span>
                      <span className="font-medium">4-5 BR Villas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Status</span>
                      <span className="font-medium text-gold-light">Off-Plan</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gold-light">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Verified by FutureHome</span>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full gap-2" 
                  variant="gold"
                  asChild
                >
                  <a href="https://sobharealty.com/sites/default/files/2026-01/THE%20BROOKS%20AT%20SOBHA_SANCTUARY.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </a>
                </Button>
                <Button 
                  className="w-full gap-2" 
                  variant="gold-outline"
                >
                  <Download className="w-4 h-4" />
                  Request Pricing
                </Button>
                <Button 
                  className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                  asChild
                >
                  <a href="https://wa.me/971501234567?text=Hi, I'm interested in The Brooks at Sobha Sanctuary" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4" />
                    Enquire Now
                  </a>
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
                    <span className="text-xl font-bold text-charcoal">SR</span>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">Sobha Realty</p>
                    <p className="text-sm text-muted-foreground">Premium Developer</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-gold-dark">★★★★★</span>
                      <span className="text-xs text-muted-foreground">4.7/5</span>
                    </div>
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

export default TheBrooksProject;
