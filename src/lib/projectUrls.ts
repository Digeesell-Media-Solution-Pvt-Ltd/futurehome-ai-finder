// Helper to create slugs from developer names
export function createDeveloperSlug(developerName: string): string {
  return developerName
    .toLowerCase()
    .replace(/\s+properties$/i, '')
    .replace(/\s+realty$/i, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Generate project URL in format: /projects/{developer-slug}/{project-id}
export function getProjectUrl(projectId: string | number, developer: string): string {
  const developerSlug = createDeveloperSlug(developer);
  return `/projects/${developerSlug}/${projectId}`;
}

// Map of known projects to their developers for routing
export const projectDeveloperMap: Record<string, string> = {
  'breez': 'danube',
  'timez': 'danube',
  'sparklz': 'danube',
  'shahrukhz': 'danube',
  'aspirz': 'danube',
  'bayz102': 'danube',
  'oasiz': 'danube',
  'oasiz2': 'danube',
  'damac-islands-2': 'damac',
  'damac-district': 'damac',
  'chelsea-residences': 'damac',
  'safa-gate': 'damac',
  'riverside-views': 'damac',
  'violet-4': 'damac',
  'sun-city': 'damac',
  'damac-islands': 'damac',
  'shoreline': 'damac',
  'elo-3': 'damac',
  'burj-azizi': 'azizi',
  'aliyah': 'azizi',
  'creek-views': 'azizi',
  'aura': 'azizi',
  'binghatti-luxuria': 'binghatti',
  'binghatti-cullinan': 'binghatti',
  'binghatti-hillcrest': 'binghatti',
  'binghatti-titania': 'binghatti',
  'binghatti-vintage': 'binghatti',
  'samana-boulevard': 'samana',
  'samana-hills-south-3': 'samana',
  'samana-hills-south-2': 'samana',
  'samana-imperial': 'samana',
  'samana-sky-views': 'samana',
  'rukan-tower': 'reportage',
  'perla-prime': 'reportage',
  'r-hills': 'reportage',
  'via': 'reportage',
  'the-grove': 'sobha',
  'the-greens': 'sobha',
  'the-brooks': 'sobha',
  'the-pinnacle': 'sobha',
  'skyvue-altier': 'sobha',
  'city-walk-crestlane': 'meraas',
  'the-edit-d3': 'meraas',
  'nad-al-sheba-gardens': 'meraas',
  'mjl-nourelle': 'meraas',
  'jumeirah-emirates-tower': 'meraas',
  'meriden-beach': 'green-horizon',
  'damac-casa': 'damac',
  'volta': 'damac',
  'coral-reef': 'damac',
  'elegance-tower': 'damac',
  'canal-heights': 'damac',
  'la-tilia': 'dubai-properties',
  'mudon-al-ranim-7': 'dubai-properties',
  'mudon-al-ranim-5': 'dubai-properties',
  'eltiera-views': 'ellington',
  'meriva-collection': 'ellington',
  'salva': 'emaar',
  'grove-ridge': 'emaar',
  'vista-ridge': 'emaar',
  'murooj-al-furjan': 'nakheel',
  'tilal-al-furjan': 'nakheel',
  'canal-front-residences': 'nakheel',
  'alba-residences': 'omniyat',
  'orla-dorchester-collection': 'omniyat',
  'vela-viento-dorchester-collection': 'omniyat',
  'peninsula-four-the-plaza': 'select-group',
  'artistry-one-residences': 'select-group',
};
