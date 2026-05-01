import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { createRequire } from "module";

// vite-plugin-prerender's .mjs file incorrectly uses require() (packaging bug).
// Load the working CJS build directly via createRequire.
const _require = createRequire(import.meta.url);
const vitePrerender = _require("vite-plugin-prerender") as ((opts: Record<string, unknown>) => unknown) & {
  PuppeteerRenderer: new (opts: Record<string, unknown>) => unknown;
};

// ---------------------------------------------------------------------------
// Static routes to prerender at build time.
// Rules:
//   ✅ Include every route that has a dedicated static or programmatic page.
//   ❌ Exclude dynamic fallbacks (/projects/:dev/:id), user-only pages
//      (/saved), admin panels (/Masterdatapannel), and onboarding forms.
// ---------------------------------------------------------------------------

const CORE_ROUTES = [
  "/",
  "/ai-search",
  "/projects",
  "/insights",
  "/developers",
  "/areas",
  "/blog",
  "/contact",
  "/about",
  "/disclaimer",
  "/advertising-policy",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy",
  "/faq",
];

// All individually-imported project detail pages (from src/App.tsx)
const PROJECT_ROUTES = [
  // Danube
  "/projects/danube/breez",
  "/projects/danube/timez",
  "/projects/danube/sparklz",
  "/projects/danube/shahrukhz",
  "/projects/danube/aspirz",
  "/projects/danube/bayz102",
  "/projects/danube/oasiz",
  "/projects/danube/oasiz2",
  // DAMAC
  "/projects/damac/damac-islands-2",
  "/projects/damac/damac-district",
  "/projects/damac/chelsea-residences",
  "/projects/damac/safa-gate",
  "/projects/damac/riverside-views",
  "/projects/damac/violet-4",
  "/projects/damac/sun-city",
  "/projects/damac/damac-islands",
  "/projects/damac/shoreline",
  "/projects/damac/elo-3",
  "/projects/damac/damac-casa",
  "/projects/damac/volta",
  "/projects/damac/coral-reef",
  "/projects/damac/elegance-tower",
  "/projects/damac/canal-heights",
  // Azizi
  "/projects/azizi/burj-azizi",
  "/projects/azizi/aliyah",
  "/projects/azizi/creek-views",
  "/projects/azizi/aura",
  "/projects/azizi/azizi-david",
  // Other developers (single project)
  "/projects/prestige-one/prestige-one-residences",
  "/projects/prysm/sunvale",
  "/projects/tranquil/blossom-40",
  "/projects/adaan/art-house-hills",
  "/projects/dugasta-properties/moonsa-residences-2",
  // Binghatti
  "/projects/binghatti/binghatti-luxuria",
  "/projects/binghatti/binghatti-cullinan",
  "/projects/binghatti/binghatti-hillcrest",
  "/projects/binghatti/binghatti-titania",
  "/projects/binghatti/binghatti-vintage",
  // Samana
  "/projects/samana/samana-boulevard",
  "/projects/samana/samana-hills-south-3",
  "/projects/samana/samana-hills-south-2",
  "/projects/samana/samana-imperial",
  "/projects/samana/samana-sky-views",
  // Reportage
  "/projects/reportage/rukan-tower",
  "/projects/reportage/perla-prime",
  "/projects/reportage/r-hills",
  "/projects/reportage/via",
  // Sobha
  "/projects/sobha/the-grove",
  "/projects/sobha/the-greens",
  "/projects/sobha/the-brooks",
  "/projects/sobha/the-pinnacle",
  "/projects/sobha/skyvue-altier",
  // Meraas
  "/projects/meraas/city-walk-crestlane",
  "/projects/meraas/city-walk-crestlane-4",
  "/projects/meraas/city-walk-crestlane-5",
  "/projects/meraas/the-edit-d3",
  "/projects/meraas/nad-al-sheba-gardens",
  "/projects/meraas/nad-al-sheba-gardens-phase-11",
  "/projects/meraas/mjl-nourelle",
  "/projects/meraas/jumeirah-emirates-tower",
  // Other single-project developers
  "/projects/green-horizon/meriden-beach",
  "/projects/dubai-properties/la-tilia",
  "/projects/dubai-properties/mudon-al-ranim-5",
  "/projects/dubai-properties/mudon-al-ranim-7",
  // Ellington
  "/projects/ellington/eltiera-views",
  "/projects/ellington/meriva-collection",
  "/projects/ellington/windsor-house-ii",
  // Emaar
  "/projects/emaar/salva",
  "/projects/emaar/grove-ridge",
  "/projects/emaar/vista-ridge",
  "/projects/emaar/albero-at-dubai-creek-harbour",
  "/projects/emaar/golf-meadow-at-emaar-south",
  "/projects/emaar/golf-verge-at-emaar-south",
  "/projects/emaar/golf-dale-at-emaar-south",
  "/projects/emaar/parkwood-at-dubai-hills-estate",
  "/projects/emaar/sera-1",
  "/projects/emaar/sera-2",
  "/projects/emaar/grand-polo-chevalia-estate-2",
  "/projects/emaar/grand-polo-equiterra-2",
  "/projects/emaar/ovelle-at-the-valley",
  "/projects/emaar/palace-residences-hillside-b",
  // Other developers
  "/projects/chaimaa/symphony-by-chaimaa",
  "/projects/laraix/zyra-hills",
  // Nakheel
  "/projects/nakheel/palm-central-private-residences",
  "/projects/nakheel/tilal-al-furjan",
  "/projects/nakheel/canal-front-residences",
  "/projects/nakheel/murooj-al-furjan",
  // Omniyat
  "/projects/omniyat/alba-residences",
  "/projects/omniyat/orla-dorchester-collection",
  "/projects/omniyat/vela-viento-dorchester-collection",
  // Select Group
  "/projects/select-group/peninsula-four-the-plaza",
  "/projects/select-group/artistry-one-residences",
  "/projects/select-group/artistry-two-residences",
  "/projects/select-group/jumeirah-living-business-bay",
  "/projects/select-group/six-senses-residences-dubai-marina",
  // Other
  "/projects/amis/derby-heights",
  "/projects/viva/art-house-private-residences",
  "/projects/imtiaz/sea-cliff-by-imtiaz",
  "/projects/holm/linea-by-holm",
  "/projects/dubai-south-properties/hayat-dubai-south",
];

