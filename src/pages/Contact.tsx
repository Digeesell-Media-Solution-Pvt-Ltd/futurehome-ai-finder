import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-display text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about off-plan investments? Our expert team is here to help 
              you make informed decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-luxury">
                <h2 className="text-2xl font-display font-medium text-foreground mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full h-12 px-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full h-12 px-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+97144000000"
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-luxury transition-all group"
                >
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    Call Us
                  </h3>
                  <p className="text-sm text-muted-foreground">+971 4 400 0000</p>
                </a>

                <a
                  href="mailto:info@offplanprojects.com"
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-luxury transition-all group"
                >
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    Email Us
                  </h3>
                  <p className="text-sm text-muted-foreground">info@offplanprojects.com</p>
                </a>

                <a
                  href="https://wa.me/971400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-luxury transition-all group"
                >
                  <MessageCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                </a>

                <div className="p-6 bg-card border border-border rounded-xl">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Sun - Thu: 9AM - 6PM</p>
                </div>
              </div>

              {/* Office Location */}
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Visit Our Office</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Office 1205, Tower A<br />
                      Business Bay, Dubai<br />
                      United Arab Emirates
                    </p>
                    <Button variant="gold-outline" size="sm">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Book Consultation CTA */}
              <div className="p-8 bg-charcoal rounded-xl text-background">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-medium mb-2">
                  Book a Free Consultation
                </h3>
                <p className="text-background/70 text-sm mb-6">
                  Schedule a one-on-one session with our property experts to discuss 
                  your investment goals and get personalized recommendations.
                </p>
                <Button variant="gold" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
