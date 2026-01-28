// Developer data types and featured developers
export interface Developer {
  id: string;
  nameEn: string;
  nameAr: string;
  slug: string;
  logoUrl?: string;
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
    projectCount: 50,
    trustScore: 4.7,
    deliveryRate: "96%",
    description: "Architects of tomorrow's dreams, building today's legacies with 1% payment plans.",
  },
  {
    id: "emaar",
    nameEn: "Emaar Properties",
    nameAr: "إعمار العقارية",
    slug: "emaar",
    featured: true,
    projectCount: 124,
    trustScore: 4.9,
    deliveryRate: "99%",
    description: "Dubai's largest developer, known for iconic projects like Burj Khalifa and Dubai Mall.",
  },
  {
    id: "damac",
    nameEn: "Damac Properties",
    nameAr: "داماك العقارية",
    slug: "damac",
    featured: true,
    projectCount: 86,
    trustScore: 4.7,
    deliveryRate: "96%",
    description: "Luxury real estate developer with branded residences by Versace and Cavalli.",
  },
  {
    id: "nakheel",
    nameEn: "Nakheel",
    nameAr: "نخيل",
    slug: "nakheel",
    featured: true,
    projectCount: 52,
    trustScore: 4.8,
    deliveryRate: "98%",
    description: "Master developer of Palm Jumeirah and The World Islands.",
  },
  {
    id: "meraas",
    nameEn: "Meraas",
    nameAr: "مراس",
    slug: "meraas",
    featured: true,
    projectCount: 38,
    trustScore: 4.6,
    deliveryRate: "97%",
    description: "Creator of Bluewaters Island, City Walk, and La Mer.",
  },
  {
    id: "sobha",
    nameEn: "Sobha Realty",
    nameAr: "صبحا ريالتي",
    slug: "sobha",
    featured: true,
    projectCount: 29,
    trustScore: 4.8,
    deliveryRate: "99%",
    description: "Premium developer known for exceptional quality and craftsmanship.",
  },
  {
    id: "dubai-properties",
    nameEn: "Dubai Properties",
    nameAr: "دبي العقارية",
    slug: "dubai-properties",
    featured: true,
    projectCount: 44,
    trustScore: 4.5,
    deliveryRate: "95%",
    description: "Developer of Business Bay and Jumeirah Beach Residence.",
  },
  {
    id: "azizi",
    nameEn: "Azizi Developments",
    nameAr: "عزيزي للتطوير",
    slug: "azizi",
    featured: true,
    projectCount: 67,
    trustScore: 4.4,
    deliveryRate: "94%",
    description: "Fast-growing developer with projects across Dubai's key locations.",
  },
  {
    id: "ellington",
    nameEn: "Ellington Properties",
    nameAr: "إلينغتون العقارية",
    slug: "ellington",
    featured: true,
    projectCount: 18,
    trustScore: 4.6,
    deliveryRate: "97%",
    description: "Design-led developer focused on lifestyle and community.",
  },
  {
    id: "binghatti",
    nameEn: "Binghatti Developers",
    nameAr: "بن غاطي للتطوير",
    slug: "binghatti",
    featured: true,
    projectCount: 35,
    trustScore: 4.5,
    deliveryRate: "95%",
    description: "Award-winning developer known for iconic architectural designs.",
  },
  {
    id: "omniyat",
    nameEn: "Omniyat",
    nameAr: "أمنيات",
    slug: "omniyat",
    featured: true,
    projectCount: 15,
    trustScore: 4.9,
    deliveryRate: "99%",
    description: "Ultra-luxury developer behind The Opus by Zaha Hadid.",
  },
  {
    id: "select-group",
    nameEn: "Select Group",
    nameAr: "سيلكت جروب",
    slug: "select-group",
    featured: true,
    projectCount: 22,
    trustScore: 4.6,
    deliveryRate: "96%",
    description: "Developer of Marina Gate and premium waterfront residences.",
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
    
    const slug = generateSlug(nameEn);
    
    // Check if this is a featured developer
    const featured = featuredDevelopers.find(
      f => f.nameEn.toLowerCase() === nameEn.toLowerCase() || 
           nameEn.toLowerCase().includes(f.nameEn.toLowerCase().split(' ')[0])
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
  
  // Add featured developers that might not be in CSV
  featuredDevelopers.forEach(featured => {
    if (!developers.some(d => d.id === featured.id)) {
      developers.push(featured);
    }
  });
  
  // Sort alphabetically
  return developers.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
}

// Alphabet for filtering
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
