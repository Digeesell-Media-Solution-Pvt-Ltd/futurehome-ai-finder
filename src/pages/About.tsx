import { motion } from "framer-motion";
import { Shield, Target, Users, Award, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Every listing on our platform is verified, with complete disclosure of developer history, payment plans, and project status.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Our proprietary AI analyzes thousands of data points to match you with properties that align with your goals.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "We work exclusively in your interest, providing unbiased recommendations and expert guidance.",
  },
  {
    icon: Award,
    title: "Verified Developers",
    description: "We partner only with RERA-licensed developers with proven track records of quality and timely delivery.",
  },
];

const stats = [
  { value: "15,000+", label: "Happy Investors" },
  { value: "AED 2B+", label: "Transaction Value" },
  { value: "500+", label: "Projects Listed" },
  { value: "7", label: "Emirates Covered" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
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
                About OffPlanProjects
              </span>
              <h1 className="text-display text-background mb-6">
                Where Your Future Home <span className="text-primary">Begins</span>
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                We're transforming how investors discover and purchase off-plan 
                properties in the UAE through AI-powered matching, verified listings, 
                and exceptional service.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-background/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-display font-semibold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-background/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                  Our Mission
                </span>
                <h2 className="text-heading text-foreground mb-6">
                  Making Off-Plan Investment Accessible & Transparent
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The UAE's off-plan market offers incredible opportunities, but navigating 
                  it can be overwhelming. We built OffPlanProjects to bridge the gap between 
                  investors and verified opportunities, using technology to provide clarity 
                  in a complex market.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our AI-powered platform analyzes your preferences, budget, and goals to 
                  recommend properties that truly match your investment criteria—not just 
                  what developers want to sell.
                </p>
                <Button variant="gold" asChild>
                  <Link to="/ai-search">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Try Our AI Search
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Modern Dubai architecture"
                  className="rounded-2xl shadow-luxury"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-gold">
                  <TrendingUp className="w-8 h-8 text-foreground mb-2" />
                  <div className="text-2xl font-display font-semibold text-foreground">98%</div>
                  <div className="text-sm text-foreground/80">Client Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
                Our Values
              </span>
              <h2 className="text-heading text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-muted-foreground">
                Our commitment to these principles guides everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-luxury transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-heading text-foreground mb-6">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a first-time investor or expanding your portfolio, 
                our team is here to help you find the perfect off-plan opportunity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/ai-search">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start AI Search
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">
                    Talk to an Expert
                  </Link>
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
