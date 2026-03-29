import { Link } from "react-router-dom";
import type { InternalLink } from "@/lib/seo/internalLinks";

export function InternalLinkList({ title, links }: { title: string; links: InternalLink[] }) {
  if (!links.length) return null;
  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-xl font-display font-semibold text-foreground mb-4">{title}</h2>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-primary hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
