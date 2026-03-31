import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SeoHead } from "@/components/seo/SeoHead";

const sections = [
  {
    title: null,
    content: (
      <>
        <p>This website operates as an independent digital property discovery and marketing platform designed to showcase upcoming real estate developments and investment opportunities across the UAE.</p>
        <p>All information provided on this platform is for informational and promotional purposes only.</p>
      </>
    ),
  },
  {
    title: "Not a Brokerage or Agency",
    content: (
      <>
        <p className="mb-4">We do not:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Act as real estate brokers or agents</li>
          <li>Sell properties directly</li>
          <li>Handle transactions or payments</li>
          <li>Provide brokerage or advisory services</li>
          <li>Represent ourselves as a RERA licensed entity</li>
        </ul>
        <p>We are not a real estate brokerage and do not claim to be licensed by RERA or any real estate regulatory authority.</p>
      </>
    ),
  },
  {
    title: "Information Accuracy",
    content: (
      <>
        <p>All project details including pricing, availability, payment plans, and specifications are provided by developers, project marketers, or publicly available sources.</p>
        <p>We do not independently verify all listings or project information.</p>
        <p>Information may change without notice and users are strongly advised to verify all details directly with the developer or authorized sales representatives before making any decision.</p>
      </>
    ),
  },
  {
    title: "Enquiries & Connections",
    content: (
      <>
        <p className="mb-4">When users submit an enquiry:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Their information may be shared with project developers</li>
          <li>Or shared with authorized sales representatives</li>
          <li>Or marketing partners representing the project</li>
        </ul>
        <p>We only act as a connection and discovery platform.</p>
        <p>We do not participate in negotiations, transactions, or agreements.</p>
      </>
    ),
  },
  {
    title: "Liability Limitation",
    content: (
      <>
        <p className="mb-4">We are not responsible for:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Investment decisions</li>
          <li>Property purchases</li>
          <li>Project delays or changes</li>
          <li>Pricing changes</li>
          <li>Miscommunication by third parties</li>
        </ul>
        <p>Users must conduct their own due diligence before making property-related decisions.</p>
      </>
    ),
  },
  {
    title: "Marketing & Advertising",
    content: (
      <>
        <p className="mb-4">This platform may feature:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
          <li>Sponsored projects</li>
          <li>Paid promotions</li>
          <li>Featured listings</li>
          <li>Marketing partnerships</li>
        </ul>
        <p>We may receive marketing or advertising fees from developers or project promoters.</p>
        <p>However, this does not constitute brokerage or property selling.</p>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Platform Disclaimer | Property Discovery Platform UAE"
        description="Important legal disclaimer for users of our UAE property discovery platform."
        canonicalPath="/disclaimer"
        noindex
      />

      <Header />

      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-display text-foreground mb-6 text-center">
              Platform Disclaimer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-0"
          >
            {sections.map((section, i) => (
              <div
                key={i}
                className="py-8 border-b border-border last:border-b-0"
              >
                {section.title && (
                  <h2 className="text-xl font-display font-medium text-foreground mb-4">
                    {section.title}
                  </h2>
                )}
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Core Legal Line */}
            <div className="py-8 border-b border-border">
              <div className="p-6 bg-muted rounded-xl border border-border">
                <p className="text-foreground font-medium leading-relaxed text-center">
                  This platform operates solely as a digital property discovery and marketing portal and does not provide real estate brokerage, advisory, or transaction services of any kind.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                For any concerns regarding project details, users should directly contact the respective developer or authorized sales representatives.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
