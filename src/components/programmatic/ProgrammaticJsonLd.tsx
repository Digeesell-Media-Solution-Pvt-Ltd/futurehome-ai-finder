import { serializeJsonLd } from "@/lib/seo/schema-jsonld";

export function ProgrammaticJsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] | null }) {
  if (!data) return null;
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((obj, i) => {
        const json = serializeJsonLd(obj);
        if (!json) return null;
        return (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
        );
      })}
    </>
  );
}
