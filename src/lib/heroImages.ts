// Eagerly import all hero images from src/assets/projects/
const heroModules = import.meta.glob<{ default: string }>(
  '../assets/projects/*-hero.jpg',
  { eager: true }
);

// Build a map: slug -> resolved image URL
const heroMap: Record<string, string> = {};
for (const [path, mod] of Object.entries(heroModules)) {
  // path like "../assets/projects/aliyah-hero.jpg" → key "aliyah"
  const filename = path.split('/').pop()!; // "aliyah-hero.jpg"
  const key = filename.replace('-hero.jpg', '');
  heroMap[key] = mod.default;
}

// Special cases where DB slug differs from filename
const slugToFileKey: Record<string, string> = {
  'damac-islands-2': 'damac-islands2',
  'elo-3': 'elo3',
  'violet-4': 'violet4',
  'samana-hills-south-2': 'samana-hills-south2',
  'samana-hills-south-3': 'samana-hills-south3',
  'samana-sky-views': 'samana-skyviews',
};

export function getHeroImage(slug: string): string | null {
  const fileKey = slugToFileKey[slug] || slug;
  return heroMap[fileKey] || null;
}
