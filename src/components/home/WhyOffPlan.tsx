import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { TrendingUp, Percent, Shield, Clock, Coins, Home } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI Potential",
    stat: "25%",
    statLabel: "Average capital appreciation",
    description: "Off-plan properties in UAE typically appreciate 15-25% by handover.",
  },
  {
    icon: Percent,
    title: "Flexible Payment Plans",
    stat: "60/40",
    statLabel: "Construction-linked payments",
    description: "Pay as low as 10% down with developer-backed payment plans.",
  },
  {
    icon: Shield,
    title: "Regulatory Framework",
    stat: "100%",
    statLabel: "Escrow account protection",
    description: "UAE regulations require payments to be held in escrow accounts until handover.",
  },
  {
    icon: Clock,
    title: "Early Access",
    stat: "2-4 yrs",
    statLabel: "Ahead of market prices",
    description: "Lock in today's prices for tomorrow's prime properties.",
  },
  {
    icon: Coins,
    title: "Lower Entry Cost",
    stat: "10%",
    statLabel: "Minimum down payment",
    description: "Start your investment with significantly lower capital outlay.",
  },
  {
    icon: Home,
    title: "Customization Options",
    stat: "Free",
    statLabel: "Upgrade packages",
    description: "Many developers offer free upgrades and customizations.",
  },
];

function CountUpNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const duration = 1500;
    const startTime = Date.now();

    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * easeOut;

      if (value.includes("%")) {
        setDisplayValue(Math.round(current) + "%");
      } else if (value.includes("/")) {
        setDisplayValue(value);
      } else if (value.includes("yrs")) {
        setDisplayValue(value);
      } else {
        setDisplayValue(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(value);
      }
    };

    updateValue();
  }, [isVisible, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function WhyOffPlan() {
  return (
    <section className="section-padding bg-charcoal text-background relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl"
        />
        
        {/* Floating small bubbles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-1/3 w-4 h-4 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/3 left-1/5 w-5 h-5 rounded-full bg-primary/25"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10"
          >
            Investment Benefits
          </motion.span>
          <h2 className="text-heading text-background mb-4">
            Why Invest in Off-Plan?
          </h2>
          <p className="text-background/70">
            Off-plan investments in the UAE offer unparalleled opportunities for 
            capital growth, flexible financing, and early access to prime locations.
          </p>
        </motion.div>

        {/* Benefits Grid - Glass bubble cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass-card-dark p-8 relative overflow-hidden"
            >
              {/* Bubble highlight effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon - Bubble style */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(214, 199, 161, 0.2) 0%, rgba(214, 199, 161, 0.1) 100%)",
                  border: "1px solid rgba(214, 199, 161, 0.3)",
                }}
              >
                <div className="absolute top-1 left-2 w-4 h-2 bg-white/20 rounded-full blur-sm" />
                <benefit.icon className="w-8 h-8 text-primary relative z-10" />
              </motion.div>

              {/* Stat */}
              <div className="mb-4">
                <motion.div
                  className="text-4xl font-display font-semibold text-primary mb-1"
                >
                  <CountUpNumber value={benefit.stat} />
                </motion.div>
                <div className="text-sm text-background/50">{benefit.statLabel}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-medium text-background mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="glass-panel inline-block px-8 py-4 rounded-full">
            <p className="text-background/60 mb-2 text-sm">
              Ready to start your off-plan investment journey?
            </p>
            <a
              href="/ai-search"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Try our AI Property Matcher
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
