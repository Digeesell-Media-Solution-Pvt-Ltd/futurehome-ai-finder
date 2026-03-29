const DEV_SPECIAL: Record<string, string> = {
  emaar: "Emaar",
  damac: "DAMAC",
  sobha: "Sobha",
  "select-group": "Select Group",
};

export function slugToAreaLabel(slug: string): string {
  if (slug === "jvc") return "JVC";
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function slugToDeveloperBrand(slug: string): string {
  return DEV_SPECIAL[slug] ?? slugToAreaLabel(slug);
}
