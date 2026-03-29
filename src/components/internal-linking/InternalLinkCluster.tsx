import { Link } from "react-router-dom";
import type { CrawlableInternalLink } from "@/lib/internal-linking/types";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  links: CrawlableInternalLink[];
  intro?: string;
  className?: string;
  /** First N links also surfaced as an inline sentence for contextual placement */
  inlineContextCount?: 0 | 2 | 3;
};

/** Crawlable <Link> list — no JS-only navigation. */
export function InternalLinkCluster({
  title,
  links,
  intro,
  className,
  inlineContextCount = 0,
}: Props) {
  if (!links.length) return null;

  const inline = inlineContextCount ? links.slice(0, inlineContextCount) : [];

  return (
    <section className={cn("py-10 border-t border-border", className)} aria-label={title}>
      <h2 className="text-xl font-display font-semibold text-foreground mb-3">{title}</h2>
      {intro ? <p className="text-sm text-muted-foreground mb-4 max-w-3xl leading-relaxed">{intro}</p> : null}

      {inline.length >= 2 ? (
        <p className="text-sm text-muted-foreground mb-4 max-w-3xl leading-relaxed">
          Continue exploring:{" "}
          {inline.map((l, i) => (
            <span key={l.to}>
              {i > 0 && (i === inline.length - 1 ? ", and " : ", ")}
              <Link to={l.to} className="text-primary underline font-medium">
                {l.label}
              </Link>
            </span>
          ))}
          .
        </p>
      ) : null}

      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-primary hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
