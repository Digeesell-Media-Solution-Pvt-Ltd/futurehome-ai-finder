// Developer data types and featured developers
export interface Developer {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  logoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  projectCount?: number;
  trustScore?: number;
  deliveryRate?: string;
  description?: string;
}

// Featured developers with enhanced data
export const featuredDevelopers: Developer[] = [
  {
    id: "danube",
    nameEn: "Danube Properties",
    nameAr: "دانوب العقارية",
    slug: "danube",
    featured: true,
  },
  {
    id: "emaar",
    nameEn: "Emaar Properties",
    nameAr: "إعمار العقارية",
    slug: "emaar",
    featured: true,
  },
  {
    id: "damac",
    nameEn: "Damac Properties",
    nameAr: "داماك العقارية",
    slug: "damac",
    featured: true,
  },
  {
    id: "nakheel",
    nameEn: "Nakheel",
    nameAr: "نخيل",
    slug: "nakheel",
    featured: true,
  },
  {
    id: "meraas",
    nameEn: "Meraas",
    nameAr: "مراس",
    slug: "meraas",
    featured: true,
  },
  {
    id: "sobha",
    nameEn: "Sobha Realty",
    nameAr: "صبحا ريالتي",
    slug: "sobha",
    featured: true,
  },
  {
    id: "dubai-properties",
    nameEn: "Dubai Properties",
    nameAr: "دبي العقارية",
    slug: "dubai-properties",
    featured: true,
  },
  {
    id: "azizi",
    nameEn: "Azizi Developments",
    nameAr: "عزيزي للتطوير",
    slug: "azizi",
    featured: true,
  },
  {
    id: "ellington",
    nameEn: "Ellington Properties",
    nameAr: "إلينغتون العقارية",
    slug: "ellington",
    featured: true,
  },
  {
    id: "binghatti",
    nameEn: "Binghatti Developers",
    nameAr: "بن غاطي للتطوير",
    slug: "binghatti",
    featured: true,
  },
  {
    id: "omniyat",
    nameEn: "Omniyat",
    nameAr: "أمنيات",
    slug: "omniyat",
    featured: true,
  },
  {
    id: "select-group",
    nameEn: "Select Group",
    nameAr: "سيلكت جروب",
    slug: "select-group",
    featured: true,
  },
];

// Generate slug from developer name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Get initials for fallback avatar
export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(word => word.length > 0 && !['L.L.C', 'LLC', 'Ltd', 'Limited', 'Co.', 'S.O.C', 'P.S.C'].includes(word))
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

// Parse CSV data into Developer objects
export function parseDevelopersFromCSV(csvContent: string): Developer[] {
  const lines = csvContent.split('\n');
  const seenNames = new Set<string>();
  const developers: Developer[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Handle CSV parsing with potential commas in Arabic names
    const firstCommaIndex = line.indexOf(',');
    if (firstCommaIndex === -1) continue;
    
    const nameEn = line.substring(0, firstCommaIndex).trim();
    const nameAr = line.substring(firstCommaIndex + 1).trim();
    
    if (!nameEn) continue;
    
    // Skip duplicates (case-insensitive)
    const nameKey = nameEn.toLowerCase();
    if (seenNames.has(nameKey)) continue;
    seenNames.add(nameKey);
    
    const slug = generateSlug(nameEn);
    
    // Check if this is a featured developer
    const featured = featuredDevelopers.find(
      f => f.nameEn.toLowerCase() === nameEn.toLowerCase()
    );
    
    if (featured) {
      developers.push({ ...featured, nameAr: nameAr || featured.nameAr });
    } else {
      developers.push({
        id: slug,
        nameEn,
        nameAr,
        slug,
        featured: false,
      });
    }
  }
  
  // Add featured developers that are not in CSV
  featuredDevelopers.forEach(featured => {
    const nameKey = featured.nameEn.toLowerCase();
    if (!seenNames.has(nameKey)) {
      seenNames.add(nameKey);
      developers.push(featured);
    }
  });
  
  // Sort alphabetically
  return developers.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
}

// Alphabet for filtering
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

