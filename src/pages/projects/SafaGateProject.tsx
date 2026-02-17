import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Building2, MapPin, Calendar, Download, Phone, MessageCircle, Sparkles, Check, Home, Dumbbell, Waves, Theater, Sun, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/safa-gate-hero.jpg";
import poolImage from "@/assets/projects/safa-gate-pool.jpg";
import interiorImage from "@/assets/projects/safa-gate-interior.jpg";
import gymImage from "@/assets/projects/safa-gate-gym.jpg";

const quickStats = [
  { label: "Starting Price", value: "AED 1.41M" },
  { label: "Location", value: "Sheikh Zayed Road" },
  { label: "Developer", value: "DAMAC Properties" },
  { label: "Handover", value: "Q4 2028" },
];

const unitTypes = [
  { type: "1 Bedroom", size: "750 - 900 sq.ft", price: "From AED 1.41M" },
  { type: "2 Bedroom", size: "1,200 - 1,500 sq.ft", price: "From AED 2.2M" },
  { type: "3 Bedroom", size: "1,800 - 2,200 sq.ft", price: "From AED 3.5M" },
  { type: "4 Bedroom", size: "2,500 - 3,000 sq.ft", price: "From AED 5.2M" },
];

const amenities = [
  { icon: Waves, name: "Aurora Pool", description: "Kaleidoscopic pool with vibrant color transformations" },
  { icon: Dumbbell, name: "Gravity Gym", description: "State-of-the-art workout zone with celestial views" },
  { icon: Sparkles, name: "Lumière Spa", description: "Premium wellness and relaxation sanctuary" },
  { icon: Theater, name: "Eclipse Theatre", description: "Private cinema with cutting-edge audiovisual" },
  { icon: Sun, name: "Open-Air Gym", description: "Outdoor fitness with panoramic skyline views" },
  { icon: Waves, name: "Zen Plunge Pool", description: "Serene plunge pool for relaxation" },
  { icon: Leaf, name: "Sky Gardens", description: "Innovative elevated green spaces throughout" },
  { icon: Home, name: "Panoramic Decks", description: "Observation decks with ever-changing Dubai vistas" },
];

const galleryImages = [
  { src: heroImage, alt: "Safa Gate Tower Exterior" },
  { src: poolImage, alt: "Aurora Rooftop Pool" },
  { src: interiorImage, alt: "Luxury Living Space" },
  { src: gymImage, alt: "Gravity Gym" },
];

const paymentPlan = [
  { phase: "Booking", percentage: "20%", description: "On booking" },
  { phase: "Construction", percentage: "50%", description: "During construction" },
  { phase: "Handover", percentage: "30%", description: "On handover" },
];

export default function SafaGateProject() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Safa Gate by DAMAC Properties"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          </div>
          
          <div className="relative container-luxury h-full flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="badge-tag">Park Views</span>
                <span className="badge-tag">Luxury Tower</span>
                <span className="badge-tag">City Living</span>
                <span className="badge-tag">Platinum District</span>
              </div>
              
              <h1 className="text-display text-white mb-4">
                Safa Gate
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                The Highpoint of Panoramic Living – Where sleek glass façade meets sky gardens 
                overlooking Dubai's iconic Safa Park and Sheikh Zayed Road.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="glass-card p-4">
                    <span className="text-xs text-white/60 block mb-1">{stat.label}</span>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="bg-card border-b border-border">
          <div className="container-luxury py-6">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="gold" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Floor Plan
              </Button>
              <Button variant="gold-outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Price Plan
              </Button>
              <Button variant="gold-outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
              <Button variant="gold-outline" size="lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-headline text-foreground mb-6">Project Overview</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Safa Gate redefines urban luxury in Dubai's Platinum District. Located on Sheikh Zayed Road, 
                    its sleek glass façade and soaring silhouette embody modern elegance. Innovative sky gardens 
                    and panoramic decks offer ever-changing vistas of Dubai's skyline, blending architectural 
                    ingenuity with natural serenity.
                  </p>
                  <p>
                    Overlooking the lush 64-hectare Safa Park, this landmark high-rise delivers premium 
                    apartments with uninterrupted park and city views. The tower's unique positioning 
                    provides residents with a rare combination of urban connectivity and green sanctuary living.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">AI Investment Insight</h4>
                      <p className="text-muted-foreground">
                        Safa Gate is ideal for premium urban investors seeking high-rise luxury with 
                        rare park-facing views. The Sheikh Zayed Road location commands premium rental 
                        yields and strong capital appreciation, with expected ROI of 8-10% annually.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Available Units</h3>
                <div className="space-y-4">
                  {unitTypes.map((unit) => (
                    <div key={unit.type} className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{unit.type}</span>
                        <span className="text-primary font-semibold">{unit.price}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{unit.size}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Payment Plan</h3>
                  <div className="space-y-3">
                    {paymentPlan.map((phase) => (
                      <div key={phase.phase} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-foreground">{phase.phase}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-primary">{phase.percentage}</span>
                          <span className="text-sm text-muted-foreground block">{phase.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-headline text-foreground mb-4">A World of Amenities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience celestial living with amenities designed to inspire and rejuvenate
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                >
                  <amenity.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container-luxury">
            <h2 className="text-headline text-foreground mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.alt}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-headline text-foreground mb-6">Prime Location</h2>
                <p className="text-muted-foreground mb-8">
                  Positioned on Sheikh Zayed Road in Dubai's Platinum District, Safa Gate offers 
                  unparalleled access to the city's major business hubs, shopping destinations, 
                  and lifestyle attractions while overlooking the serene Safa Park.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Sheikh Zayed Road</span>
                      <span className="text-sm text-muted-foreground">Dubai's main arterial highway</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Safa Park Views</span>
                      <span className="text-sm text-muted-foreground">64-hectare urban oasis at your doorstep</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Platinum District</span>
                      <span className="text-sm text-muted-foreground">Premium address with strong appreciation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Nearby Attractions</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Safa Park</span>
                    <span className="font-semibold text-foreground">Adjacent</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Dubai Mall</span>
                    <span className="font-semibold text-foreground">8 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">DIFC</span>
                    <span className="font-semibold text-foreground">5 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Dubai Marina</span>
                    <span className="font-semibold text-foreground">12 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">DXB Airport</span>
                    <span className="font-semibold text-foreground">15 mins</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-16 bg-background">
          <div className="container-luxury">
            <h2 className="text-headline text-foreground mb-8 text-center">Investment Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">8-10% ROI</h3>
                <p className="text-muted-foreground">Expected annual returns in prime location</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">DAMAC Quality</h3>
                <p className="text-muted-foreground">Trusted developer with 20+ years legacy</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Payment</h3>
                <p className="text-muted-foreground">20/50/30 payment structure available</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container-luxury text-center">
            <h2 className="text-headline text-foreground mb-4">Ready to Invest in Safa Gate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure your premium residence overlooking Safa Park. Book a consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="gold-outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
