import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SeoHead } from "@/components/seo/SeoHead";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Cookie Policy | OffPlanProjects UAE"
        description="Cookie usage and preference policy for OffPlanProjects."
        canonicalPath="/cookie-policy"
        noindex
      />

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <h1 className="text-display text-foreground">Cookie Policy</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

            <div className="space-y-0">
              <Section title="What Are Cookies?">
                <p>Cookies are small data files stored on your device when you visit our website. They help us improve your browsing experience, analyze website traffic, and personalize content.</p>
              </Section>

              <Section title="How We Use Cookies">
                <p className="mb-4">We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Analyze site traffic and user interactions</li>
                  <li>Improve website functionality and speed</li>
                  <li>Remember user preferences (e.g., project views)</li>
                  <li>Support advertising campaigns and retargeting</li>
                </ul>
              </Section>

              <Section title="Types of Cookies Used">
                <div className="space-y-5">
                  <CookieType label="Essential Cookies" items={["Required for basic website functionality"]} />
                  <CookieType label="Analytics Cookies" items={["Help us understand how users interact with the website (e.g., Google Analytics)"]} />
                  <CookieType label="Marketing Cookies" items={["Used for campaign performance, personalization, and retargeting"]} />
                </div>
                <p className="mt-4">We do not use cookies to collect sensitive personal data.</p>
              </Section>

              <Section title="Managing Your Cookie Preferences">
                <p className="mb-4">You can:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Accept or decline cookies via your browser settings</li>
                  <li>Delete previously stored cookies at any time</li>
                  <li>Continue using the site without non-essential cookies</li>
                </ul>
                <p>Disabling cookies may affect some features or functionality.</p>
              </Section>

              <Section title="Updates to This Policy">
                <p>We may update this Cookie Policy from time to time. The last updated date will be shown at the top of the page.</p>
              </Section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-border last:border-b-0">
      <h2 className="text-xl font-display font-medium text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function CookieType({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="font-medium text-foreground">{label}</span>
      </div>
      <ul className="list-disc pl-10 space-y-1 text-muted-foreground">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
