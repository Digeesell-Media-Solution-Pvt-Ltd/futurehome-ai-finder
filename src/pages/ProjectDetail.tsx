import { useParams, Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  MapPin, Calendar, Building2, TrendingUp, Download,
  Check, Sparkles, Home, Heart, ArrowRight, Send
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getHeroImage, getGalleryImages } from "@/lib/heroImages";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import type { Project } from "@/types/project";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getProjectPageInternalLinks } from "@/lib/internal-linking/buildInternalLinks";

const AMENITY_ICONS: Record<string, typeof Building2> = {
  "Swimming Pool": Heart, "Infinity Pool": Heart, "Gym": TrendingUp,
  "Kids Play Area": Home, "BBQ Area": Home, "Landscaped Gardens": Home,
  "Beach Access": Heart, "Clubhouse": Building2, "Co-working Space": Building2,
  "Retail Outlets": Building2, "Smart Home System": Sparkles, "Concierge": Sparkles,
  "24/7 Security": Check, "Parking": Building2, "Jogging Track": TrendingUp,
  "Spa": Heart, "Yoga Deck": Heart,
};

export default function ProjectDetail() {
  const { projectId, developer } = useParams();
  const { openLeadCapture } = useLeadCapture();

  const { data: project, isLoading, error } = useQuery({
    queryKey: ["project-detail", projectId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*, developers(name, slug), areas(name, slug)")
        .eq("slug", projectId!)
        .single();
      if (error) throw error;
      return data as unknown as Project;
    },
    enabled: !!projectId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-muted-foreground">Loading project...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return <Navigate to="/projects" replace />;
  }

  const heroSrc = project.hero_image || getHeroImage(project.slug);
  const galleryImgs =
    project.gallery_images && project.gallery_images.length > 0
      ? project.gallery_images
      : getGalleryImages(project.slug);
  const developerName = project.developers?.name || "Developer";
  const areaName = project.areas?.name || project.city;
  const projectFullName = `${project.project_name} by ${developerName}`;

  const openForm = (ctaType: string, downloadUrl?: string) => {
    openLeadCapture({ projectName: projectFullName, ctaType, downloadUrl });
  };

  const formatPrice = (price: number | null) => {
    if (!price) return null;
    if (price >= 1000000) return `AED ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `AED ${(price / 1000).toFixed(0)}K`;
    return `AED ${price}`;
  };

  const handover = project.handover_year
    ? project.handover_quarter
      ? `${project.handover_quarter} ${project.handover_year}`
      : `${project.handover_year}`
    : null;

  const projectInternalLinks = getProjectPageInternalLinks({
    areaSlug: project.areas?.slug,
    areaName,
    developerSlug: project.developers?.slug,
    developerName,
    projectName: project.project_name,
  });

  const quickStats = [
    project.starting_price ? { label: "Starting Price", value: formatPrice(project.starting_price)!, icon: TrendingUp } : null,
    handover ? { label: "Handover", value: handover, icon: Calendar } : null,
    project.bedroom_types.length > 0 ? { label: "Unit Types", value: project.bedroom_types.join(", "), icon: Home } : null,
    { label: "Location", value: areaName, icon: MapPin },
  ].filter(Boolean) as { label: string; value: string; icon: typeof TrendingUp }[];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{project.project_name} by {developerName} | Off-Plan Dubai</title>
        <meta
          name="description"
          content={project.short_description || `Discover ${project.project_name} by ${developerName} in ${areaName}, Dubai. ${project.property_types.join(", ")} available.`}
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSrc ? (
            <img src={heroSrc} alt={project.project_name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-charcoal flex items-center justify-center">
              <Building2 className="h-20 w-20 text-muted-foreground/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-primary">{project.project_name}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">{project.launch_status}</span>
                {project.lifestyle_tags.slice(0, 2).map(tag => (
                  <span key={tag} className="badge-tag">{tag}</span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                {project.project_name}
              </h1>
              <p className="text-xl text-background/90 mb-2">by {developerName}</p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{areaName}, Dubai, UAE</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {quickStats.map((stat) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel p-4 rounded-xl text-center">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-background text-sm">{stat.value}</div>
                    <div className="text-xs text-background/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" className="rounded-full" onClick={() => openForm("Request Pricing")}>
                  <Send className="w-4 h-4 mr-2" />
                  Request Pricing
                </Button>
                {project.brochure_url && (
                  <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openForm("Download Brochure", project.brochure_url!)}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                )}
                <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openForm("Book a Consultation")}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tags Strip */}
      {project.investment_tags.length > 0 && (
        <section className="py-8 bg-charcoal">
          <div className="container-luxury">
            <div className="flex flex-wrap justify-center gap-4">
              {project.investment_tags.map((tag, index) => (
                <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="px-6 py-3 glass-panel rounded-full text-background/90 font-medium text-sm">
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Overview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Project Overview</span>
              <h2 className="text-heading text-foreground mb-6">{project.project_name}</h2>
              <div className="prose prose-lg text-muted-foreground">
                {project.full_description ? (
                  project.full_description.split('\n').map((p, i) => <p key={i}>{p}</p>)
                ) : project.short_description ? (
                  <p>{project.short_description}</p>
                ) : (
                  <p>
                    {project.project_name} by {developerName} offers premium {project.property_types.join(", ").toLowerCase()} living
                    in {areaName}, Dubai. {project.bedroom_types.length > 0 && `Available in ${project.bedroom_types.join(", ")} configurations.`}
                    {handover && ` Expected handover: ${handover}.`}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{developerName}</span>
                </div>
              </div>
            </motion.div>

            {galleryImgs.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <img src={galleryImgs[0]} alt={`${project.project_name} Interior`} className="rounded-2xl shadow-luxury w-full" />
                {(project.investment_score || project.lifestyle_score) && (
                  <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      {project.investment_score && (
                        <div className="text-center">
                          <div className="text-2xl font-display font-semibold text-foreground">{project.investment_score}/5</div>
                          <div className="text-xs text-muted-foreground">Investment</div>
                        </div>
                      )}
                      {project.lifestyle_score && (
                        <div className="text-center">
                          <div className="text-2xl font-display font-semibold text-foreground">{project.lifestyle_score}/5</div>
                          <div className="text-xs text-muted-foreground">Lifestyle</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Unit Types */}
      {project.bedroom_types.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Available Units</span>
              <h2 className="text-heading text-foreground">Property Types & Configurations</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.property_types.map((type, index) => (
                <motion.div key={type} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bubble-card p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">{type}</h3>
                  <p className="text-sm text-muted-foreground">{project.bedroom_types.join(", ")}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      {project.amenities.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">World-Class Amenities</span>
              <h2 className="text-heading text-foreground">A Life of Luxury Awaits</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.amenities.map((amenity, index) => {
                const Icon = AMENITY_ICONS[amenity] || Sparkles;
                return (
                  <motion.div key={amenity} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }} className="glass-panel p-5 rounded-xl text-center group hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground text-sm">{amenity}</h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryImgs.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-luxury">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Gallery</span>
              <h2 className="text-heading text-foreground">Experience {project.project_name}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImgs.map((src, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-xl aspect-square">
                  <img src={src} alt={`${project.project_name} Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Investment Highlights */}
      {project.investment_tags.length > 0 && (
        <section className="section-padding bg-charcoal">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Investment Potential</span>
                <h2 className="text-heading text-background mb-6">Why Invest in {project.project_name}?</h2>
                <div className="space-y-4">
                  {project.investment_tags.map((tag, index) => (
                    <motion.div key={tag} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-charcoal" />
                      </div>
                      <span className="text-background/90">{tag}</span>
                    </motion.div>
                  ))}
                  {project.lifestyle_tags.map((tag, index) => (
                    <motion.div key={tag} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: (project.investment_tags.length + index) * 0.1 }} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-charcoal" />
                      </div>
                      <span className="text-background/90">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-panel p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-display text-background">Project Summary</h3>
                </div>
                <p className="text-background/80 leading-relaxed">
                  {project.project_name} by {developerName} in {areaName} offers
                  {project.property_types.length > 0 && ` ${project.property_types.join(", ").toLowerCase()}`} living
                  {project.bedroom_types.length > 0 && ` with ${project.bedroom_types.join(", ")} configurations`}.
                  {project.starting_price && ` Starting from ${formatPrice(project.starting_price)}.`}
                  {handover && ` Handover expected ${handover}.`}
                  {project.amenities.length > 0 && ` Features ${project.amenities.length}+ premium amenities.`}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-background border-t border-border">
        <div className="container-luxury max-w-4xl">
          <InternalLinkCluster
            title="Keep exploring Dubai off-plan"
            intro="Structured links to the parent area hub, developer programmes, and high-intent guides—typed for crawlability."
            links={projectInternalLinks}
            inlineContextCount={2}
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-muted/30">
        <div className="container-luxury">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            We are an AI-powered property discovery platform. This project is listed for informational
            and marketing purposes only. We are not a brokerage. All details including pricing, availability,
            and specifications are sourced from the developer and may change without notice. Please verify
            directly with {developerName} or authorized representatives.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-gold-dark/10">
        <div className="container-luxury text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-heading text-foreground mb-4">Interested in {project.project_name}?</h2>
            <p className="text-muted-foreground mb-8">
              Get exclusive access to floor plans, pricing, and payment plan details.
              Connect with the project's official sales team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="rounded-full" onClick={() => openForm("Request Pricing")}>
                <Send className="w-4 h-4 mr-2" />
                Request Pricing
              </Button>
              <Button variant="gold-outline" size="lg" className="rounded-full" onClick={() => openForm("Book a Consultation")}>
                <Calendar className="w-4 h-4 mr-2" />
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
