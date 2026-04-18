import { SeoHead } from "@/components/seo/SeoHead";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  Check,
  Download,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const PLACEHOLDER = "/placeholder.svg";
const SLUG = "moonsa-residences-2";

const quickStats = [
  { label: "Starting Price", value: "Price on request", icon: TrendingUp },
  { label: "Handover", value: "On request", icon: Calendar },
  { label: "Unit Type", value: "Apartments", icon: Home },
  { label: "Community", value: "Warsan 4, International City", icon: MapPin },
];

const keyHighlights = [
  "Located in Warsan 4, Dubai International City",
  "Newly launched project by Dugasta Properties",
  "Contemporary architectural façade that stands out in the skyline",
  "Affordable luxury positioning for end-users and investors",
  "Designed for everyday comfort, style, and convenience",
];

const investorBenefits = [
  "10% guaranteed return on investment for 10 years*",
  "Service charges free for 10 years*",
  "100% buyback option after 10 years with 8% ROI for 10 years*",
];

const nearbyLandmarks = [
  { name: "Burj Khalifa", detail: "Approx. 14.06 km (as per official map)" },
  { name: "Al Maktoum International Airport", detail: "Approx. 37.54 km" },
  { name: "Motiongate Dubai", detail: "Approx. 46.57 km" },
  { name: "LEGOLAND Dubai", detail: "Approx. 46.57 km" },
];

export default function MoonsaResidences2Project() {
  const { openLeadCapture } = useLeadCapture();
  const project = projects.find((p) => p.slug === SLUG);
  const heroSrc = project?.hero_image || PLACEHOLDER;
  const galleryList =
    project?.gallery_images?.length > 0
      ? project.gallery_images.map((src, i) => ({ src, title: `Moonsa Residences 2 – Image ${i + 1}` }))
      : [];

  const handleCTA = (ctaType: string) => {
    openLeadCapture({
      projectName: "Moonsa Residences 2",
      ctaType,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Moonsa Residences 2 by Dugasta | Apartments in Warsan 4 Dubai"
        description="Discover Moonsa Residences 2 by Dugasta Properties in Warsan 4, Dubai International City. Explore official images, investor benefits, and project highlights."
        canonicalPath="/projects/dugasta-properties/moonsa-residences-2"
      />


      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSrc}
            alt="Moonsa Residences 2, Warsan 4 Dubai"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER;
            }}
          />
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
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <span>/</span>
                <span className="text-primary">Moonsa Residences 2</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge-tag">Off-plan</span>
                <span className="badge-tag">Warsan 4</span>
                <span className="badge-tag">International City</span>
                <span className="badge-tag">Apartments</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-background mb-4">
                Moonsa Residences 2
              </h1>
              <p className="text-xl text-background/90 mb-2">
                Modern urban living in Warsan 4 by Dugasta Properties
              </p>
              <div className="flex items-center gap-2 text-background/70 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Warsan 4, Dubai International City, Dubai, UAE</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-4 rounded-xl text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-background">{stat.value}</div>
                    <div className="text-xs text-background/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="gold"
                  size="lg"
                  className="rounded-full"
                  onClick={() => handleCTA("Register Interest")}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Register Interest
                </Button>
                <Button
                  variant="gold-outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => handleCTA("Download Brochure")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button
                  variant="gold-outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => handleCTA("Get Floor Plan")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Get Floor Plan
                </Button>
                <Button
                  variant="gold-outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => handleCTA("Payment Plan")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Payment Plan
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Project Overview
              </span>
              <h2 className="text-heading text-foreground mb-6">
                Contemporary Apartments Following the Success of Moonsa Residences
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Moonsa Residences 2 builds on the success of the original Moonsa Residences,
                  continuing Dugasta Properties&apos; vision to redefine urban living in Warsan 4,
                  Dubai International City. The project is designed around comfort, style,
                  convenience, and long-term value for both residents and investors.
                </p>
                <p>
                  With a contemporary architectural façade and a visually distinctive presence,
                  Moonsa Residences 2 is positioned to become a new landmark in its micro-location.
                  Its affordable luxury positioning, combined with investor-focused benefits and a
                  practical Warsan 4 address, makes it a compelling option for those seeking
                  income-generating property in Dubai.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-luxury"
            >
              <img
                src={galleryList[0]?.src ?? PLACEHOLDER}
                alt="Moonsa Residences 2 architecture"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER;
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights & Investor Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Key Highlights
              </span>
              <h2 className="text-heading text-foreground mb-4">
                A Focus on Comfort, Style, and Convenience
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {keyHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-charcoal" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Investor Benefits
              </span>
              <h2 className="text-heading text-foreground mb-4">
                Structured for Long-Term Investors
              </h2>
              <p className="text-muted-foreground mb-4">
                Moonsa Residences 2 is marketed with a highly structured value proposition for
                income-focused buyers, combining guaranteed returns, service charge savings and a
                defined buyback framework, as per the official Dugasta materials.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {investorBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-charcoal" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Nearby Landmarks */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Location & Connectivity
              </span>
              <h2 className="text-heading text-foreground mb-6">
                Well-Connected Within Dubai International City
              </h2>
              <p className="text-muted-foreground mb-4">
                Positioned in Warsan 4, within the wider Dubai International City catchment, Moonsa
                Residences 2 benefits from road connectivity and proximity to key Dubai landmarks as
                highlighted on Dugasta&apos;s official location map.
              </p>
              <p className="text-muted-foreground mb-8">
                Rather than quoting speculative drive times, the project uses clearly stated
                distances to major destinations such as Burj Khalifa, Al Maktoum International
                Airport, Motiongate Dubai and LEGOLAND Dubai, signaling strong lifestyle and
                investment relevance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyLandmarks.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/60"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-luxury"
            >
              <img
                src={galleryList[1]?.src ?? PLACEHOLDER}
                alt="Warsan 4, Dubai International City context"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER;
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Image Gallery
            </span>
            <h2 className="text-heading text-foreground">
              Visualising Moonsa Residences 2 in Warsan 4
            </h2>
          </motion.div>

          {galleryList.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryList.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl aspect-video"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = PLACEHOLDER;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">{image.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Official images will appear here once they are available from the project source.
            </p>
          )}
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-heading text-foreground mb-4">
              Request Official Details for Moonsa Residences 2
            </h2>
            <p className="text-muted-foreground mb-8">
              Get official information on unit availability, pricing, detailed investment
              projections and payment plans direct from Dugasta&apos;s authorised channel. Every
              enquiry is lead-gated through a single, consistent form.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="rounded-full"
                onClick={() => handleCTA("Register Interest")}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Register Interest
              </Button>
              <Button
                variant="gold"
                size="lg"
                className="rounded-full"
                onClick={() => handleCTA("Book a Call")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
              <Button
                variant="gold-outline"
                size="lg"
                className="rounded-full"
                onClick={() => handleCTA("WhatsApp Inquiry")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

