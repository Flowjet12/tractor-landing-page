# Right Size Land & Tractor Landing Page

A production-ready Next.js landing page for an owner-operated tractor and land management business serving the Texas Hill Country and greater San Antonio area.

## What is included

- Sticky navigation with prominent phone and quote CTAs
- Conversion-focused hero section
- Service cards for brush clearing, driveway grading, dirt work, pad prep, drainage, brush hogging, large lawn maintenance, and acreage improvement
- Why-choose-us section positioning the business between DIY rental hassle and large-contractor minimums
- Before/after project gallery placeholders
- Texas Hill Country / San Antonio service-area content
- Testimonials
- Static-friendly contact form that opens a prefilled email quote request
- SEO metadata for land clearing Texas, driveway grading, tractor services near me, brush clearing, and dirt work
- Cloudflare Pages static export configuration

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production build

```bash
npm run build
```

Next.js is configured with `output: 'export'`, so the static production site is written to the `out/` directory.

## Cloudflare Pages deployment

Use these settings in Cloudflare Pages:

- **Framework preset:** Next.js (static export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** 20 or newer

This repo also includes:

- `wrangler.toml` with `pages_build_output_dir = "out"`
- `public/_headers` for baseline security headers copied into `out/`
- `public/_redirects` placeholder for future redirects copied into `out/`

## Customization checklist

Before going live, replace the sample business details with the real ones:

- Phone number in `components/LandingPage.tsx` and `components/ContactForm.tsx`
- Email address in `components/ContactForm.tsx`, `components/LandingPage.tsx`, and metadata if desired
- `metadataBase` in `app/layout.tsx`
- Social profile placeholders in the footer
- Before/after placeholders with real project photos
- Service-area city list if the business covers a different part of Texas
