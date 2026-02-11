import { motion } from "framer-motion";
import { Search, BarChart3, Users, Megaphone, Target, Shield, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const whatWeDo = [
  { icon: Search, text: "Showcase upcoming and newly launched UAE projects" },
  { icon: BarChart3, text: "Provide project insights, payment plans & details" },
  { icon: Users, text: "Connect users with official developer sales teams or authorized representatives" },
  { icon: Target, text: "Highlight investment opportunities across budgets" },
  { icon: Megaphone, text: "Promote projects through digital media & campaigns" },
];

const disclaimerPoints = [
  "Sell properties directly",
  "Represent ourselves as real estate brokers",
  "Handle transactions or payments",
  "Provide property brokerage services",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | OffPlanProjects – UAE Off-Plan Property Discovery Platform</title>
        <meta
          name="description"
          content="OffPlanProjects is a digital property discovery platform showcasing upcoming off-plan developments and investment opportunities across the UAE."
        />
        <meta name="keywords" content="About off-plan Dubai portal, property marketing UAE, off-plan project platform, digital property listing site, real estate tech platform UAE" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-background">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
                About Us
              </span>
              <h1 className="text-display text-background mb-6">
                Your Gateway to Upcoming & Investment‑Ready Projects{" "}
                <span className="text-primary">in the UAE</span>
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                A dedicated platform showcasing new launches, upcoming developments, and
                investment opportunities across the UAE — helping buyers and investors
                discover projects directly from verified developers and authorized sales
                partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding">
          <div className="container-luxury max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Who We Are
              </span>
              <h2 className="text-heading text-foreground mb-6">
                A Digital Property Discovery Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a digital property discovery platform designed to simplify how
                investors and buyers explore upcoming real estate projects across the UAE.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform aggregates and presents information about new launches,
                off‑plan developments, and investment opportunities from across the
                market — making it easier to research, compare, and connect with official
                project representatives.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                We operate purely as an information, marketing, and promotion platform
                and do not act as real estate brokers, agents, or property sellers.
              </p>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-3xl mx-auto" />

        {/* What We Do */}
        <section className="section-padding">
          <div className="container-luxury max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                What We Do
              </span>
              <h2 className="text-heading text-foreground">
                Making Property Discovery Transparent
              </h2>
            </motion.div>

            <div className="space-y-5">
              {whatWeDo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-muted-foreground italic"
            >
              We aim to make property discovery transparent, data‑driven, and accessible.
            </motion.p>
          </div>
        </section>

        <Separator className="max-w-3xl mx-auto" />

        {/* Our Vision */}
        <section className="section-padding">
          <div className="container-luxury max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Our Vision
              </span>
              <h2 className="text-heading text-foreground mb-6">
                The UAE's Most Trusted Destination
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                To become the UAE's most trusted digital destination for discovering
                upcoming real estate developments and investment opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-3xl mx-auto" />

        {/* Disclaimer */}
        <section className="section-padding">
          <div className="container-luxury max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/50 border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-display font-medium text-foreground">
                  Disclaimer
                </h3>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                We are an independent digital platform that publishes and promotes real
                estate project information for marketing and informational purposes only.
              </p>
              <p className="text-sm font-medium text-foreground mb-3">We do not:</p>
              <ul className="space-y-2 mb-6">
                {disclaimerPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                All property enquiries are forwarded directly to developers or their
                authorized sales representatives.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Users are advised to conduct their own due diligence before making any
                property decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-heading text-foreground mb-4">
                Start Exploring Projects Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse verified off‑plan developments or get in touch with our team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/projects">Explore Projects</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
