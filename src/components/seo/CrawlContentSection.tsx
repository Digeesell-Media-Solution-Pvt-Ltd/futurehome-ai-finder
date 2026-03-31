import { Link } from "react-router-dom";

interface FaqItem {
  question: string;
  answer: string;
}

interface CrawlContentSectionProps {
  title: string;
  paragraphs: string[];
  faqs: FaqItem[];
  relatedLinks: { label: string; to: string }[];
}

export function CrawlContentSection({ title, paragraphs, faqs, relatedLinks }: CrawlContentSectionProps) {
  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-muted-foreground">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">Frequently asked questions</h3>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-border bg-card p-4">
              <summary className="cursor-pointer text-sm font-medium text-foreground">{faq.question}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <nav className="mt-8">
        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Related pages</h3>
        <div className="flex flex-wrap gap-2">
          {relatedLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
