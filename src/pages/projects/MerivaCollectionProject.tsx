import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Calendar, Banknote, BedDouble, Download, FileText,
  Star, Waves, Shield, Dumbbell, TreePine, Heart, Umbrella,
  Building2, Route, Sparkles, Users, Coffee, Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import heroImg from "@/assets/projects/meriva-collection-hero.jpg";
import poolImg from "@/assets/projects/meriva-collection-pool.jpg";
import interiorImg from "@/assets/projects/meriva-collection-interior.jpg";
import aerialImg from "@/assets/projects/meriva-collection-aerial.jpg";
import penthouseImg from "@/assets/projects/meriva-collection-penthouse.jpg";

const images = [
  { src: poolImg, alt: "The Meriva Collection – Beachfront Tower & Pool, Dubai Islands" },
  { src: interiorImg, alt: "The Meriva Collection – Luxury Waterfront Interior" },
  { src: aerialImg, alt: "The Meriva Collection – Dubai Islands Aerial Community View" },
  { src: penthouseImg, alt: "The Meriva Collection – Signature Penthouse Terrace" },
  { src: heroImg, alt: "The Meriva Collection – Clubhouse by Ellington Properties" },
];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Dumbbell, label: "Fitness Stations" },
  { icon: Umbrella, label: "Private Beach Access" },
  { icon: Users, label: "Concierge Services" },
  { icon: Heart, label: "Spa & Wellness" },
  { icon: Wind, label: "Yoga Deck" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Coffee, label: "Dining & BBQ Areas" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Sparkles, label: "Lagoon Water Features" },
  { icon: Building2, label: "Paddle Tennis Courts" },
  { icon: Star, label: "Mini Golf" },
];

const unitTypes = [
  { type: "1 Bedroom Apartment", size: "850 – 1,100 sq.ft", price: "From AED 3.2M" },
  { type: "2 Bedroom Apartment", size: "1,300 – 1,700 sq.ft", price: "From AED 5.5M" },
  { type: "3 Bedroom Apartment", size: "2,000 – 2,600 sq.ft", price: "From AED 9M" },
  { type: "4 Bedroom Apartment", size: "3,200 – 4,000 sq.ft", price: "From AED 14M" },
  { type: "Signature Penthouse", size: "5,000+ sq.ft", price: "On Request" },
];

const connectivity = [
  { icon: Route, destination: "Dubai Islands Mall", time: "5 min" },
  { icon: Route, destination: "Dubai International Airport", time: "18 min" },
  { icon: Route, destination: "Dubai Festival City", time: "18 min" },
  { icon: Building2, destination: "Gold Souq Metro Station", time: "20 min" },
  { icon: Building2, destination: "Museum of the Future", time: "25 min" },
  { icon: Building2, destination: "DIFC", time: "30 min" },
  { icon: Building2, destination: "Burj Khalifa / Dubai Mall", time: "35 min" },
];

const MerivaCollectionProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "The Meriva Collection", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>The Meriva Collection by Ellington | Dubai Islands Waterfront Residences</title>
        <meta name="description" content="Discover The Meriva Collection at Dubai Islands by Ellington Properties offering premium waterfront residences and investment opportunities." />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/ellington/meriva-collection" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          {/* Waterfront accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-dark/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-14">
            <div className="max-w-7xl mx-auto">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-5 transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-gold-dark text-white text-xs px-3">Newly Launched</Badge>
                  <Badge variant="outline" className="text-white border-white/40 text-xs">Beachfront</Badge>
                  <Badge variant="outline" className="text-white border-white/40 text-xs">Island Living</Badge>
                  <Badge variant="outline" className="text-white border-white/40 text-xs">Branded Residences</Badge>
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                  The Meriva Collection
                </h1>
                <p className="text-xl md:text-2xl text-gold-light font-medium mb-4">
                  by Ellington Properties
                </p>
                <p className="text-white/80 text-base md:text-lg italic mb-5 max-w-2xl">
                  "An elite beachfront community centered on tranquility"
                </p>
                <div className="flex flex-wrap gap-5 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gold-light" /> Dubai Islands, Dubai</span>
                  <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-gold-light" /> 1BR – Penthouse</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold-light" /> Q4 2028</span>
                  <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4 text-gold-light" /> From AED 3.2M</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Thumbnail strip */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? 'border-gold-dark shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={img.src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="residences">Residences</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-6 space-y-8">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-5">
                      An Escape Within Reach
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Positioned upon the pristine shores of Dubai Islands, The Meriva Collection unveils a distinguished expression of beachfront living — one defined by balance and a quieter pace of life. Set within a well-connected island destination, the community places residents within easy reach of Dubai's cultural, commercial and lifestyle districts, while preserving the calm of the coast.
                      </p>
                      <p>
                        A premium collection of residences, signature penthouses and a refined coastal hotel come together within this masterfully conceived address, forming a complete seafront enclave of rare distinction. Refined architecture rises amid open landscapes, while thoughtfully composed homes are framed by serene horizons, ensuring the sea remains an enduring presence throughout.
                      </p>
                      <p>
                        Guided by Ellington's design-led philosophy and inspired by the concept of <strong className="text-foreground">The Flow</strong>, The Meriva Collection is envisioned as an escape within reach — regal in poise, naturally connected, and composed for long-term value and legacy living.
                      </p>
                    </div>
                  </motion.div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartment & Penthouse" },
                      { label: "Bedrooms", value: "1BR – Penthouse" },
                      { label: "Handover", value: "Q4 2028" },
                      { label: "Starting Price", value: "AED 3.2M" },
                    ].map((item) => (
                      <Card key={item.label} className="bg-muted/30 border-gold-light/20">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-semibold text-foreground text-sm">{item.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Investment Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Luxury Segment", "Branded Residences", "High Capital Appreciation", "Investor Hotspot"].map(tag => (
                          <Badge key={tag} className="bg-gold-dark/10 text-gold-dark border border-gold-dark/20">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Lifestyle</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Waterfront", "Beachfront", "Island Living", "Resort Style", "Skyline View"].map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* RESIDENCES */}
                <TabsContent value="residences" className="mt-6 space-y-6">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">Residence Types</h2>
                    <div className="space-y-3">
                      {unitTypes.map((unit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-5 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border border-gold-light/10"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                        >
                          <div>
                            <p className="font-semibold text-foreground">{unit.type}</p>
                            <p className="text-sm text-muted-foreground">{unit.size}</p>
                          </div>
                          <Badge className="bg-gold-dark text-white text-sm px-3 py-1 shrink-0">{unit.price}</Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 p-5 bg-gradient-to-br from-gold-dark/5 to-transparent rounded-xl border border-gold-light/20">
                      <p className="text-sm text-muted-foreground italic">
                        All residences feature floor-to-ceiling glazing, private balconies or terraces with panoramic sea views, open-plan living areas, premium coastal finishes, and fully fitted kitchens. Payment plan and unit-specific availability available on request.
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>

                {/* AMENITIES */}
                <TabsContent value="amenities" className="mt-6">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">Coastal Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {amenities.map(({ icon: Icon, label }) => (
                        <Card key={label} className="bg-muted/30 hover:bg-muted/50 transition-colors border-gold-light/15 group">
                          <CardContent className="p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gold-dark/10 flex items-center justify-center shrink-0 group-hover:bg-gold-dark/20 transition-colors">
                              <Icon className="w-5 h-5 text-gold-dark" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{label}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-4">Dubai Islands</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Dubai Islands is a master-planned waterfront destination redefining how the city meets the sea. Designed as a connected archipelago of residential, lifestyle and leisure communities, it brings together open coastlines, walkable neighbourhoods, and thoughtfully integrated infrastructure — positioned to support Dubai's long-term urban vision.
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Nearby Attractions</h3>
                    <div className="space-y-2">
                      {connectivity.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.07 }}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-gold-dark shrink-0" />
                            <span className="text-sm font-medium text-foreground">{item.destination}</span>
                          </div>
                          <Badge variant="outline" className="bg-gold-dark text-white border-0 text-xs">{item.time}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* GALLERY */}
                <TabsContent value="gallery" className="mt-6">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {images.map((img, i) => (
                        <motion.div
                          key={i}
                          className="rounded-xl overflow-hidden aspect-video cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setActiveImage(i)}
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* BROCHURE */}
                <TabsContent value="brochure" className="mt-6">
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">Project Documents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-muted/30 border-gold-light/20">
                        <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-gold-dark/10 flex items-center justify-center">
                            <Download className="w-7 h-7 text-gold-dark" />
                          </div>
                          <h3 className="font-semibold text-foreground">Project Brochure</h3>
                          <p className="text-sm text-muted-foreground">Full details, floor plans, specifications, and community features</p>
                          <Button onClick={() => handleCTA("Download Brochure")} className="mt-2 w-full">
                            <Download className="w-4 h-4 mr-2" /> Download Brochure
                          </Button>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/30 border-gold-light/20">
                        <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-gold-dark/10 flex items-center justify-center">
                            <FileText className="w-7 h-7 text-gold-dark" />
                          </div>
                          <h3 className="font-semibold text-foreground">Floor Plans</h3>
                          <p className="text-sm text-muted-foreground">Detailed layouts for all 1–4BR apartments and penthouse configurations</p>
                          <Button variant="outline" onClick={() => handleCTA("Download Floor Plan")} className="mt-2 w-full">
                            <FileText className="w-4 h-4 mr-2" /> Download Floor Plans
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <Card className="sticky top-24 border-gold-light/20">
                <CardContent className="p-6 space-y-5">
                  {/* Price */}
                  <div className="text-center pb-4 border-b border-border">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">AED 3,200,000</p>
                    <p className="text-xs text-muted-foreground mt-1">1BR – 4BR Apartments & Penthouses</p>
                  </div>

                  {/* Key specs */}
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Developer", value: "Ellington Properties" },
                      { label: "Location", value: "Dubai Islands" },
                      { label: "Type", value: "Apt & Penthouse" },
                      { label: "Status", value: "Newly Launched" },
                      { label: "Handover", value: "Q4 2028" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b border-border pb-2 last:border-0">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2 pt-2">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Request Details
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plans
                    </Button>
                    <Button variant="secondary" className="w-full" onClick={() => handleCTA("Book Consultation")}>
                      Book Consultation
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <div className="pt-4 border-t border-border text-xs text-muted-foreground leading-relaxed">
                    <strong>Disclaimer:</strong> This platform is a digital property discovery and marketing portal. It does not provide brokerage services. All inquiries are forwarded to the official developer sales team or their authorized partners.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MerivaCollectionProject;
