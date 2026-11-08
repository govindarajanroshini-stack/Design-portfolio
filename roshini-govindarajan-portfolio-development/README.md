# Roshini Govindarajan — Portfolio

A black-and-white editorial portfolio for **Roshini Govindarajan** — UX Researcher · Product
Designer · Behavioural Designer, based in Chennai, India.

The visual identity follows Swiss typographic and archival newspaper principles: a near-black
canvas (`#171717`), warm off-white text (`#F3F1EA`), hairline dividers (`#B8B4AA`) and one muted
red accent (`#C9362B`) reserved for meaningful emphasis. Typography is Newsreader (editorial
serif) paired with Inter (supporting sans).

## Stack

- React + TypeScript (Vite build)
- Tailwind CSS v4 for utility scaffolding, with a bespoke CSS design system in `src/index.css`
- react-router-dom (hash routing, so the static build works on any static host)
- lucide-react for iconography
- All diagrams are hand-built inline SVG components (`src/components/diagrams.tsx`) — no chart
  libraries, no fabricated screenshots

## Structure

```
public/
  images/            Editorial artwork (monochrome, red-accent)
  robots.txt
  sitemap.xml        Update the placeholder domain before submitting
src/
  data/content.ts    Single source of truth: projects, experience, capabilities, contact
  components/
    layout.tsx       Header, mobile menu, footer, progress bar, back-to-top
    ui.tsx           Scroll reveals, section headers, figure captions, journey navigation
    case.tsx         Case-study scaffolding: hero, scroll-spy contents rail, story sections
    diagrams.tsx     Seventeen editorial 16:9 SVG figures (one shared art direction)
  pages/
    Home.tsx
    Work.tsx                One unified six-project collection
    About.tsx
    Contact.tsx
    Resume.tsx
    CaseFormula.tsx         01 — Making Custom Formula Creation More Intuitive
    CaseUnifiedQA.tsx       02 — Bringing Accessibility and Design System QA Together
    CaseCrawler.tsx         03 — Beyond a Single URL: Exploring a Universal Crawler
    CaseInkTales.tsx        04 — InkTales: A Comic Rental App Experience (personal)
    CaseBikessy.tsx         05 — Bikessy: Vintage Motorcycles Online (personal)
    CaseBrandBeyond.tsx     06 — Brand & Beyond: brand communication across visual design,
                                 photography, video & social media (selected creative work)
  App.tsx            Routes, legacy-slug redirects, per-page <title>, scroll restoration
```

## Dropping in the original Bikessy & InkTales screenshots

The two personal case studies ship with **clearly labelled placeholder plates** wherever an original
screenshot belongs — no recreations or AI substitutes are used. To finalise the pages, export the
original screens into these exact locations (JPG/PNG), then swap the `<Plate …/>` elements for the
images:

```
public/images/bikessy/   cover.jpg · hero.jpg · direction.jpg · home.jpg · about.jpg ·
                         services.jpg · contact.jpg
public/images/inktales/  cover.jpg · overview.jpg · challenge.jpg · discovery.jpg ·
                         categories.jpg · details.jpg · rental.jpg · reading.jpg · library.jpg ·
                         final-home.jpg · final-details.jpg · final-rental.jpg · final-reading.jpg
```

Each plate's `hint` attribute names its target file. Keep originals untouched: never recolour,
re-type, crop key content or present them at distorted aspect ratios.

## Develop & build

```bash
npm install
npm run dev       # local development
npm run build     # production build → dist/
npm run preview   # preview the production build
```

The build is a static site — deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages,
Cloudflare Pages). No server code is required.

## Deployment checklist (security & SEO)

1. Serve over **HTTPS** only.
2. Set security headers on the host:
   - `Content-Security-Policy`: `default-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' data:; script-src 'self'; connect-src 'self'; frame-ancestors 'none'`
   - `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
     `Permissions-Policy: camera=(), microphone=(), geolocation=()`
3. Replace the placeholder domain in `public/sitemap.xml` / `public/robots.txt` with the real
   one, and add a `<link rel="canonical">` per deploy target.
4. External links open with `rel="noopener noreferrer"`. No API keys, form backends or
   third-party trackers exist in this codebase.

## Content integrity

The Work section tells one journey in three independent, first-person case studies:

1. **Making Custom Formula Creation More Intuitive** — a prototype proposal; the team refined the
   interaction and the progressive-datapoint-selection idea was carried into the product.
2. **Bringing Accessibility and Design System QA Together** — a redesign exploration plus an
   evaluation of the QA platform's own compliance output, presented to both connected teams. The
   platform's detailed error descriptions are presented as an existing capability; the single-URL
   crawl is presented as the identified key limitation; mobile accessibility and component
   detection are flagged as future opportunities only.
3. **Beyond a Single URL: Exploring a Universal Crawler** — a proposed concept grounded in a
   mandatory interaction rulebook, handed over to developers. Playwright is described strictly as
   the platform's existing automation context. Implementation is in progress by the development
   team — not by the designer.

- Enterprise work is anonymised; all seventeen figures are original conceptual diagrams, not
  internal interfaces or screenshots. The employer is never named inside the case studies.
- No invented metrics, interviews, test results, testimonials or client logos appear anywhere.
- The resume page renders verified history on screen, and every "Download Resume" button (About +
  Resume pages) points to `/documents/roshini-govindarajan-resume.pdf`. To activate downloads,
  place the real PDF at `public/documents/roshini-govindarajan-resume.pdf` and redeploy — no code
  changes needed. (`public/documents/README.txt` repeats the instruction.)
- Project artwork labelled "Editorial representation" is a visual placeholder by design;
  replace with approved project visuals when supplied.

## Accessibility

Semantic landmarks, skip link, heading hierarchy, visible `:focus-visible` rings
(accent-coloured), `aria-current` on active nav/chapter items, Escape-to-close mobile menu with
focus return, descriptive alt text, and full `prefers-reduced-motion` support (animations and
smooth scrolling are disabled).
