# Aurvium

Marketing site for **Aurvium** — an independent finance architecture studio that designs the
systems (revenue recognition, billing pipelines, ERP integration, MRR/ARR reporting) a scaling
finance function runs on.

React + Vite + Tailwind. Static SPA, no backend.

---

## Getting started

```bash
npm install
npm run dev
```

Dev server runs on <http://localhost:5173>.

| Script | Does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Oxlint |

---

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/approach` | Approach |
| `/work` | Notes |
| `/about` | About |
| `/contact` | Contact |
| `/privacy` | Privacy policy |
| `*` | 404 |

Routes are lazy-loaded (`React.lazy`) and wrapped in an `ErrorBoundary`, so a render error shows a
branded fallback instead of a blank page.

---

## Project layout

```
src/
  components/
    Layout.jsx        header + footer shell, sticky nav
    Figure.jsx        all charts/diagrams (SVG, dummy data)
    Equation.jsx      mono equation block
    ChannelRule.jsx   gold divider echoing the logo's channel
    Icon.jsx          inline SVG icons
    Seo.jsx           per-page title/meta/OG
    ErrorBoundary.jsx
  pages/              one file per route
  index.css           design tokens + utilities
tailwind.config.js    palette, type scale, spacing
```

---

## Design system

Follows the Aurvium brand system. Full palette and type spec live in the brand document; the
working values are in `tailwind.config.js`.

**Colour**

| Token | Hex | Use |
| --- | --- | --- |
| `iron-ink` | `#1A1916` | Ink, mark, primary text |
| `primary` (Aurum) | `#B8922A` | The one accent — rules and hairlines only |
| `primary-container` (Gilt) | `#D4AF5A` | Gold on dark grounds |
| `background` (Parchment) | `#FEF9ED` | Page ground |
| `stone` | `#4E4636` | Secondary text |

Gold is an accent, never a fill or a glow.

**Type** — three roles, two families:

- `DM Serif Display` — headlines, wordmark (`font-display-lg`, `font-headline-md`)
- `IBM Plex Sans` — body copy (`font-body-md`, `font-body-lg`)
- `IBM Plex Mono` — eyebrows, labels, nav, buttons, figures (`font-eyebrow-mono`, `font-label-sm`)

**Layout** — full-bleed. `max_width` is `100%` with a fluid `px-gutter`
(`clamp(24px, 3vw, 56px)`); content is not capped in a centred column.

**Background** — one continuous vertical gradient on `body`
(`#FEF9ED → #E9E2D2`, fixed) so sections never show hard colour seams. Dark bands sit at the end
of the page and fade into the footer:

```
quote band   .band-darkest         #0D0C09
CTA band     .band-fade-to-footer  #0D0C09 → #262420
footer       .band-footer          #262420
```

The CTA gradient ends on exactly the footer colour, so the footer looks identical on every page.

**Buttons** — pills (`.btn-pill` + `.btn-primary` / `.btn-ghost` / `.btn-gold` / `.btn-on-dark`).

> ⚠️ `.btn-pill` sets its own `display`, which beats Tailwind's `hidden` (same specificity, later in
> the cascade). To hide a pill responsively, put the `hidden md:block` on a **wrapper**, not on the
> button itself. The header CTA does this.

---

## Charts

`Figure.jsx` renders hand-built SVG charts. **All data is dummy/illustrative** — every figure is
labelled `Illustrative` in its header. Swap the arrays in each chart function when real numbers
arrive.

| Variant | Shows |
| --- | --- |
| `growth` | Revenue rising over time |
| `waterfall` | MRR bridge: New + Expansion − Contraction − Churn |
| `revrec` | Revenue recognition schedule / deferred burndown |
| `cycletime` | Days-to-close shrinking per quarter |
| `converge` | Two systems reconciling to one number |
| `breakpoint` | Manual cost vs. ARR, with the $10–15M band |
| `flow` | Stripe → pipeline → ERP → reporting |

Pass `bare` to drop the card chrome when the figure sits inside a tile that already has a border.

`Equation.jsx` renders the reconciliation identity:

```
System A − System B = Σ(timing) + Σ(definition) + Σ(data errors)
```

---

## Animation policy

**Content is never gated behind an animation.** Scroll-triggered reveals (`whileInView`) previously
left whole sections stuck at `opacity: 0` when the observer didn't fire. Content sections now render
static or animate on mount — never from `opacity: 0` tied to a scroll trigger.

Framer Motion is still used for page transitions and the Home sticky showcase, which defaults to a
visible state.

Two gotchas worth remembering:

- `overflow-hidden` on an ancestor **breaks `position: sticky`**. The Home "What Changes" section
  and the Notes article rails depend on this.
- A sticky element needs a parent tall enough to travel in — the column must stretch to the row
  height (`items-stretch` + `h-full`), not shrink to the sticky child.

---

## Contact form

`src/pages/Contact.jsx` has validation, submitting/success/error states, and a honeypot.

`FORM_ENDPOINT` at the top of the file is **empty**. While empty, submissions fall back to opening
the visitor's mail client. Set it to a form endpoint (Formspree, Basin, a serverless function) to
deliver straight to an inbox — the success message adapts automatically.

---

## Known gaps

- SEO meta is client-rendered. For reliable crawling and social previews the site should be
  prerendered / SSG'd (e.g. `vite-react-ssg`).
- No tests.
- Security headers (CSP etc.) need to be set at the host — it's a static build.
