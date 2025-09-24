# Puzzles Consulting — Next.js Starter

An IP-safe, production-ready Next.js starter that recreates the look-and-feel of disruptiveedge.com while using original styling, open media hooks, and comparable motion patterns. Built for modern studio/consultancy sites that need an impressive first impression and a maintainable codebase.

## Highlights

- Puzzles Consulting brand refresh with mint/iris palette, glassmorphism panels, and Inter typography
- New royalty-free inspired SVG set (`hero-grid.svg`, `pattern-drift.svg`, `pattern-orbit.svg`) ready for hero/case imagery swaps
- Sticky, shrinking navigation with smooth hash scrolling and ScrollTrigger-powered reveal choreography
- Hero with dual CTAs, radial glow treatment, and reusable CTA panels
- Services, case studies, thought leadership, testimonials, and careers stacks with GSAP batch animations
- Scroll-triggered, pinned case study showcase that snaps between stories on desktop
- Large interactive case study cards with tilt hover states and parallax scrub
- Thought leadership grid plus individual post templates ready for CMS/MDX wiring
- Page transition wrapper (Framer Motion) coexisting with GSAP ScrollTrigger for nuanced motion control
- `public/media/` SVG placeholders sized for AI-generated or open-source assets

## Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion 11](https://www.framer.com/motion/)
- [GSAP + ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [next-seo](https://github.com/garmeeh/next-seo)

## Project Structure

.
├─ app/
│  ├─ layout.tsx
│  ├─ template.tsx            # Page transition wrapper
│  ├─ page.tsx                # Home
│  ├─ what-we-do/page.tsx
│  ├─ who-we-are/page.tsx
│  ├─ work/page.tsx           # Case studies index
│  ├─ work/[slug]/page.tsx    # Case study detail
│  ├─ thoughts/page.tsx
│  ├─ thoughts/[slug]/page.tsx
│  ├─ careers/page.tsx
│  ├─ contact/page.tsx
│  ├─ not-found.tsx
│  ├─ globals.css
│  └─ reset.css
├─ components/
│  ├─ Header.tsx              # Sticky/shrinking nav with motion
│  ├─ Footer.tsx
│  ├─ SEOProvider.tsx         # next-seo integration
│  ├─ ScrollOrchestrator.tsx  # GSAP ScrollTrigger setup
│  ├─ PageTransition.tsx      # Framer Motion route animation
│  ├─ Section.tsx             # Shared spacing helper
│  ├─ Hero.tsx
│  ├─ ServiceTiles.tsx
│  ├─ CaseStudyCard.tsx
│  ├─ CaseStudyGrid.tsx
│  ├─ LogosCarousel.tsx
│  ├─ Testimonials.tsx
│  ├─ ThoughtsGrid.tsx
│  └─ CTASection.tsx
├─ lib/
│  ├─ data.ts                 # Demo content (services, case studies, posts)
│  └─ motion.ts               # Shared Framer Motion variants
├─ public/
│  └─ media/                  # Placeholder imagery, logos, avatars
├─ styles/
│  └─ tailwind.css            # Imported by app/globals.css
├─ next-seo.config.ts
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.mjs
├─ tsconfig.json
├─ package.json
├─ LICENSE (MIT)
└─ ATTRIBUTION.md

## Getting Started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # http://localhost:3000
```

### Build & Run

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Key Concepts

- **Motion system:** `ScrollOrchestrator.tsx` wires GSAP + ScrollTrigger for fade, stagger, and parallax scrubbing. Framer Motion still powers page transitions and 3D hover cards.
- **Interactive cards:** `CaseStudyCard.tsx` uses Framer Motion pointer tracking for subtle 3D tilt while ScrollTrigger batches grid reveals.
- **Sticky header:** `Header.tsx` reacts to scroll position with shrinking height, translucent backdrop, and variant states for active links.
- **Thought leadership:** `ThoughtsGrid.tsx` surfaces recent posts; detail templates live under `app/thoughts/[slug]/` and are ready for MDX/CMS wiring.
- **GSAP batching:** Any container with `data-batch="stagger"` automatically animates its children marked with `data-item` as it enters the viewport.
- **SEO defaults:** `next-seo.config.ts` configures OpenGraph/Twitter tags and title templates, injected through `SEOProvider`.

## Accessibility & Performance

- High-contrast palette (`night` + mint/iris accents) and generous typography aid readability.
- Keyboard focus utilities (`kbd-focus`) provide visible focus rings across interactive elements.
- `next/image` ensures responsive, optimized media.
- GSAP ScrollTrigger is registered once and only targets sections via data attributes, keeping motion manageable and tree-shake friendly.
