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
