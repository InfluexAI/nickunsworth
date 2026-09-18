# Nick Unsworth — Brand & Digital Design System

A personal-brand design system for entrepreneur, speaker, and coach **Nick Unsworth**. Built by extracting the strongest visual DNA from the reference site lifeonfire.com — high-energy warm gradients, bold display type, editorial event photography, faith-driven optimism — and evolving it into an **independent, premium personal-brand identity** for Nick himself. This is deliberately **not** a Life on Fire clone or rebrand: no flame icon, no "Life on Fire" wordmark, no copied logos.

## Sources
- Reference site: https://lifeonfire.com/ and https://lifeonfire.com/speaking-media/ (inspected via live fetch — the site renders through Elementor/WordPress, so literal computed `font-family` values weren't extractable from a text fetch; typographic choices below are read off the rendered screenshots and rebuilt with a documented Google Fonts fallback stack — see Typography Inventory).
- User uploads: `uploads/homepage.png` (lifeonfire.com homepage, full scroll), `uploads/header image 2.png`, `uploads/image 2.png`, `uploads/image 3.png` (live event/stage photography of Nick speaking).
- **Note on uploaded photography:** all four reference images carry the existing "Life on Fire" wordmark/flame mark prominently (screens, backdrops, stage signage). Per the brand rule against reusing that identity, none were copied into `assets/` — they were used only as *photography-direction* reference (lighting, crowd energy, stage composition). Real, logo-free photos of Nick should replace the placeholders in `ui_kits/website/` and the `assets/` folder when available — see Caveats at the bottom.

## What's in this project
- `styles.css` — single global entry point, imports everything under `tokens/`.
- `tokens/` — colors, typography scale, spacing, radius, shadows, gradients, fonts, base resets.
- `assets/` — logo lockup specimens (HTML, see below), no bitmap/photo assets yet (see Caveats).
- `guidelines/` — foundation specimen cards shown in the Design System tab (colors, type, gradients, spacing, shadows, radius, logo).
- `components/` — reusable React primitives: `core/` (Button, Badge, Divider, SectionHeading), `cards/` (Card, TestimonialCard), `forms/` (Input, Accordion), `navigation/` (LogoStrip).
- `ui_kits/website/` — a homepage-style demo screen for a Nick Unsworth marketing site, composed from the components above.
- `SKILL.md` — Claude Code / Agent Skills–compatible entry point for this design system.

## Typography Inventory
Real, user-supplied font files now power the system (`assets/fonts/`, declared in `tokens/fonts.css`), mapped to the roles visible on the lifeonfire.com homepage screenshot:

| Role | Observed on homepage | Nick Unsworth system |
|---|---|---|
| Headlines (H1/H2/H3, hero "God-Given") | Bold condensed serif display, tight tracking | **Superior Title** |
| Titles / eyebrows / kickers ("UNLEASH YOUR" style labels) | Small uppercase tracked label above headlines | **Superior Title** (300), uppercase, +0.1em tracking |
| Subheadlines & quotes ("Unleash Your God-Given Potential" tagline, testimonial leads) | Lighter italic serif supporting line | **ITC Blair** italic, weight 500 |
| Headline emphasis / script accent words ("potential", "Movement", "Family") | Loose handwritten brush script | **Rockness** |
| Body / UI / nav / buttons | Clean grotesque sans | **Poppins** 400–700 |

All font files were supplied directly by the user and copied into `assets/fonts/`; no substitutions remain.

## Content Fundamentals
- **Voice:** first-person, direct, second-person address ("you") — speaks TO the reader, entrepreneur-to-entrepreneur. Short declarative sentences mixed with one long momentum-building sentence per section.
- **Casing:** headlines are sentence case or Title Case, never full paragraphs of caps; CTAs and eyebrows are UPPERCASE with tracking for authority/urgency.
- **Signature vocabulary:** momentum, ignite, unstoppable, breakthrough, authority, movement, impact, action — verbs of transformation, not passive description.
- **CTAs are commands:** "Work With Nick", "Book Nick to Speak", "See How It Works" — imperative, benefit-forward, never generic ("Submit", "Learn More" only as secondary/tertiary).
- **Social proof is named and specific:** testimonials always carry a first + last name; results are quoted in the person's own words, not paraphrased into marketing copy.
- **No emoji** in headlines or UI copy — the energy comes from typography and color, not emoji or excessive punctuation.
- **Faith-forward language from the reference site (God-given, Kingdom, movement) is retired** for the Nick Unsworth system — replaced with secular authority/transformation language (potential, purpose, momentum, legacy) so the identity works for Nick's full audience.

