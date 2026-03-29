import type { FaqItem } from "@/types/programmatic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProgrammaticFaqSection({ faq, id = "faq" }: { faq: FaqItem[]; id?: string }) {
  if (!faq.length) return null;
  return (
    <section id={id} className="container-luxury py-16 border-t border-border">
      <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {faq.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
