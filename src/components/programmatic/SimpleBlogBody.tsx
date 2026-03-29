/** Minimal formatting: double newlines → paragraphs, lines starting with ** → bold strip. */

export function SimpleBlogBody({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        return (
          <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
            {lines.map((line, j) => {
              const bold = line.match(/^\*\*(.+?)\*\*\s*(.*)$/);
              if (bold) {
                return (
                  <span key={j}>
                    <strong className="text-foreground">{bold[1]}</strong> {bold[2]}
                    {j < lines.length - 1 ? " " : null}
                  </span>
                );
              }
              return (
                <span key={j}>
                  {line}
                  {j < lines.length - 1 ? <br /> : null}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