## Visual Foundations
- **Color balance:** ~55% white/warm-neutral, ~25% charcoal/black, ~15% orange/warm gradient, ~5% red/gold — charcoal + white is the structural base, energy colors are accents, never the dominant field.
- **Backgrounds:** mostly flat white or warm off-white (`--surface-warm #F8F6F2`) for editorial/testimonial sections; solid charcoal (`--surface-dark #111`/`#191919`) for premium "authority" sections; the full red→orange→gold gradient reserved for short, high-impact bands only (CTA strips, not full pages). No repeating patterns/textures; a very light grain/vignette is allowed only on dark photography, never as a page-wide texture.
- **Photography:** large, editorial, high-contrast portraits/stage shots are the primary hero device — warm color grade, deep blacks, controlled highlights, natural (not orange-tinted) skin tones. Generous negative space beside the subject for type. Occasional organic brush-mask crop as a signature device — used sparingly, not on every image.
- **Gradients:** signature is the horizontal red→orange→gold "energy" gradient (`--grad-energy`) for CTAs, underlines, small highlight bands. A darker "ember" gradient (`--grad-ember-dark`) sits behind photography in premium dark sections. Radial low-opacity glows (`--glow-ember`) add cinematic warmth behind dark-section content — always subtle, never neon.
- **Type rhythm:** oversized, tight-tracked Montserrat display type paired with generous-line-height Inter body copy; a one-to-three-word Permanent Marker accent underlines or replaces a key word in a headline for personality (never full sentences).
- **Motion:** fast and purposeful, not bouncy — 180–220ms ease transitions; buttons translate up 1–2px and deepen their shadow on hover; underlines wipe in from the left; no elastic/bounce easing, no scroll-jacking, no parallax.
- **Hover states:** primary CTA gradient brightens + lifts + shadow deepens; text links go charcoal→orange with an animated underline; secondary (outlined) buttons fill solid charcoal on hover.
- **Press states:** buttons return to baseline elevation (no lift) and slightly dim, no scale/shrink effects.
- **Borders:** thin (1–1.5px) `#E5E5E5` on light cards, thin white/10% on dark cards; no heavy multi-px borders.
- **Shadows:** soft and shallow on neutral cards (`--shadow-subtle`/`--shadow-medium`); CTA buttons get a warm-tinted glow shadow (`--shadow-cta`) instead of a neutral gray shadow — the shadow color itself carries brand energy.
- **Corner radii:** restrained — 4–8px on buttons/inputs, 8–16px on cards, 16–24px only on large feature photography. Never the 24–40px "SaaS-rounded" treatment on cards; this is an entrepreneurial/editorial brand, not a software product.
- **Transparency/blur:** used only for photo color-overlays (charcoal/burgundy/orange at 20–55% opacity) and the announcement-bar/nav-on-scroll states; no glassmorphism, no frosted panels as a decorative device.
- **Layout:** centered content max 1200–1320px; sticky top nav + optional slim announcement bar above it; sections alternate white → warm off-white → charcoal → white to create rhythm without ever going "all dark".

## Iconography
No icon set, icon font, or SVG sprite was supplied with the brand brief or uploads. Per brand instruction, no flame/fire iconography is used (that mark belongs to the retired Life on Fire identity), and no icons are hand-drawn for this system. Recommendation: adopt a CDN line-icon set as a substitute — **Lucide** (1.5–2px stroke, rounded caps, simple geometry) is the closest match to the "clean minimal line icon" spec in the brief and is documented here as a flagged substitution, loaded via `<script src="https://unpkg.com/lucide@latest">` when a component needs an icon (arrow, play, chevron, check). Default color charcoal, orange on hover/active, white on dark sections. No emoji or unicode-glyph icons are used anywhere in the system.

## Index — what to open first
- Design System tab → **Brand**, **Colors**, **Type**, **Gradients**, **Spacing**, **Shadows & Radius** groups under `guidelines/` for the token specimens.
- Design System tab → **Components** group for Button/Badge/Card/Input/Testimonial/Accordion/LogoStrip/SectionHeading/Divider.
- Design System tab → **Website** group, or open `ui_kits/website/index.html` directly, for the assembled homepage demo.
- `SKILL.md` — portable skill file for using this system inside Claude Code / other agent tooling.

## Intentional additions
- **Divider** and **SectionHeading** components are additions beyond the brief's literal component list — added because nearly every section in the reference brand relies on an eyebrow + heading + gradient-underline pattern and a variety of divider treatments (§15/§16 of the brief); factoring them into components keeps every specimen and UI-kit screen consistent instead of hand-rolled per screen.

## Caveats & where this needs your input
1. **No real photography or logo assets were provided that are safe to reuse** (the four uploads all carry the retired Life on Fire mark). Every photo in `ui_kits/website/` and the logo lockups in `guidelines/logo.html` are typographic/placeholder — please share clean, mark-free photos of Nick (portraits, stage, coaching) and I'll drop them straight into the hero, testimonial, and about sections.
2. **Fonts:** real licensed files (ITC Blair, ITC Blair Condensed, Poppins, Rockness, Superior Title) were supplied and are now wired up in `tokens/fonts.css` — no more Google Fonts fallback.
3. **Media/press and speaking logos** (Entrepreneur, Forbes, HuffPost, Entrepreneur on Fire, T&C Summit, etc.) are shown as grayscale text placeholders in the Featured-Logo-Strip component — real logo files should replace these before anything ships publicly, and only for credentials Nick can actually confirm.
4. The "NU" monogram and wordmark are new original typographic marks created for this brief — treat them as a first draft for Nick's review, not a final approved logo.

**Ask:** review the logo direction in `guidelines/logo.html` and the homepage demo in `ui_kits/website/index.html`, then tell me which of the two you'd like refined further, and send over real photography/press-logo assets so the next pass can replace every placeholder with the real thing.
