export function normalizeSlug(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function normalizeDeveloperKey(str: string): string {
  return normalizeSlug(str)
    .replace(/-properties$/, "")
    .replace(/-property$/, "")
    .replace(/-development$/, "")
    .replace(/-pjsc$/, "")
    .replace(/-llc$/, "");
}
