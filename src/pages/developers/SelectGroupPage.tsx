import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { motion } from "framer-motion";
import {
  Building2, MapPin, TrendingUp, Award, Users, Globe,
  ArrowRight, Phone, Star, CheckCircle, Gem, Calendar
} from "lucide-react";

import heroImg from "@/assets/developers/select-group-hero.jpg";
import peninsulaHeroImg from "@/assets/projects/peninsula-four-hero.jpg";
import artistryOneHeroImg from "@/assets/projects/artistry-one-hero.jpg";
import artistryTwoHeroImg from "@/assets/projects/artistry-two-hero.jpg";
import jumeirahLivingHeroImg from "@/assets/projects/jumeirah-living-hero.jpg";

const stats = [
  { value: "AED 20B+", label: "Gross Development Value", icon: TrendingUp },
  { value: "20+", label: "Years of Excellence", icon: Award },
  { value: "10,000+", label: "Homes Delivered", icon: Building2 },
  { value: "6", label: "Countries of Operation", icon: Globe },
];

const highlights = [
  "Pioneering waterfront developments across Dubai Marina & Business Bay",
  "Strategic partnerships with globally recognised brands like Jumeirah Hotels & Resorts",
  "Award-winning design ethos blending architecture and lifestyle",
  "Transparent payment plans and consistent on-time delivery record",
  "Integrated communities with retail, F&B and world-class amenities",
  "Over AED 20 billion in gross development value across all markets",
];

const projects = [
  {
    name: "Jumeirah Living Business Bay",
    area: "Business Bay · Dubai Water Canal",
    type: "Branded Residences",
    bedrooms: "2BR – 5BR+ Penthouse",
    price: "AED 3.8M",
    handover: "Q4 2025",
    tags: ["Branded Residences", "Waterfront", "Luxury Segment"],
    image: jumeirahLivingHeroImg,
    slug: "/projects/select-group/jumeirah-living-business-bay",
    featured: true,
    badge: "Flagship",
  },
  {
    name: "Peninsula Four – The Plaza",
    area: "Business Bay · Peninsula",
    type: "Canal-Side Residences",
    bedrooms: "Studio – 4BR Penthouse",
    price: "AED 1.1M",
    handover: "Q2 2026",
    tags: ["High ROI", "Waterfront", "Investor Hotspot"],
    image: peninsulaHeroImg,
    slug: "/projects/select-group/peninsula-four-the-plaza",
    featured: false,
    badge: "Under Construction",
  },
  {
    name: "Artistry One Residences",
    area: "Dubai Design District (d3)",
    type: "Design-Led Apartments",
    bedrooms: "1BR – 4BR Duplex Penthouse",
    price: "AED 1.5M",
    handover: "Q4 2029",
    tags: ["Affordable Entry", "High ROI", "Popular Location"],
    image: artistryOneHeroImg,
    slug: "/projects/select-group/artistry-one-residences",
    featured: false,
    badge: "New Launch",
  },
  {
    name: "Artistry Two Residences",
    area: "Dubai Design District (d3)",
    type: "Design-Led Apartments",
    bedrooms: "1BR – 4BR Duplex Penthouse",
    price: "AED 1.5M",
    handover: "Q4 2029",
    tags: ["Rental Income Focused", "Popular Location", "Affordable Entry"],
    image: artistryTwoHeroImg,
    slug: "/projects/select-group/artistry-two-residences",
    featured: false,
    badge: "New Launch",
  },
];

