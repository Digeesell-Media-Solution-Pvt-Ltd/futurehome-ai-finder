import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Property Investor",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "OffPlanProjects made discovering investment opportunities effortless. The AI matched me with a project in Dubai Marina that fit my budget and goals. Great platform for research!",
    project: "Marina Vista Tower",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "First-time Investor",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "As a first-time off-plan investor from abroad, I found OffPlanProjects incredibly helpful for researching projects and understanding payment plans. The platform connected me with the right sales teams!",
    project: "Creek Harbour Views",
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Serial Investor",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    text: "I've discovered multiple investment opportunities through OffPlanProjects. The AI insights and project comparisons helped me make more informed decisions. A great discovery tool.",
    project: "The Oasis by Emaar",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            Success Stories
          </motion.span>
          <h2 className="text-heading text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground">
            Join thousands of users who discovered their next investment
            opportunity through our platform.
          </p>
        </motion.div>

        {/* Testimonial Carousel - Glass card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bubble-card p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
              
              {/* Quote Icon - Bubble style */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative"
                style={{
                  background: "linear-gradient(135deg, rgba(214, 199, 161, 0.2) 0%, rgba(214, 199, 161, 0.1) 100%)",
                  border: "1px solid rgba(214, 199, 161, 0.3)",
                }}
              >
                <div className="absolute top-1 left-2 w-4 h-2 bg-white/40 rounded-full blur-sm" />
                <Quote className="w-6 h-6 text-primary relative z-10" />
              </motion.div>

              {/* Rating - Glass pills */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonials[current].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].role} · {testimonials[current].location}
                  </div>
                </div>
                <div className="ml-auto hidden md:block">
                  <div className="glass-panel px-4 py-2 rounded-full">
                    <div className="text-xs text-muted-foreground mb-0.5">Invested in</div>
                    <div className="text-sm font-medium text-primary">
                      {testimonials[current].project}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Bubble buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bubble-interactive flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-gradient-to-r from-primary to-gold-dark"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bubble-interactive flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
