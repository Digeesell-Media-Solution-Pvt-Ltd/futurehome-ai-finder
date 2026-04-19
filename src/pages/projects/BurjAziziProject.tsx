import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Calendar, TrendingUp, BadgeCheck, Download, Send,
  Building2, Sparkles, Mountain, Utensils, Eye, Users, Gem, Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/burj-azizi-hero.jpg";
import loungeImage from "@/assets/projects/burj-azizi-lounge.jpg";
import interiorImage from "@/assets/projects/burj-azizi-interior.jpg";
import lobbyImage from "@/assets/projects/burj-azizi-lobby.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const projectData = {
  name: "Burj Azizi",
  developer: "Azizi Developments",
  location: "Sheikh Zayed Road, Dubai",
  handover: "2025",
  roi: "7.5%",
  height: "381m",
  floors: 83,
  price: "AED 1.2M",
  overview: `Burj Azizi is the world's tallest residential tower, offering unparalleled luxury and breathtaking views.
  
  This iconic skyscraper redefines Dubai's skyline with its innovative design and world-class amenities.`,
  worldRecords: [
    { record: "Tallest Residential Tower", height: "381 meters" },
    { record: "Highest Outdoor Observation Deck", height: "360 meters" },
  ],
  gallery: [
    { src: loungeImage, alt: "Sky Lounge" },
    { src: interiorImage, alt: "Luxury Interior" },
    { src: lobbyImage, alt: "Grand Lobby" },
  ],
  amenities: [
    { name: "Infinity Pool", icon: Utensils, description: "Enjoy panoramic views while swimming." },
    { name: "Fitness Center", icon: Eye, description: "State-of-the-art gym facilities." },
    { name: "Sky Garden", icon: Mountain, description: "Lush greenery at high altitude." },
  ],
  connectivity: [
    { destination: "Downtown Dubai", time: "10 mins" },
    { destination: "Dubai International Airport", time: "20 mins" },
    { destination: "Dubai Marina", time: "15 mins" },
  ],
};

export default function BurjAziziProject() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Burj Azizi | Off-Plan Luxury Tower Dubai"
        description="Burj Azizi by Azizi Developments — iconic luxury off-plan tower in Dubai featuring sky gardens, an infinity pool, and premium residences."
        canonicalPath="/projects/azizi/burj-azizi"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img src={heroImage} alt={projectData.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container-luxury">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge-tag flex items-center gap-1 bg-primary/30 border-primary/50">
                    <Crown className="w-3 h-3" />
                    World's Tallest Residential
                  </span>
                  <span className="badge-tag">Iconic</span>
                  <span className="badge-tag">Sheikh Zayed Road</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4">{projectData.name}</h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2"><Building2 className="w-5 h-5" /><span>{projectData.developer}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /><span>{projectData.location}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /><span>Handover: {projectData.handover}</span></div>
                  <div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /><span className="text-primary font-semibold">{projectData.roi}</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-card border-b border-border py-6">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Tower Height</p><p className="text-xl font-semibold text-primary">{projectData.height}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Total Floors</p><p className="text-xl font-semibold text-foreground">{projectData.floors}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Starting From</p><p className="text-xl font-semibold text-foreground">{projectData.price}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Handover</p><p className="text-xl font-semibold text-foreground">{projectData.handover}</p></div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-4">Aiming Beyond the Sky</h2>
                  <div className="prose prose-lg text-muted-foreground">{projectData.overview.split('\n\n').map((p, i) => (<p key={i} className="mb-4">{p}</p>))}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Breaking World Records</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectData.worldRecords.map((record, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg">
                        <span className="text-foreground font-medium">{record.record}</span>
                        <span className="text-primary font-bold">{record.height}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {projectData.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="absolute bottom-3 left-3 text-white text-sm">{img.alt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">World-Class Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectData.amenities.map((a, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <a.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{a.name}</h3>
                          <p className="text-sm text-muted-foreground">{a.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Prime Central Location</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground mb-6">Burj Azizi is perfectly positioned on Sheikh Zayed Road, as the only freehold property on this iconic strip.</p>
                    <div className="space-y-3">
                      {projectData.connectivity.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-foreground">{item.destination}</span>
                          <span className="text-primary font-semibold">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">AI Investment Insight</h3>
                      <p className="text-muted-foreground">Burj Azizi is ideal for international luxury buyers seeking rare, trophy assets with long-term value preservation. Expect strong capital appreciation driven by Dubai's status as a global wealth hub.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Burj Azizi?</h3>
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}>
                        <Send className="w-4 h-4 mr-2" />
                        Book a Consultation
                      </Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>
                        Request Details
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Floor Plans
                      </Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Price Plan
                      </Button>
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
