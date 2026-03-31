import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SeoHead } from "@/components/seo/SeoHead";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Privacy Policy | OffPlanProjects UAE"
        description="Learn how your data is collected and used on our AI-powered property discovery platform."
        canonicalPath="/privacy-policy"
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
            <h1 className="text-display text-foreground">Privacy Policy</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

            <div className="space-y-0">
              <Section title="Your Privacy Matters">
                <p>This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our website.</p>
                <p>We are an independent property discovery and marketing platform. We do not act as real estate agents, brokers, or transaction facilitators.</p>
              </Section>

              <Section title="Information We Collect">
                <p className="mb-4">We collect the following user data:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number (including WhatsApp)</li>
                  <li>Project enquiry details</li>
                  <li>Usage data (via cookies/analytics)</li>
                </ul>
              </Section>

              <Section title="How We Use Your Data">
                <p className="mb-4">We use your submitted data to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Share your inquiry with the developer or their authorized sales representative</li>
                  <li>Respond to questions or requests</li>
                  <li>Improve our website experience</li>
                  <li>Analyze traffic and user interest (anonymous)</li>
                </ul>
                <p>We do not sell or trade your personal data to unrelated third parties.</p>
              </Section>

              <Section title="Sharing Your Data">
                <p className="mb-4">Your submitted data may be shared with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Official developer sales teams</li>
                  <li>Authorized project representatives</li>
                  <li>Marketing partners representing the listed project</li>
                </ul>
                <p>You may be contacted by these parties in response to your inquiry.</p>
                <p>We are not responsible for how third parties process or use your data beyond this point.</p>
              </Section>

              <Section title="Cookies & Analytics">
                <p className="mb-4">We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Track site usage</li>
                  <li>Personalize your experience</li>
                  <li>Improve speed and performance</li>
                </ul>
                <p>You can control cookies via your browser settings.</p>
              </Section>

              <Section title="Data Security">
                <p>We take reasonable technical and organizational measures to secure your data, but no method is 100% secure.</p>
              </Section>

              <Section title="User Rights">
                <p className="mb-4">You may:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Request access to your stored data</li>
                  <li>Ask us to delete your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p>To do so, contact us using the website's Contact form.</p>
              </Section>

              <Section title="Consent">
                <p className="mb-4">By submitting a form or using our website, you consent to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The collection and use of your data as outlined</li>
                  <li>Your data being shared with authorized developer representatives</li>
                  <li>Being contacted regarding project enquiries</li>
                </ul>
              </Section>

              <Section title="Policy Updates">
                <p>We may update this policy from time to time. The last updated date will be visible at the top of this page.</p>
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