export default function SelectGroupPage() {
  const { openLeadCapture } = useLeadCapture();

  return (
    <>
      <Helmet>
        <title>Select Group | Premium UAE Real Estate Developer | Dubai Projects</title>
        <meta name="description" content="Explore Select Group's portfolio of premium Dubai developments — Peninsula Four The Plaza, Artistry One & Two in d3, and Jumeirah Living Business Bay. AED 20B+ GDV." />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/developers/select-group" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
          <img
            src={heroImg}
            alt="Select Group – Dubai's Premier Real Estate Developer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Developer badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-5">
                <Gem className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Developer</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">
                Select Group
              </h1>
              <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                Crafting extraordinary communities across Dubai and beyond — where architecture meets aspiration.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() => openLeadCapture({ ctaType: "Developer Enquiry – Select Group" })}
                  className="gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Enquire Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects" className="gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── STATS BAR ────────────────────────────────────────── */}
        <section className="border-y border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="text-primary border-primary/30 mb-4">About the Developer</Badge>
              <h2 className="font-display text-4xl font-bold text-foreground mb-5 leading-tight">
                Building Dubai's <span className="text-primary">Most Coveted</span> Addresses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Select Group is one of the region's most respected real estate developers, with over two decades of experience delivering exceptional residential and mixed-use communities. Headquartered in Dubai, the group operates across six countries with a portfolio exceeding AED 20 billion in gross development value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Renowned for their commitment to architectural excellence, Select Group projects consistently outperform market benchmarks — attracting discerning end-users and investors alike. Their flagship partnership with Jumeirah Hotels & Resorts for Jumeirah Living Business Bay underscores a bold vision for branded luxury living along Dubai's iconic Water Canal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PROJECTS GRID ────────────────────────────────────── */}
        <section id="projects" className="bg-muted/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="text-primary border-primary/30 mb-4">Current Portfolio</Badge>
              <h2 className="font-display text-4xl font-bold text-foreground mb-3">
                Active Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four landmark developments redefining premium living across Business Bay and Dubai Design District.
              </p>
            </motion.div>

            {/* Featured project — full width */}
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Link to={project.slug} className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury transition-shadow">
                  <div className="relative h-[420px] md:h-[500px]">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-primary text-primary-foreground">{project.badge}</Badge>
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map(t => (
                          <Badge key={t} variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs">{t}</Badge>
                        ))}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{project.area}</span>
                        <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" />{project.bedrooms}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Handover {project.handover}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest">Starting From</p>
                          <p className="text-white font-bold text-2xl">{project.price}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold group-hover:bg-primary/90 transition-colors">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Remaining 3 projects — grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={project.slug} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-luxury transition-shadow h-full">
                    <Card className="border-0 overflow-hidden h-full">
                      <div className="relative h-52">
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="text-xs bg-primary text-primary-foreground">{project.badge}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tags.slice(0, 2).map(t => (
                            <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                          ))}
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                          <MapPin className="w-3 h-3" />{project.area}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                          <Building2 className="w-3 h-3" />{project.bedrooms}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-muted-foreground text-[10px] uppercase tracking-widest">From</p>
                            <p className="font-bold text-primary text-base">{project.price}</p>
                          </div>
                          <div className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                            View <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY INVEST ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">Investment Case</Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Why Invest with Select Group?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Consistent Capital Growth", desc: "Select Group projects in Business Bay have averaged 12–18% capital appreciation annually since 2020." },
              { icon: Users, title: "Proven Delivery Track Record", desc: "20+ years and thousands of units delivered — Select Group has never missed a handover by more than one quarter." },
              { icon: Award, title: "Branded Residences Premium", desc: "Jumeirah Living Business Bay commands a 25–35% premium over comparable non-branded assets in the same corridor." },
              { icon: Globe, title: "Global Investor Base", desc: "Select Group projects attract buyers from 50+ nationalities, ensuring deep liquidity and resale demand." },
              { icon: Gem, title: "Flexible Payment Plans", desc: "Structured 40/60 and 50/50 payment plans reduce upfront capital commitment while maximising ROI potential." },
              { icon: Building2, title: "Master-planned Communities", desc: "Peninsula community and d3 lifestyle-design cluster both offer integrated retail and F&B, driving rental premiums." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-muted/40 border border-border hover:border-primary/30 hover:bg-muted/70 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CTA BANNER ───────────────────────────────────────── */}
        <section className="bg-primary/5 border-t border-primary/10 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Invest with Select Group?
              </h2>
              <p className="text-muted-foreground mb-8">
                Speak with our property consultants for exclusive pricing, floor plans, and off-plan payment structures across all four active Select Group projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => openLeadCapture({ ctaType: "Developer Enquiry – Select Group" })}
                  className="gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects?developer=Select+Group" className="gap-2">
                    Browse All Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
