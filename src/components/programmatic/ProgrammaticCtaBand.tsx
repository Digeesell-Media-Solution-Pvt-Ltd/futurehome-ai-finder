import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Cta = { label: string; to: string; variant?: "hero" | "outline" };

export function ProgrammaticCtaBand({
  heading,
  sub,
  primary,
  secondary,
  className,
}: {
  heading: string;
  sub?: string;
  primary: Cta;
  secondary?: Cta;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-card/50 p-8 md:p-10 text-center max-w-4xl mx-auto",
        className,
      )}
    >
      <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">{heading}</h2>
      {sub ? <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{sub}</p> : null}
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant={primary.variant ?? "hero"} asChild>
          <Link to={primary.to}>{primary.label}</Link>
        </Button>
        {secondary ? (
          <Button variant={secondary.variant ?? "outline"} asChild>
            <Link to={secondary.to}>{secondary.label}</Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
