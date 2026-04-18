import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Building2, MapPin, Calendar, Download, Phone, MessageCircle, Sparkles, Check, Waves, Dumbbell, TreePine, Utensils, Music, Baby, Anchor, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/projects/riverside-views-hero.jpg";
import poolImage from "@/assets/projects/riverside-views-pool.jpg";
import interiorImage from "@/assets/projects/riverside-views-interior.jpg";
import promenadeImage from "@/assets/projects/riverside-views-promenade.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const quickStats = [
  { label: "Starting Price", value: "AED 1,800/month*" },
  { label: "Location", value: "DAMAC Riverside" },
  { label: "Developer", value: "DAMAC Properties" },
  { label: "Handover", value: "Q1 2029" },
];

const unitTypes = [
  { type: "Studio", size: "400 - 500 sq.ft", price: "From AED 650K" },
  { type: "1 Bedroom", size: "650 - 850 sq.ft", price: "From AED 950K" },
  { type: "2 Bedroom", size: "1,100 - 1,400 sq.ft", price: "From AED 1.5M" },
  { type: "3 Bedroom", size: "1,600 - 2,000 sq.ft", price: "From AED 2.2M" },
];

const amenities = [
  { icon: Waves, name: "Malibu Cove", description: "Beach-inspired waterfront relaxation zone" },
  { icon: Leaf, name: "Essential Oils Lake", description: "Aromatherapy wellness experience by the water" },
  { icon: Sparkles, name: "Peace Room", description: "Meditation and tranquility sanctuary" },
  { icon: Anchor, name: "Floating Sports", description: "Water-based sports and activities" },
  { icon: Dumbbell, name: "Calisthenics Stations", description: "Outdoor fitness and exercise areas" },
  { icon: Utensils, name: "Island Restaurant", description: "Waterfront dining experiences" },
  { icon: Baby, name: "Adventure Land", description: "Family-friendly entertainment zones" },
  { icon: Music, name: "Floating Stage", description: "Entertainment venue on the water" },
];

const galleryImages = [
  { src: heroImage, alt: "DAMAC Riverside Views Community" },
  { src: poolImage, alt: "Waterfront Pool" },
  { src: interiorImage, alt: "Modern Interior" },
  { src: promenadeImage, alt: "Riverside Promenade" },
];

const paymentPlan = [
  { phase: "Booking", percentage: "20%", description: "On booking" },
  { phase: "Construction", percentage: "50%", description: "During construction (1% monthly)" },
  { phase: "Handover", percentage: "30%", description: "On handover" },
];

export default function RiversideViewsProject() {
  const { openLeadCapture } = useLeadCapture();
  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Riverside Views by DAMAC | Off-Plan Dubai"
        description="Riverside Views by DAMAC Properties — off-plan waterfront residences in Dubai with scenic creek views and premium resort-style amenities."
        canonicalPath="/projects/damac/riverside-views"
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px]">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="DAMAC Riverside Views"
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
                <span className="badge-tag">Riverside</span>
                <span className="badge-tag">Waterfront</span>
                <span className="badge-tag">Community Living</span>
                <span className="badge-tag">Azure 2</span>
              </div>
              
              <h1 className="text-display text-white mb-4">
                DAMAC Riverside Views
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Dubai's First Riverside Community – Experience luxurious waterfront living where 
                urban energy meets serene tranquillity, inspired by nature's blue hues.
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
                    Experience luxurious waterfront living at Azure 2, a vibrant cluster within DAMAC Riverside Views, 
                    where urban energy meets serene tranquillity. Discover a wellness-inspired sanctuary that 
                    harmoniously blends nature with community life, offering a lifestyle defined by rejuvenation, 
                    connection, and world-class experiences.
                  </p>
                  <p>
                    As Dubai's first riverside community, DAMAC Riverside offers over 15 exclusive amenities 
                    designed around the concept of water-inspired living. The development features modern 
                    residences overlooking serene waterways, creating a unique living experience that combines 
                    the best of nature and luxury.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">AI Investment Insight</h4>
                      <p className="text-muted-foreground">
                        DAMAC Riverside Views offers strong rental and lifestyle investment appeal. As Dubai's 
                        first riverside community, it commands premium positioning with expected ROI of 7-9% 
                        annually. Ideal for investors seeking waterfront living with community-focused amenities.
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
                15+ exclusive waterfront amenities designed for wellness-inspired living
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
                  DAMAC Riverside is strategically located within Dubai Investment Park, offering 
                  easy access to major highways and key destinations while maintaining the serenity 
                  of waterfront living.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">DAMAC Riverside</span>
                      <span className="text-sm text-muted-foreground">Dubai Investment Park</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">First Riverside Community</span>
                      <span className="text-sm text-muted-foreground">Unique waterfront positioning in Dubai</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Growing Community</span>
                      <span className="text-sm text-muted-foreground">Strong appreciation potential</span>
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
                <h3 className="text-xl font-semibold text-foreground mb-6">Nearby Destinations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Expo City Dubai</span>
                    <span className="font-semibold text-foreground">10 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Al Maktoum Airport</span>
                    <span className="font-semibold text-foreground">15 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Dubai Marina</span>
                    <span className="font-semibold text-foreground">20 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Mall of the Emirates</span>
                    <span className="font-semibold text-foreground">25 mins</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Downtown Dubai</span>
                    <span className="font-semibold text-foreground">30 mins</span>
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
                <h3 className="text-xl font-semibold text-foreground mb-2">7-9% ROI</h3>
                <p className="text-muted-foreground">Expected annual returns in emerging community</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">First of Its Kind</h3>
                <p className="text-muted-foreground">Dubai's first riverside community</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">1% Monthly</h3>
                <p className="text-muted-foreground">Flexible payment plan available</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container-luxury text-center">
            <h2 className="text-headline text-foreground mb-4">Ready to Invest in Riverside Living?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure your waterfront residence in Dubai's first riverside community. Book a consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gold" size="lg" onClick={() => openLeadCapture({ projectName: "Riverside Views", ctaType: "Book a Consultation" })}>
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="gold-outline" size="lg" onClick={() => openLeadCapture({ projectName: "Riverside Views", ctaType: "Download Brochure" })}>
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
