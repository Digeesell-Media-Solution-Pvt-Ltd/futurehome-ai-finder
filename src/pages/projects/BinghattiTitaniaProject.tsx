import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Calendar, TrendingUp, BadgeCheck, Download, Send,
  Building2, Sparkles, Dumbbell, Car, Waves, Users, Gem, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/binghatti-titania-hero.jpg";
import interiorImage from "@/assets/projects/binghatti-titania-interior.jpg";
import poolImage from "@/assets/projects/binghatti-titania-pool.jpg";
import lobbyImage from "@/assets/projects/binghatti-titania-lobby.jpg";

const projectData = {
  name: "Binghatti Titania",
  developer: "Binghatti Developers",
  location: "Majan, Dubailand",
  type: "Modern Tower",
  units: "Studio, 1 & 2 Bedroom",
  handover: "2027",
  price: "AED 680K",
  roi: "8-10%",
  
  overview: `Binghatti Titania stands as a statement of architectural brilliance in Majan, featuring a distinctive circular façade that sets it apart from conventional developments. This premium tower combines contemporary design with smart living solutions.

Every residence is crafted with attention to detail, featuring intelligent layouts that maximize space and natural light. The building's unique curved architecture creates panoramic views from every angle, making each home feel truly exceptional.

Perfect for first-time buyers and high-yield landlords, Titania offers an attractive entry point into Dubai's premium property market with strong rental potential and capital appreciation prospects.`,

  highlights: [
    "Distinctive Circular Façade",
    "Studio, 1 & 2 BR Options",
    "Smart Home Features",
    "Premium Finishing",
    "City-Wide Connectivity",
    "High Rental Yields"
  ],

  amenities: [
    { icon: Waves, name: "Infinity Pool", description: "Rooftop pool with views" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym" },
    { icon: Gem, name: "Terrace Deck", description: "Landscaped outdoor spaces" },
    { icon: Users, name: "Concierge", description: "24/7 concierge services" },
    { icon: Car, name: "Covered Parking", description: "Secure basement parking" },
    { icon: Zap, name: "Smart Living", description: "Home automation ready" }
  ],

  connectivity: [
    { time: "5 min", destination: "Arabian Ranches" },
    { time: "10 min", destination: "Dubai Autodrome" },
    { time: "12 min", destination: "Motor City" },
    { time: "15 min", destination: "Mall of the Emirates" },
    { time: "20 min", destination: "Dubai Marina" },
    { time: "25 min", destination: "Downtown Dubai" },
    { time: "30 min", destination: "Dubai International Airport" }
  ],

  gallery: [
    { src: heroImage, alt: "Binghatti Titania Tower" },
    { src: interiorImage, alt: "Premium Interior" },
    { src: poolImage, alt: "Rooftop Pool" },
    { src: lobbyImage, alt: "Grand Lobby" }
  ]
};

export default function BinghattiTitaniaProject() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img src={heroImage} alt={projectData.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container-luxury">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Projects</Link>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge-tag flex items-center gap-1"><Gem className="w-3 h-3" />Premium Living</span>
                  <span className="badge-tag">New Launch</span>
                  <span className="badge-tag">Majan</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">{projectData.name}</h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2"><Building2 className="w-5 h-5" /><span>{projectData.developer}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /><span>{projectData.location}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /><span>Handover: {projectData.handover}</span></div>
                  <div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /><span className="text-primary font-semibold">{projectData.roi} Expected ROI</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-card border-b border-border py-6">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Starting From</p><p className="text-xl font-semibold text-foreground">{projectData.price}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Unit Types</p><p className="text-xl font-semibold text-foreground">{projectData.units}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Expected ROI</p><p className="text-xl font-semibold text-primary">{projectData.roi}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Handover</p><p className="text-xl font-semibold text-foreground">{projectData.handover}</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-4">Elevated Comfort in Majan</h2>
                  <div className="prose prose-lg text-muted-foreground">{projectData.overview.split('\n\n').map((p, i) => (<p key={i} className="mb-4">{p}</p>))}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Key Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">{projectData.highlights.map((h, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"><Gem className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-foreground">{h}</span></div>))}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">{projectData.gallery.map((img, i) => (<div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group"><img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"><p className="absolute bottom-3 left-3 text-white text-sm">{img.alt}</p></div></div>))}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Premium Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">{projectData.amenities.map((a, i) => (<div key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><a.icon className="w-6 h-6 text-primary" /></div><div><h3 className="font-semibold text-foreground mb-1">{a.name}</h3><p className="text-sm text-muted-foreground">{a.description}</p></div></div>))}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Location & Connectivity</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground mb-6">Titania is strategically located in Majan, offering excellent connectivity to major destinations across Dubai.</p>
                    <div className="space-y-3">{projectData.connectivity.map((item, i) => (<div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0"><span className="text-foreground">{item.destination}</span><span className="text-primary font-semibold">{item.time}</span></div>))}</div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"><Sparkles className="w-6 h-6 text-primary" /></div>
                    <div><h3 className="text-lg font-semibold text-foreground mb-2">AI Investment Insight</h3><p className="text-muted-foreground">Binghatti Titania is perfect for first-time buyers and high-yield landlords seeking affordable entry into Dubai's premium property market.</p></div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Titania?</h3>
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}><Send className="w-4 h-4 mr-2" />Book a Consultation</Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>Request Details</Button>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Floor Plan</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}><Download className="w-4 h-4 mr-2" />Price Plan</Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
