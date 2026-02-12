import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building2, Shield, Download, Phone, MessageSquare, Mail, TreesIcon, Users, Dumbbell, Leaf, Home, Waves, Bike, TreeDeciduous, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroImage from "@/assets/projects/the-grove-hero.jpg";
import interiorImage from "@/assets/projects/the-grove-interior.jpg";
import spaImage from "@/assets/projects/the-grove-spa.jpg";
import gardenImage from "@/assets/projects/the-grove-garden.jpg";

const TheGroveProject = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const images = [
    { src: heroImage, alt: "The Grove at Sobha Sanctuary - Luxury Villa Exterior" },
    { src: interiorImage, alt: "The Grove - Formal Living Room Interior" },
    { src: spaImage, alt: "The Grove - Spa & Wellness Center" },
    { src: gardenImage, alt: "The Grove - Sensory Garden & Forest Walkway" },
  ];

  const highlights = [
    { icon: Home, label: "4-6 BR Villas", description: "Expansive estate homes" },
    { icon: TreeDeciduous, label: "Blue-Green Network", description: "Waterways & linear parks" },
    { icon: Sparkles, label: "4,905 - 7,192 sq.ft", description: "Saleable area range" },
    { icon: Shield, label: "Sobha Quality", description: "Premium craftsmanship" },
  ];

  const amenities = [
    { icon: Bike, name: "Cycling Networks" },
    { icon: TreesIcon, name: "Adventure Walk" },
    { icon: Dumbbell, name: "Fitness & Wellness Decks" },
    { icon: Waves, name: "Beach Lagoon" },
    { icon: Leaf, name: "Sensory Garden" },
    { icon: Users, name: "Massive Clubhouse" },
    { icon: TreeDeciduous, name: "Forest Play Park" },
    { icon: Building2, name: "Co-working Space" },
  ];

  const villaTypes = [
    { type: "4 Bedroom Villa Type A", area: "4,905 sq.ft", features: "4 BR + Powder Room + Guest Room + Store + Study + 3 Balconies" },
    { type: "4 Bedroom Villa Type B", area: "4,985 sq.ft", features: "4 BR + Powder Room + Guest Room + Store + Study + 3 Balconies" },
    { type: "4 Bedroom Villa Type C", area: "4,954 sq.ft", features: "4 BR + Powder Room + Guest Room + Store + Study + Balcony" },
    { type: "5 Bedroom Villa Type A", area: "5,792 sq.ft", features: "5 BR + Powder Room + Maid Room + Guest Room + Balcony" },
    { type: "5 Bedroom Villa Type B", area: "5,814 sq.ft", features: "5 BR + Powder Room + Maid Room + Guest Room + Balcony" },
    { type: "6 Bedroom Villa Type A", area: "7,192 sq.ft", features: "6 BR + Powder Room + Maid Room + Store + 3 Balconies" },
  ];

  const connectivity = [
    { destination: "Dubai Rugby Sevens", time: "5 min" },
    { destination: "Dubai Outlet Mall", time: "8 min" },
    { destination: "Downtown Dubai", time: "20 min" },
    { destination: "Dubai International Airport", time: "25 min" },
    { destination: "Al Maktoum International Airport", time: "30 min" },
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
        <motion.img 
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          key={activeImage}
        />
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
                <Badge className="bg-gold-dark text-white">New Launch</Badge>
                <Badge variant="outline" className="text-white border-white/50">Off-Plan</Badge>
                <Badge variant="outline" className="text-white border-white/50">Luxury Villas</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                The Grove
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
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === idx ? "border-gold-dark scale-110" : "border-white/30 hover:border-white/60"
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
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
                <Card key={idx} className="text-center p-4 bg-cream/50 border-gold-light/30">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-gold-dark" />
                  <p className="font-bold text-charcoal">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </motion.div>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                Where Luxury Flows in its Purest Form
              </h2>
              <div className="prose prose-lg max-w-none text-charcoal-light">
                <p>
                  The Grove is an exclusive enclave of luxury independent villas, offering expansive estate homes shaped by landscape, light, and privacy. Embedded within Sobha Sanctuary's blue-green network, the neighbourhood is defined by flowing waterways, linear parks, and shaded pedestrian routes that guide daily movement.
                </p>
                <p>
                  Homes are thoughtfully positioned away from high-activity zones, with layered landscaping preserving a sense of quiet while remaining seamlessly connected to cycling paths, wellness loops, and neighbourhood amenities. Here, living feels grounded, generous, and naturally private.
                </p>
                <p className="text-gold-dark font-semibold">
                  Starting from AED 9.32 Million | USD 2.55 Million
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
                  <Card key={idx} className="p-4 hover:shadow-lg transition-shadow border-gold-light/30">
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
                ))}
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

            {/* Amenities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                Expansive Living, Shaped by Nature
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, idx) => (
                  <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all hover:border-gold-dark/50 border-gold-light/30">
                    <amenity.icon className="w-10 h-10 mx-auto mb-3 text-gold-dark" />
                    <p className="font-medium text-charcoal text-sm">{amenity.name}</p>
                  </Card>
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
                Vibrant Living, Closer to Convenience
              </h2>
              <div className="space-y-3">
                {connectivity.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-cream/50 rounded-lg">
                    <span className="font-medium text-charcoal">{item.destination}</span>
                    <Badge variant="outline" className="bg-gold-dark text-white border-0">
                      {item.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <Card className="p-6 bg-gradient-to-br from-charcoal to-charcoal-light text-white">
                <div className="text-center mb-6">
                  <p className="text-cream/80 text-sm mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-gold-light">AED 9.32M</p>
                  <p className="text-cream/70 text-sm">USD 2.55 Million</p>
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
                    <span className="font-medium">4-6 BR Villas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/70">Status</span>
                    <span className="font-medium text-gold-light">Off-Plan</span>
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
                  <a href="https://sobharealty.com/sites/default/files/2026-01/THE%20GROVE%20AT%20SOBHA%20SANCTUARY_0.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download Floor Plan PDF
                  </a>
                </Button>
                <Button 
                  className="w-full gap-2" 
                  variant="gold-outline"
                  asChild
                >
                  <a href="https://sobharealty.com/sites/default/files/2026-01/THE%20GROVE%20AT%20SOBHA%20SANCTUARY_0.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </a>
                </Button>
                <Button 
                  className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                  asChild
                >
                  <a href="https://wa.me/971501234567?text=Hi, I'm interested in The Grove at Sobha Sanctuary" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Enquiry
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Schedule a Callback
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
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
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

export default TheGroveProject;
