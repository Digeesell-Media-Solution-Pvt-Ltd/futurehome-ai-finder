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

## Dugasta project images (extract URLs only – no download)

**displayRule:** Use image URLs directly from the official page; do not download; render images from source.

To **extract image URLs only** (no local download) from the official Moonsa Residences 2 page:

```bash
node scripts/extract-project-image-urls-dugasta.mjs [URL]
```

- **Default URL (sourcePage):** `https://dugasta.com/property/moonsa-residences-2/`
- **Method:** Parse HTML, extract `<img>` `src` attributes; filter out icons/logos and images smaller than 400px; prioritize large renders and banners.
- **Output:** Hero URL (largest exterior render) and gallery URLs. Paste them into `src/data/projects.ts` as `hero_image` and `gallery_images` (full URLs). The app renders them directly from the source (dugasta.com).
- **gridImage:** Use the same hero URL for the project listing card (dataset `hero_image`).
- **strictRestrictions:** No AI images, no stock images, no placeholders. If the page is 404 or no images are found, leave `hero_image` and `gallery_images` empty.

## Fetch Dugasta project images (download to local – optional)

To **download** images locally instead of using source URLs:

```bash
node scripts/fetch-project-images-dugasta.mjs [URL]
```

- **Output folder:** `public/projects/dugasta-properties/moonsa-residences-2/`
- Use when you prefer local assets over rendering from source.
