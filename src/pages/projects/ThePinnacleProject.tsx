import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2, Shield, Download, Phone, MessageSquare, Mail, Train, Plane, Waves, Dumbbell, Users, TreesIcon, Dog, Baby, BookOpen, Theater, Sparkles, Home, ChefHat, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/the-pinnacle-hero.jpg";
import interiorImage from "@/assets/projects/the-pinnacle-interior.jpg";
import poolImage from "@/assets/projects/the-pinnacle-pool.jpg";
import gymImage from "@/assets/projects/the-pinnacle-gym.jpg";

const ThePinnacleProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const images = [
    { src: heroImage, alt: "The Pinnacle at Sobha Central - Premium Tower Exterior" },
    { src: interiorImage, alt: "The Pinnacle - Contemporary Apartment Interior" },
    { src: poolImage, alt: "The Pinnacle - Infinity Pool & Rooftop Amenities" },
    { src: gymImage, alt: "The Pinnacle - State-of-the-Art Fitness Center" },
  ];

  const highlights = [
    { icon: Home, label: "1-2 BR Apartments", description: "Premium layouts" },
    { icon: Building2, label: "Tallest Tower", description: "In Sobha Central" },
    { icon: Sparkles, label: "564 - 1,082 sq.ft", description: "Saleable area range" },
    { icon: Shield, label: "Sobha Quality", description: "Premium craftsmanship" },
  ];

  const amenities = [
    { icon: Waves, name: "Leisure Pool" },
    { icon: ChefHat, name: "Family BBQ Area" },
    { icon: Dumbbell, name: "Calisthenic Gym" },
    { icon: TreesIcon, name: "Picnic Lawn" },
    { icon: Dog, name: "Dog Park" },
    { icon: Bath, name: "Jacuzzi & Sauna" },
    { icon: Theater, name: "Indoor Theatre" },
    { icon: Baby, name: "Kids Play Area" },
    { icon: Users, name: "Open Amphitheatre" },
    { icon: BookOpen, name: "Library" },
  ];

  const floorPlans = [
    { type: "1 Bedroom Type A", area: "564.78 sq.ft", suite: "504.83 sq.ft", balcony: "59.95 sq.ft", features: "1 BR + 1 Balcony" },
    { type: "1 Bedroom Type B", area: "609.56 - 610.42 sq.ft", suite: "551.22 - 552.08 sq.ft", balcony: "58.34 sq.ft", features: "1 BR + Powder Room + 1 Balcony" },
    { type: "1 Bedroom Type C", area: "668.44 - 668.55 sq.ft", suite: "618.28 - 620.22 sq.ft", balcony: "48.33 - 50.16 sq.ft", features: "1 BR + Powder Room + 1 Balcony" },
    { type: "1 Bedroom Type D", area: "686.20 sq.ft", suite: "635.39 sq.ft", balcony: "50.81 sq.ft", features: "1 BR + Powder Room + 1 Balcony" },
    { type: "2 Bedroom Type A", area: "997.71 sq.ft", suite: "855.30 sq.ft", balcony: "142.41 sq.ft", features: "2 BR + Powder Room + 1 Balcony" },
    { type: "2 Bedroom Type B", area: "1,082.53 sq.ft", suite: "917.95 sq.ft", balcony: "164.58 sq.ft", features: "2 BR + Powder Room + 1 Balcony" },
  ];

  const connectivity = [
    { icon: Train, destination: "Jebel Ali Metro Station", time: "2 min" },
    { icon: Waves, destination: "Dubai Marina", time: "13 min" },
    { icon: Plane, destination: "DXB International Airport", time: "29 min" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* SEO Meta */}
      <title>The Pinnacle by Sobha | Off-Plan Dubai Apartments</title>
      <meta name="description" content="Premium living at The Pinnacle, Sobha Realty's off-plan residences in Dubai. 1 & 2 bedroom apartments in Sobha Central with world-class amenities." />

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
                <Badge variant="outline" className="text-white border-white/50">Apartments</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                The Pinnacle
              </h1>
              <p className="text-xl md:text-2xl text-gold-light font-medium mb-2">
                by Sobha Realty
              </p>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Sobha Central, Dubai</span>
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
                <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Where Elevation Defines Living
                  </h2>
                  <div className="prose prose-lg max-w-none text-charcoal-light">
                    <p>
                      Rising as the final and tallest tower of Sobha Central, The Pinnacle stands as the culmination of the masterplan's architectural vision—a residence where height becomes expression and refinement is felt in every detail. Designed to embrace light, openness, and perspective, the tower reflects a calm confidence shaped by elevation and clarity.
                    </p>
                    <p>
                      Each 1 & 2 Bedroom apartment is thoughtfully crafted to maximise views and natural light, offering a living experience defined by balance and restraint. Expansive glazing, refined layouts, and carefully considered interiors create a seamless connection between home and horizon, allowing the city to be experienced from above.
                    </p>
                    <p>
                      Set within the heart of Sobha Central, The Pinnacle places residents at the centre of connectivity while remaining elevated above the everyday. With seamless access to the city's key destinations and a fully integrated community below, life at The Pinnacle feels both distinctly connected and quietly removed.
                    </p>
                    <p className="text-gold-dark font-semibold text-xl">
                      Starting from AED 1.78 Million | USD 487K
                    </p>
                  </div>
                </motion.section>

                {/* Gallery */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

              <TabsContent value="floorplans" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Apartment Collection
                  </h2>
                  <div className="grid gap-4">
                    {floorPlans.map((plan, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
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

              <TabsContent value="amenities" className="space-y-8">
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
              </TabsContent>

              <TabsContent value="location" className="space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    The Best of the City, All Within Minutes
                  </h2>
                  <div className="space-y-4">
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

                {/* Interactive Map */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Location Map
                  </h2>
                  <div className="rounded-xl overflow-hidden h-[400px] border border-gold-light/30">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4024583858!2d55.0331!3d25.0612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d6d7c6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sSobha%20Central!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Pinnacle at Sobha Central Location"
                    />
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
                    <p className="text-3xl font-bold text-gold-light">AED 1.78M</p>
                    <p className="text-cream/70 text-sm">USD 487K</p>
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-cream/70">Developer</span>
                      <span className="font-medium">Sobha Realty</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream/70">Location</span>
                      <span className="font-medium">Sobha Central</span>
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
                <Button className="w-full gap-2" variant="gold" onClick={() => openLeadCapture({ projectName: "The Pinnacle", ctaType: "Download Brochure" })}>
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
                <Button className="w-full gap-2" variant="gold-outline" onClick={() => openLeadCapture({ projectName: "The Pinnacle", ctaType: "Download Floor Plan" })}>
                  <Download className="w-4 h-4" />
                  Floor Plan PDF
                </Button>
                <Button className="w-full gap-2" variant="outline" onClick={() => openLeadCapture({ projectName: "The Pinnacle", ctaType: "Book a Consultation" })}>
                  <Phone className="w-4 h-4" />
                  Schedule a Call
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

export default ThePinnacleProject;
