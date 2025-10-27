# Copilot Instructions for Tins Pham's Docs

## Project Overview

This is a personal documentation/blog site built with **Next.js 15 + Nextra 4** (a Next.js-based static site generator for documentation). The site uses **pnpm** as the package manager and features Pagefind for search functionality.

## Architecture & Key Patterns

### Content Structure

- **Content location**: All MDX files live in `src/content/`
- **Navigation**: `src/content/_meta.js` defines the sidebar order and page titles
  - Format: `export default { "file-slug": "Display Title" }`
  - The key must match the MDX filename (without extension)
- **Routing**: Next.js catch-all route at `src/app/[[...mdxPath]]/page.tsx` handles all MDX pages dynamically

### Component Integration

- **Custom components**: Import React components directly in MDX files (e.g., `import Banner from "../components/Banner"`)
- **MDX components**: Extended via `mdx-components.js` which merges with Nextra theme defaults
- **Layout components**: Banner, Navbar, and Footer are configured in `src/app/layout.tsx` and passed to Nextra's Layout

### Configuration Pattern

- **Site metadata**: Centralized in `src/config.ts` as the `SITE` constant
- **Nextra config**: Located in `next.config.mjs` with key settings:
  - `latex: true` - LaTeX math support enabled
  - `defaultShowCopyCode: true` - Copy buttons on code blocks
  - `staticImage: true` - Static image optimization
  - `images.unoptimized: true` - Disables Next.js image optimization

## Development Workflows

### Local Development

```bash
pnpm dev  # Starts dev server with Turbopack
```

### Building & Search Index

```bash
pnpm build  # 1. Builds Next.js app, 2. Generates Pagefind search index
```

**Important**: The `postbuild` script runs Pagefind automatically to index `.next/server/app` → `public/_pagefind`. Never run build commands separately.

### Adding New Content

1. Create `src/content/new-page.mdx`
2. Add entry to `src/content/_meta.js`: `"new-page": "Display Title"`
3. The page auto-generates at `/new-page` route

## Project-Specific Conventions

### Component Imports

- Use `@/` alias for absolute imports (e.g., `@/config`, `@/components/Footer`)
- Import components from `src/components/` in MDX using relative paths: `../components/ComponentName`

### Styling

- Uses Tailwind CSS 4 with PostCSS
- Nextra theme styles imported in `layout.tsx`: `import "nextra-theme-docs/style.css"`
- Custom styling should extend Nextra's theme, not replace it

### Metadata & SEO

- Metadata configured in `layout.tsx` with Next.js 15's `Metadata` API
- Template pattern: `%s - ${SITE.title}` for consistent page titles
- Edit link points to GitHub: `docsRepositoryBase` in Layout config

### TypeScript

- Strict mode enabled via `tsconfig.json`
- Use `type` imports: `import type { Metadata } from "next"`
- Disable ESLint during builds: `eslint.ignoreDuringBuilds: true` in next.config.mjs

## Key Files Reference

- `src/config.ts` - Site-wide constants and URLs
- `src/content/_meta.js` - Page navigation structure
- `src/app/layout.tsx` - Global layout, metadata, and Nextra configuration
- `next.config.mjs` - Nextra and Next.js build configuration
- `package.json` - Note the `postbuild` script for search indexing

## Testing Changes

After editing content or components, verify:

1. Dev server hot-reloads correctly (`pnpm dev`)
2. Build succeeds with search index generation (`pnpm build`)
3. Check `_meta.js` if new pages don't appear in sidebar
