// Eagerly import all images from src/assets/projects/
const allModules = import.meta.glob<{ default: string }>(
  '../assets/projects/*.jpg',
  { eager: true }
);

// Special cases where DB slug differs from filename prefix
const slugToFileKey: Record<string, string> = {
  'damac-islands-2': 'damac-islands2',
  'elo-3': 'elo3',
  'violet-4': 'violet4',
  'samana-hills-south-2': 'samana-hills-south2',
  'samana-hills-south-3': 'samana-hills-south3',
  'samana-sky-views': 'samana-skyviews',
};

// Build maps: slug -> hero image, slug -> gallery images
const heroMap: Record<string, string> = {};
const galleryMap: Record<string, string[]> = {};

for (const [path, mod] of Object.entries(allModules)) {
  const filename = path.split('/').pop()!; // e.g. "aliyah-hero.jpg"
  const nameWithoutExt = filename.replace('.jpg', '');
  
  // Find the project key by matching known prefixes
  // Hero files end with "-hero", others are gallery
  const isHero = nameWithoutExt.endsWith('-hero');
  
  if (isHero) {
    const key = nameWithoutExt.replace(/-hero$/, '');
    heroMap[key] = mod.default;
  } else {
    // Extract prefix: everything before the last dash-segment
    // e.g. "aliyah-interior" -> prefix "aliyah", suffix "interior"
    // e.g. "binghatti-cullinan-rooftop" -> need to match "binghatti-cullinan"
    // We match against known file keys
    let matched = false;
    for (const key of Object.values(slugToFileKey)) {
      if (nameWithoutExt.startsWith(key + '-')) {
        if (!galleryMap[key]) galleryMap[key] = [];
        galleryMap[key].push(mod.default);
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Try to find the longest matching prefix from heroMap keys
      // We'll do a second pass after heroMap is built
    }
  }
}

// Second pass for gallery images that weren't matched via slugToFileKey
// Build a set of all known file prefixes from hero images
const knownPrefixes = new Set(Object.keys(heroMap));
// Add slugToFileKey values
for (const v of Object.values(slugToFileKey)) knownPrefixes.add(v);

for (const [path, mod] of Object.entries(allModules)) {
  const filename = path.split('/').pop()!;
  const nameWithoutExt = filename.replace('.jpg', '');
  if (nameWithoutExt.endsWith('-hero')) continue;
  
  // Check if already in galleryMap
  let alreadyMatched = false;
  for (const vals of Object.values(galleryMap)) {
    if (vals.includes(mod.default)) { alreadyMatched = true; break; }
  }
  if (alreadyMatched) continue;

  // Find longest matching prefix
  let bestPrefix = '';
  for (const prefix of knownPrefixes) {
    if (nameWithoutExt.startsWith(prefix + '-') && prefix.length > bestPrefix.length) {
      bestPrefix = prefix;
    }
  }
  if (bestPrefix) {
    if (!galleryMap[bestPrefix]) galleryMap[bestPrefix] = [];
    galleryMap[bestPrefix].push(mod.default);
  }
}

export function getHeroImage(slug: string): string | null {
  const fileKey = slugToFileKey[slug] || slug;
  return heroMap[fileKey] || null;
}

export function getGalleryImages(slug: string): string[] {
  const fileKey = slugToFileKey[slug] || slug;
  return galleryMap[fileKey] || [];
}
