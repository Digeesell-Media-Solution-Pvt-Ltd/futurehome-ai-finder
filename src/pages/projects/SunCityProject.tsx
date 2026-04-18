import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Calendar, TrendingUp, BadgeCheck, Download, Send,
  Building2, Sparkles, Sun, TreePine, Waves, Home, Dumbbell, BookOpen, Mountain, Tent
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

import heroImage from "@/assets/projects/sun-city-hero.jpg";
import fountainImage from "@/assets/projects/sun-city-fountain.jpg";
import gymImage from "@/assets/projects/sun-city-gym.jpg";
import interiorImage from "@/assets/projects/sun-city-interior.jpg";
import { SeoHead } from "@/components/seo/SeoHead";

const projectData = {
  name: "DAMAC Sun City",
  developer: "DAMAC Properties",
  location: "Dubai South",
  type: "Villas & Townhouses",
  units: "770 Units",
  masterCommunity: "2.7 Million Sq.Ft.",
  handover: "2028",
  roi: "7-9%",
  paymentPlan: "1% Monthly",
  price: "From AED 2.5M",
  community: "Sun City Master Community",
  
  overview: `This modern wellness community seamlessly blends luxury and holistic living, harnessing the revitalising power of the sun to create a peaceful sanctuary. The townhouses feature spacious balconies and terraces, encouraging you to embrace outdoor living.

Designed with wellness-inspired family living in mind, the serene environment promotes health and happiness. Every corner is thoughtfully crafted to nurture your body, mind, and soul, offering a lifestyle that prioritises well-being and comfort beyond just a place to live.

DAMAC Sun City is a vibrant wellness-inspired community where luxury and everyday wellbeing come together. Enjoy thoughtfully designed homes, natural surroundings, and amenities that support a balanced lifestyle.`,

  highlights: [
    "770 Villas & Townhouses on 2.7M Sq.Ft.",
    "Wellness-Inspired Family Living",
    "Spacious Balconies & Terraces",
    "Forest Hiking Trails & Nature Paths",
    "Outdoor Camping & Stargazing Areas",
    "1% Monthly Payment Plan"
  ],

  amenities: [
    { icon: Waves, name: "Grand Water Fountain", description: "Captivating display of water and light for relaxation" },
    { icon: BookOpen, name: "Library & Co-Working", description: "Modern workspace with tranquil reading area" },
    { icon: TreePine, name: "Wild Garden Amphitheatre", description: "Open-air venue for artistic expression" },
    { icon: Mountain, name: "Forest Hiking Trails", description: "Nature trails with suspended bridges" },
    { icon: Dumbbell, name: "Sunrise Gym", description: "Outdoor fitness with morning light" },
    { icon: Sun, name: "Outdoor Sauna Cabins", description: "Heat-infused retreat in nature" },
    { icon: Tent, name: "Outdoor Camping Area", description: "Family stargazing and camping experiences" },
    { icon: Home, name: "Private Terraces", description: "Spacious outdoor living spaces" }
  ],

  connectivity: [
    { time: "5 min", destination: "Al Maktoum International Airport" },
    { time: "10 min", destination: "Expo City Dubai" },
    { time: "15 min", destination: "Dubai Parks & Resorts" },
    { time: "20 min", destination: "Downtown Dubai" },
    { time: "25 min", destination: "Dubai Marina" }
  ],

  gallery: [
    { src: heroImage, alt: "DAMAC Sun City Master Community" },
    { src: fountainImage, alt: "Grand Water Fountain" },
    { src: gymImage, alt: "Sunrise Outdoor Gym" },
    { src: interiorImage, alt: "Townhouse Interior" }
  ]
};

export default function SunCityProject() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <div className="min-h-screen bg-background">      <SeoHead
        title="Sun City by DAMAC | Off-Plan Dubai"
        description="Sun City by DAMAC Properties — sun-drenched off-plan community in Dubai with resort-style living, family amenities, and flexible payment."
        canonicalPath="/projects/damac/sun-city"
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img src={heroImage} alt="DAMAC Sun City" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container-luxury">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Projects</Link>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="badge-tag flex items-center gap-1"><Sun className="w-3 h-3" />Master Community</span>
                  <span className="badge-tag">Dubai South</span>
                  <span className="badge-tag">DAMAC</span>
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

        {/* Key Info Bar */}
        <section className="bg-card border-b border-border py-6">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Starting From</p><p className="text-xl font-semibold text-foreground">{projectData.price}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Unit Types</p><p className="text-xl font-semibold text-foreground">{projectData.type}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Community</p><p className="text-xl font-semibold text-primary">{projectData.community}</p></div>
              <div className="text-center"><p className="text-sm text-muted-foreground mb-1">Handover</p><p className="text-xl font-semibold text-foreground">{projectData.handover}</p></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-4">A City Within a City</h2>
                  <div className="prose prose-lg text-muted-foreground">{projectData.overview.split('\n\n').map((p, i) => (<p key={i} className="mb-4">{p}</p>))}</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Key Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">{projectData.highlights.map((h, i) => (<div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"><Sun className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-foreground">{h}</span></div>))}</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">{projectData.gallery.map((img, i) => (<div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group"><img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"><p className="absolute bottom-3 left-3 text-white text-sm">{img.alt}</p></div></div>))}</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-4">{projectData.amenities.map((a, i) => (<div key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><a.icon className="w-6 h-6 text-primary" /></div><div><h3 className="font-semibold text-foreground mb-1">{a.name}</h3><p className="text-sm text-muted-foreground">{a.description}</p></div></div>))}</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-display text-foreground mb-6">Location</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground mb-6">DAMAC Sun City is located in Dubai South, close to Al Maktoum International Airport and Expo City.</p>
                    <div className="space-y-3">{projectData.connectivity.map((item, i) => (<div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0"><span className="text-foreground">{item.destination}</span><span className="text-primary font-semibold">{item.time}</span></div>))}</div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"><Sparkles className="w-6 h-6 text-primary" /></div>
                    <div><h3 className="text-lg font-semibold text-foreground mb-2">AI Investment Insight</h3><p className="text-muted-foreground">DAMAC Sun City offers strong value in Dubai South, one of the emirate's fastest-developing areas near Al Maktoum Airport. The master-community scale and DAMAC's track record make this ideal for long-term capital growth.</p></div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interested in Sun City?</h3>
                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Book a Consultation" })}><Send className="w-4 h-4 mr-2" />Book a Consultation</Button>
                      <Button variant="gold-outline" className="w-full" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Request Details" })}>Request Details</Button>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Downloads</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Floor Plan" })}><Download className="w-4 h-4 mr-2" />Download Floor Plans</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Get Pricing" })}><Download className="w-4 h-4 mr-2" />Download Price Plan</Button>
                      <Button variant="outline" className="w-full justify-start" onClick={() => openLeadCapture({ projectName: projectData.name, ctaType: "Download Brochure" })}><Download className="w-4 h-4 mr-2" />Download Brochure</Button>
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
