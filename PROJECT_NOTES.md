# Nexus Verium Project Notes

## Architecture Overview

This project is built on **Next.js 15+ (App Router)** using **TypeScript** and **Tailwind CSS v4**.

### Key Directories
- `/src/app`: Routes and Page components.
- `/src/components`: Reusable UI components.
- `/src/lib/pseo`: The brain of the programmatic SEO engine.
- `/content/blog`: MDX files for the blog.

## Programmatic SEO Strategy

We use a "matrix" approach to generate high-value landing pages at scale without spamming.
- **Services**: Defined in `src/lib/pseo/data.ts` (e.g., Environmental Monitoring).
- **Contexts**: Defined in `src/lib/pseo/data.ts` (e.g., Wetlands).
- **Generator**: `src/lib/pseo/generator.ts` combines these to create unique content for `/services/[service]/[context]`.

### How to Add New Pages
1. **Add a Service**: Edit `services` array in `src/lib/pseo/data.ts`.
2. **Add a Context**: Edit `contexts` array in `src/lib/pseo/data.ts`.
3. **Customize Logic**: If needed, update `generateCombination` in `src/lib/pseo/generator.ts` to handle new nuances.

The site automatically generates routes, sitemaps, and metadata for all valid combinations.

## Blog Engine

Posts are stored as `.mdx` files in `/content/blog`.
- Frontmatter (title, date, tags) is required.
- Place images in `/public/images/blog` and reference them as `/images/blog/filename.jpg`.

## SEO Checklist

- [x] **Dynamic Metadata**: All pages generate unique title/description tags.
- [x] **JSON-LD Schema**:
  - `Organization` on Home/Team pages.
  - `Service` on pSEO pages.
  - `FAQPage` on pSEO pages.
  - `BlogPosting` on Blog pages.
- [x] **Sitemap**: `/sitemap.xml` is auto-generated including all pSEO routes.
- [x] **Semantic HTML**: Proper `header`, `nav`, `main`, `footer`, `article` tags used throughout.

## Deployment

1. **Build**: `npm run build`
2. **Start**: `npm run start`

The site is designed to be hosted on Vercel or any Node.js compatible host.
