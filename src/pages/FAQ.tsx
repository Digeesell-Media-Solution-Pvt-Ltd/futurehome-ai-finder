import { motion } from "framer-motion";
import { SeoHead } from "@/components/seo/SeoHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "What is off-plan property in the UAE?",
    answer:
      "Off-plan property refers to real estate purchased directly from a developer before construction is complete. Buyers invest based on floor plans and project renders, often at a lower price than completed properties.",
  },
  {
    id: "q2",
    question: "Is it safe to buy off-plan in Dubai?",
    answer:
      "Yes, provided you verify the project is registered with the Dubai Land Department (DLD) and that buyer funds are held in a RERA-regulated escrow account. Always check the developer's delivery track record before committing.",
  },
  {
    id: "q3",
    question: "What is a post-handover payment plan?",
    answer:
      "A post-handover plan lets buyers continue paying instalments after the property is handed over — typically spread over 1 to 3 years. This reduces the upfront financial burden and is widely offered by UAE developers.",
  },
  {
    id: "q4",
    question: "Can foreigners buy off-plan property in the UAE?",
    answer:
      "Yes. There are no restrictions on foreign ownership in designated freehold zones across Dubai, Abu Dhabi and Ras Al Khaimah.",
  },
  {
    id: "q5",
    question: "What is the minimum investment for a UAE Golden Visa through property?",
    answer:
      "The minimum property investment for a UAE Golden Visa is AED 2 million, based on the DLD's official valuation. Both ready and off-plan properties qualify, provided the purchase is made without a mortgage or with a mortgage from an approved UAE bank.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="UAE Off-Plan Property FAQ | Common Buyer Questions Answered"
        description="Answers to the most common questions about buying off-plan property in the UAE — payment plans, developer trust, DLD registration, Golden Visa and more."
        canonicalPath="/faq"
      />

      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="section-padding bg-charcoal text-background">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
                Help Centre
              </span>
              <h1 className="text-display text-background mb-6">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Everything you need to know about buying off-plan property in
                the UAE — from payment plans and DLD registration to Golden Visa
                eligibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding">
          <div className="container-luxury max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map(({ id, question, answer }) => (
                  <AccordionItem key={id} value={id}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
