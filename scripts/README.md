# Scripts

## Audit project images

Run the image audit to list projects that have missing, broken, or placeholder images (or empty gallery):

```bash
node scripts/audit-project-images.mjs
```

The audit checks:

- **Central dataset:** `src/data/projects.ts`
- **Hero:** null, empty, external URL, or local path that does not exist under `public/`
- **Gallery:** empty array or any external URLs or local paths that do not exist

**UI rules (enforced):** No external image URLs are used in the UI. All images must be local. Projects with external or broken paths use `/placeholder.svg` or `null` (fallback to `getHeroImage(slug)` where available).

### After audit

- Projects still listed with **placeholder** or **empty gallery** can be improved by fetching images from **official developer sources only** (e.g. Emaar → `cdn.properties.emaar.com`, Meraas → `meraas.com`, Select Group → `select-group.ae`).
- Store downloaded images under: `public/projects/{developerSlug}/{projectSlug}/`
- Update only `hero_image` and `gallery_images` in `src/data/projects.ts`; do not change filter keys (developerSlug, areaSlug, tags, etc.).

## Fetch Dugasta project images

To **automatically extract and download** real project images from an official Dugasta project page (e.g. Moonsa Residences 2):

```bash
node scripts/fetch-project-images-dugasta.mjs [URL]
```

- **Default URL:** `https://dugasta.com/property/moonsa-residences-2/`
- **Output folder:** `public/projects/dugasta-properties/moonsa-residences-2/`
- **Strategy:** Loads page HTML, scans `<img>`, `<picture>`, `<source>`, and `background-image` URLs, keeps same-domain (dugasta.com) only, skips icons/logos and small thumbnails (<400px hint), prioritises hero/banner/render, downloads as `hero.<ext>`, `01.<ext>`, `02.<ext>`, …
- **Accepted types:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **After run:** The script prints the exact `hero_image` and `gallery_images` to paste into `src/data/projects.ts` for the project. The project detail page and grid read from the central dataset, so no other code changes are needed.
- If the page returns 404 or no images are found, leave `hero_image` and `gallery_images` empty; the UI shows placeholder and “Official images will appear here once they are available” (no fake images).