// All named area detail pages (from src/App.tsx — /areas/:areaId wildcard excluded)
const AREA_ROUTES = [
  "/areas/dubai-marina",
  "/areas/downtown-dubai",
  "/areas/palm-jumeirah",
  "/areas/business-bay",
  "/areas/dubai-hills",
  "/areas/jvc",
  "/areas/dubai-creek-harbour",
  "/areas/meydan",
  "/areas/al-marjan-island",
  "/areas/dubai-south",
  "/areas/dubai-sports-city",
  "/areas/al-furjan",
  "/areas/dubai-silicon-oasis",
  "/areas/damac-hills",
  "/areas/sheikh-zayed-road",
];

// Developer hub pages — slugs must match src/data/developers.ts
const DEVELOPER_ROUTES = [
  "/developers/select-group",
  "/developers/danube",
  "/developers/emaar",
  "/developers/damac",
  "/developers/nakheel",
  "/developers/meraas",
  "/developers/sobha",
  "/developers/dubai-properties",
  "/developers/azizi",
  "/developers/ellington",
  "/developers/binghatti",
  "/developers/omniyat",
];

// Programmatic SEO pages — slugs sourced from src/data/programmatic/*.seed.ts
const PROGRAMMATIC_ROUTES = [
  // /off-plan-projects/:areaSlug — areas.seed.ts
  "/off-plan-projects/dubai-marina",
  "/off-plan-projects/downtown-dubai",
  "/off-plan-projects/palm-jumeirah",
  // /off-plan-by-developer/:developerSlug — developers.seed.ts
  "/off-plan-by-developer/emaar",
  "/off-plan-by-developer/damac",
  "/off-plan-by-developer/sobha",
  // /blog/:topicSlug — blog.seed.ts
  "/blog/dubai-off-plan-payment-plans-guide",
  "/blog/why-invest-off-plan-dubai-2026",
  "/blog/is-off-plan-worth-it-dubai",
  "/blog/best-areas-invest-dubai",
  "/blog/off-plan-vs-ready-dubai",
  "/blog/off-plan-projects-jvc-dubai",
  "/blog/best-off-plan-projects-dubai-marina",
];

const ALL_PRERENDER_ROUTES = [
  ...CORE_ROUTES,
  ...PROJECT_ROUTES,
  ...AREA_ROUTES,
  ...DEVELOPER_ROUTES,
  ...PROGRAMMATIC_ROUTES,
];

// ---------------------------------------------------------------------------

export default defineConfig(({ mode }) => ({
  server: {
    // Listen on IPv4 so http://127.0.0.1:8080 works on macOS ( "::" is often IPv6-only and breaks browsers ).
    host: "0.0.0.0",
    port: 8080,
    strictPort: false,
    open: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Lower the JS target so esbuild transpiles ES2020 operators (optional chaining `?.`
    // and nullish coalescing `??`) to older syntax.  This is required because
    // vite-plugin-prerender bundles Puppeteer 1.20 / Chromium 78, which predates those
    // operators.  Production users on modern browsers are unaffected — the transpiled
    // output is functionally identical and only marginally larger.
    target: "chrome79",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-popover",
            "@radix-ui/react-label",
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
          ],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-supabase": ["@supabase/supabase-js"],
          "vendor-motion": ["framer-motion"],
          "vendor-icons": ["lucide-react"],
          "vendor-charts": ["recharts"],
          "vendor-utils": ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Prerender is production-only — skipped during `vite dev` and `vite build --mode development`
    mode !== "development" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: ALL_PRERENDER_ROUTES,
        renderer: new vitePrerender.PuppeteerRenderer({
          // Wait 5 s after page load before snapshotting so that
          // TanStack Query / Supabase fetches have time to resolve.
          renderAfterTime: 5000,
          headless: true,
          // Render up to 4 routes concurrently to keep build time reasonable.
          maxConcurrentRoutes: 4,
          // Required when Chromium runs as root (CI containers, Docker, etc.)
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        }),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
