import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
    title: "RERA Protected",
    stat: "100%",
    statLabel: "Escrow account protection",
    description: "All payments held in regulated escrow accounts until handover.",
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

function CountUpNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
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
    <section className="section-padding bg-charcoal text-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Investment Benefits
          </span>
          <h2 className="text-heading text-background mb-4">
            Why Invest in Off-Plan?
          </h2>
          <p className="text-background/70">
            Off-plan investments in the UAE offer unparalleled opportunities for 
            capital growth, flexible financing, and early access to prime locations.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background/5 border border-background/10 rounded-xl hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <div className="text-4xl font-display font-semibold text-primary mb-1">
                  <CountUpNumber value={benefit.stat} />
                </div>
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
          <p className="text-background/60 mb-4">
            Ready to start your off-plan investment journey?
          </p>
          <a
            href="/ai-search"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Try our AI Property Matcher
            <TrendingUp className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
