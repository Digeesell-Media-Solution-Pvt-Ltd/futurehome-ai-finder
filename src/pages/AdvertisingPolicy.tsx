import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AdvertisingPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Advertising & Listing Policy | Promote Projects on OffPlanProjects</title>
        <meta
          name="description"
          content="Learn how developers and brokers can list and promote UAE off-plan projects on our AI-powered discovery platform. Transparent terms and listing criteria."
        />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-display text-foreground">
              Advertising & Listing Policy
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-0"
          >
            {/* Section 1 */}
            <Section title="Purpose of This Policy">
              <p>Our platform is a property discovery and marketing portal, not a real estate brokerage.</p>
              <p>We allow developers, authorized agencies, and verified sales partners to list and promote their projects here through organic or sponsored listings.</p>
              <p>All listings are subject to review and approval.</p>
            </Section>

            {/* Section 2 */}
            <Section title="Who Can List">
              <p className="mb-4">We accept listings only from:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Official developers</li>
                <li>RERA-licensed brokerages with proper authorization</li>
                <li>Marketing teams acting on behalf of a developer</li>
              </ul>
              <p>We do not accept listings from individual agents without proper credentials.</p>
            </Section>

            {/* Section 3 */}
            <Section title="Types of Listings">
              <div className="space-y-6">
                <ListingType
                  label="Free Listings"
                  items={["Basic exposure", "Standard listing page"]}
                />
                <ListingType
                  label="Featured Listings (Paid)"
                  items={[
                    "Priority visibility on homepage or category page",
                    "Higher click-through and exposure",
                    "Custom media support",
                  ]}
                />
                <ListingType
                  label="Sponsored Projects (Paid)"
                  items={[
                    "Homepage banners, spotlight areas, AI recommendations, and custom campaign integrations",
                  ]}
                />
              </div>
              <p className="mt-4">All paid promotions will be clearly marked as "Featured" or "Sponsored".</p>
            </Section>

            {/* Section 4 */}
            <Section title="Listing Guidelines">
              <p className="mb-4">All submitted projects must include:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Accurate and updated project name</li>
                <li>Clear location and developer information</li>
                <li>Project images or renders</li>
                <li>Floor plans or brochures (if available)</li>
                <li>Pricing and payment details (if public)</li>
              </ul>
              <p>Listings found with outdated, misleading, or unverifiable information may be removed without notice.</p>
            </Section>

            {/* Section 5 */}
            <Section title="Content Rights">
              <p className="mb-4">By submitting content:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You confirm that you have the rights to publish and promote the content</li>
                <li>You allow us to display and distribute the content for marketing purposes</li>
                <li>You grant non-exclusive rights to use it on the platform</li>
              </ul>
            </Section>

            {/* Section 6 */}
            <Section title="Right to Refuse or Remove">
              <p className="mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Decline any listing without explanation</li>
                <li>Remove listings that violate platform values or user trust</li>
                <li>Flag listings that misrepresent project details</li>
              </ul>
            </Section>

            {/* Section 7 */}
            <Section title="Disclaimer">
              <p className="mb-4">Listing on this platform does not imply:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Official endorsement</li>
                <li>Regulatory verification</li>
                <li>Guarantee of quality or delivery</li>
              </ul>
              <p>All listings are informational and for marketing purposes only.</p>
              <p>Users must perform their own due diligence.</p>
            </Section>

            {/* CTA */}
            <div className="pt-10 text-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  List Your Project
                </Button>
              </Link>
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

function ListingType({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="font-medium text-foreground">{label}</span>
      </div>
      <ul className="list-disc pl-10 space-y-1 text-muted-foreground">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
