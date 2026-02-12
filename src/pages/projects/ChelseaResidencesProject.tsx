import { motion } from "framer-motion";
import { ArrowRight, Download, Phone, MessageCircle, MapPin, Building2, Calendar, Percent, BadgeCheck, TrendingUp, Star, Sparkles, Users, Waves, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/projects/chelsea-residences-hero.jpg";
import poolImage from "@/assets/projects/chelsea-residences-pool.jpg";
import interiorImage from "@/assets/projects/chelsea-residences-interior.jpg";
import gymImage from "@/assets/projects/chelsea-residences-gym.jpg";

const projectImages = [
  { src: heroImage, alt: "Chelsea Residences Tower" },
  { src: poolImage, alt: "Infinity Pool with Sea Views" },
  { src: interiorImage, alt: "Luxury Interior Living" },
  { src: gymImage, alt: "Premium Fitness Center" },
];

const amenities = [
  { icon: Waves, name: "Chelsea Lion Beach", description: "World's first blue sand beach inspired by Chelsea FC" },
  { icon: Trophy, name: "Football Simulation Room", description: "Interactive football experience center" },
  { icon: Users, name: "Athlete Performance Centre", description: "Chelsea-branded training facilities" },
  { icon: Heart, name: "Serenity Spa", description: "Premium wellness and relaxation" },
  { icon: Star, name: "Starlit Wellness Centre", description: "Holistic wellness programs" },
  { icon: Waves, name: "Rain Therapy", description: "Unique aquatic wellness experience" },
];

const highlights = [
  { label: "Starting Price", value: "AED 2.92M" },
  { label: "Payment Plan", value: "1% Monthly" },
  { label: "Total Units", value: "1,400+" },
  { label: "Expected ROI", value: "8-10%" },
];

const unitTypes = [
  { type: "1 Bedroom", size: "From 750 sq.ft", price: "From AED 2.92M" },
  { type: "2 Bedroom", size: "From 1,100 sq.ft", price: "From AED 4.5M" },
  { type: "3 Bedroom", size: "From 1,600 sq.ft", price: "From AED 6.8M" },
  { type: "Penthouse", size: "From 3,000 sq.ft", price: "Price on Request" },
];

export default function ChelseaResidencesProject() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px]">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Chelsea Residences"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          </div>
          
          <div className="relative container-luxury h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-gold">Featured Project</span>
                <span className="badge-tag">Chelsea FC Branded</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Chelsea Residences
              </h1>
              <p className="text-xl text-white/90 mb-2">
                World's First Football-Branded Residences
              </p>
              <p className="text-lg text-white/70 mb-8">
                Dubai Maritime City • In Partnership with Chelsea Football Club
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {highlights.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="text-white/60 text-xs block">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button variant="gold-outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 bg-card">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">About the Project</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Where Legacy Lives
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In a landmark partnership with Chelsea Football Club, DAMAC presents Dubai's first football-branded residences. Located in the heart of Dubai Maritime City, this iconic project features over 1,400 residences, offering sweeping sea views, bold design, and a lifestyle infused with Chelsea's legacy.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Chelsea Residences is more than just a home—it's a tribute to passion, prestige, and performance. From exclusive Chelsea-themed amenities to refined interiors, every detail reflects the spirit of champions.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Developer</span>
                      <span className="text-foreground font-medium">DAMAC Properties</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Location</span>
                      <span className="text-foreground font-medium">Dubai Maritime City</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Handover</span>
                      <span className="text-foreground font-medium">Q4 2028</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Percent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Payment</span>
                      <span className="text-foreground font-medium">1% Monthly Plan</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {projectImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`rounded-xl overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unit Types */}
        <section className="py-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Available Units</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Select Your Dream Home
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {unitTypes.map((unit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-luxury p-6 text-center hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{unit.type}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{unit.size}</p>
                  <p className="text-primary font-semibold">{unit.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 bg-card">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">World-Class Amenities</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Chelsea-Branded Lifestyle
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-luxury p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{amenity.name}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Prime Location</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Dubai Maritime City
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Positioned in the heart of Dubai Maritime City, Chelsea Residences offers unparalleled connectivity and sweeping waterfront views. This emerging lifestyle destination puts you at the crossroads of luxury living and urban convenience.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">15 minutes to Downtown Dubai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">10 minutes to Dubai Mall</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">20 minutes to DXB Airport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Direct waterfront access</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <img 
                  src={poolImage}
                  alt="Location Views"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Insight */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">AI Investment Insight</span>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground font-display leading-relaxed mb-6">
                "Chelsea Residences represents a premium branded investment opportunity with strong capital growth potential. The world's first football-branded residence concept, combined with DAMAC's developer credibility and Dubai Maritime City's waterfront location, positions this project for 8-10% expected ROI."
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">High Capital Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Branded Premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">DAMAC Credibility</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-charcoal">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Own at Chelsea Residences?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Connect with our investment consultants for exclusive floor plans, payment plans, and early booking benefits.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="gold" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Floor Plan
                </Button>
                <Button variant="gold" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Price Plan
                </Button>
                <Button variant="gold-outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
                <Button variant="gold-outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                More DAMAC Projects
              </h2>
              <p className="text-muted-foreground">Explore other premium DAMAC developments</p>
            </motion.div>
            
            <div className="flex justify-center gap-4">
              <Button variant="gold-outline" asChild>
                <Link to="/projects/damac/damac-islands-2">
                  DAMAC Islands 2
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="gold-outline" asChild>
                <Link to="/projects/damac/damac-district">
                  DAMAC District
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="gold-outline" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
