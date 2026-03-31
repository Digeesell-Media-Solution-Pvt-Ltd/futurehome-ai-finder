import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SeoHead } from "@/components/seo/SeoHead";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Terms of Use | OffPlanProjects UAE"
        description="Read the terms and conditions for using our UAE property discovery platform."
        canonicalPath="/terms-of-use"
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
            <h1 className="text-display text-foreground">Terms of Use</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

            <div className="space-y-0">
              <Section title="Acceptance of Terms">
                <p>By accessing and using this website, you agree to abide by these Terms of Use. If you do not agree, please do not use the platform.</p>
              </Section>

              <Section title="Informational Purpose Only">
                <p>This platform is for informational and promotional purposes only.</p>
                <p className="mb-4">We do not:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Sell or broker properties</li>
                  <li>Handle real estate transactions</li>
                  <li>Act as a RERA licensed entity</li>
                  <li>Guarantee accuracy of listings or project data</li>
                </ul>
                <p>All information is subject to change and must be verified independently by the user.</p>
              </Section>

              <Section title="User Responsibilities">
                <p className="mb-4">Users agree:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Not to misuse the website or extract data</li>
                  <li>Not to impersonate others</li>
                  <li>To provide accurate information when submitting forms</li>
                  <li>To use the website only for lawful purposes</li>
                </ul>
              </Section>

              <Section title="No Liability">
                <p className="mb-4">We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Investment decisions</li>
                  <li>Project delays</li>
                  <li>Incorrect or outdated information</li>
                  <li>Third-party communications or offers</li>
                  <li>Developer or agent responses</li>
                </ul>
                <p>All project details must be verified with the actual developer or authorized sales agent.</p>
              </Section>

              <Section title="Intellectual Property">
                <p>All content on this site (text, images, design) is owned or licensed. Users may not reuse or redistribute content without permission.</p>
              </Section>

              <Section title="Third-Party Links">
                <p>Some pages link to third-party websites (developers, partners). We are not responsible for the content, privacy practices, or accuracy of those sites.</p>
              </Section>

              <Section title="Lead Sharing">
                <p className="mb-4">When you submit an enquiry, your data may be shared with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>The project developer</li>
                  <li>Authorized sales partner</li>
                  <li>Marketing partner for that project</li>
                </ul>
                <p>We do not sell leads to unrelated third parties.</p>
              </Section>

              <Section title="Amendments">
                <p>We may update these Terms of Use at any time without notice. Users are responsible for checking the current version.</p>
              </Section>

              <Section title="Governing Law">
                <p>This website is governed under the laws applicable in the UAE.</p>
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
