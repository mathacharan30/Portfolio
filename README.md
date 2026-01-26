# Matha Charan P - Portfolio (React + Vite)

Single-page responsive portfolio built with React (Vite) and plain CSS. Features a glassmorphism UI, smooth-scroll navigation, GitHub stats with 12h caching, and a mailto contact form. All content is editable in `src/data.js`.

## Quick start

1. Install deps
   - `npm install`
2. Run dev
   - `npm run dev`
3. Build for production
   - `npm run build`
   - Preview: `npm run preview`

## Edit your content

Open `src/data.js` and update:
- `siteMeta`: name, tagline, email, resumePath
- `socials`: GitHub, LinkedIn, LeetCode
- `skills`, `experience`, `projects`

Place your resume PDF at `public/Matha_Charan_resume.pdf` (or update `resumePath`). The Download buttons will trigger a browser download.

## GitHub stats

Stats are fetched client-side from GitHub's public REST API and cached in `localStorage` for 12 hours. No token required. The UI shows public repo count, followers, and a simple star tally from the first 100 repos.

## Accessibility & design

- Semantic HTML, keyboard-accessible menu, alt text, ARIA labels
- Mobile-first layout; navbar collapses to a hamburger on small screens
- Classic typography: Playfair Display (headings) + Inter (body), with safe fallbacks
- Glassmorphism styling with backdrop blur and soft shadows

## Project structure

- `src/data.js` - Single source of truth for copy/content
- `src/components/*` - Sections and UI pieces
- `src/utils/github.js` - GitHub stats fetcher with caching
- `src/styles/global.css` - Global styles and design tokens

## Deploy

The `dist/` directory from `npm run build` can be deployed to any static host (Netlify, GitHub Pages, Vercel static, S3, etc.).

