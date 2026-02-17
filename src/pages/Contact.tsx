import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact | Get Info on UAE Off-Plan Projects</title>
        <meta
          name="description"
          content="Have a question about a project in Dubai or the UAE? Use our form to get connected to official developers or agents — no brokers involved."
        />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-2xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-display text-foreground mb-4">
              Have a Question About a Project?
            </h1>
            <p className="text-lg text-muted-foreground">
              Use the form below to get more information about any project listed on our platform.
              Your inquiry will be forwarded to the official developer or an authorized project representative.
            </p>
          </motion.div>

          {/* Form or Success */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-luxury">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
                <h2 className="text-2xl font-display font-medium text-foreground mb-3">
                  Thank You
                </h2>
                <p className="text-muted-foreground mb-8">
                  Your inquiry has been shared with the project team.
                </p>
                <Button
                  variant="gold-outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 shadow-luxury">
                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
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
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Name / URL <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Breez by Danube or paste a project link"
                    />
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
                      placeholder="What would you like to know about this project?"
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
                        Request Project Info
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center text-xs text-muted-foreground leading-relaxed space-y-1"
          >
            <p>This platform is a marketing and discovery portal only.</p>
            <p>We do not provide real estate brokerage services.</p>
            <p>All enquiries are routed to verified developer sales teams or their authorized agents.</p>
            <p>We are not responsible for transactions or listing accuracy. Please verify details independently before making decisions.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}
