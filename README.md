# Ahmed Asif — Portfolio (FOLLOW.ART-styled)

A restyle of the developer portfolio, structurally modeled on
[follow.art](https://follow.art)'s landing page: an oversized headline hero
with floating sticker doodles, a bulleted "how it works" block, a numbered
4-feature "centralize" grid, a scrolling strip (theirs was testimonial
photos — this one is a tech-stack marquee), a community section, and a big
closing CTA band.

## Design

- **Palette:** warm cream (`#FBF6EE`) background, near-black ink text,
  vivid orange (`#F2753A`) as the single accent, with sky-blue and moss-green
  used only in the decorative stickers.
- **Type:** Plus Jakarta Sans (bold, rounded, chunky — display and body),
  IBM Plex Mono for labels/eyebrows.
- **Signature element:** hand-drawn SVG stickers (star, spiral, smiley,
  flower, loop-arrows) that gently float around the hero and closing CTA —
  the page's own take on the reference site's scattered icon motif.

## ⚠️ Placeholders still to replace before publishing

| File | What to change |
|---|---|
| `src/components/Contact.jsx` | LinkedIn URL (still `linkedin.com/in/replace-me`) |
| `src/components/Work.jsx` | Real repo links for each project |

Your photo (`public/images/ahmed.jpg`) and email are already wired in.

## Running locally

```bash
npm install
npm run dev
```

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Vite (`npm run build`, output `dist`). Click Deploy.

Or via CLI: `npm install -g vercel && vercel --prod`.
