# SainikPod website revamp — design spec (2026-07-07, rev. 2)

## Subject & job

SainikPod (sainikpod.org) is a Bengaluru B2B mobility company: a **100% electric fleet
chauffeured by ex-servicemen** of the Indian Armed Forces, serving corporates (Ford, Capgemini,
Wipro, Infosys, IBM, Mahindra Logistics) and the Delhi & Bengaluru international airports.

Audience: corporate admin/facilities/ESG decision-makers evaluating employee-transport partners.
The page's single job: make a corporate buyer trust SainikPod enough to request a proposal.

## Revision history

Rev. 1 was a dark "ops console" direction (Rajdhani display, mono telemetry labels, HUD motifs).
Rejected by the client: poor contrast, off-brand typography, read as gimmicky rather than premium.
Rev. 2 (this spec, built) replaces it with a **quiet-luxury editorial** direction.

## Creative thesis — "Discipline, Electrified"

The brand's dual identity — military composure + electric silence — is expressed through
restraint: generous whitespace, hairline rules, tracked light type, one jewel accent.
Dignity, not decoration. Two missions, one fleet: decarbonized corporate transport (E of ESG,
Scope 3 employee commuting) and veteran resettlement (S of ESG).

## Tokens

Palette (derived from brand teal #014052 + amber #F7A422):
- `porcelain` #FAF9F6 — page ground
- `ivory`     #F2EFE8 — alternate band (clients)
- `ink`       #0C3038 — headings, buttons (near-black teal)
- `slate`     #3B5A62 — body text (≈7:1 on porcelain)
- `deep`      #014052 — brand teal, Mission band
- `abyss`     #02222B — footer
- `amber`     #F7A422 — jewel accent only: rules, pod rings, numerals, dark-band CTA

Type (the brand's own family — the wordmark is a light geometric sans):
- Display: **Josefin Sans** 300/400, uppercase, tracked (0.18em)
- Body: **Poppins** 300/400/500; small-caps labels at 0.32em tracking
- No monospace anywhere.

## Hero (rev. 2.3 — cinematic photo landing restored)

The client asked to bring back the original full-screen photo landing (field photo of the EV +
veteran chauffeur before Vidhana Soudha) with a parallax scroll over it, without losing the
type/motion system built since. Result:
- Full-viewport **curtain parallax** (rev. 2.4): the hero is `sticky top-0 z-0 h-screen`; all
  following sections live in a `relative z-10 bg-porcelain` wrapper that scrolls up OVER the
  pinned photo — the classic fixed-hero reveal, done with sticky (iOS-safe, no
  `background-attachment: fixed`). Three parallax planes: photo (static), hero content (drifts
  up −70px and dims to 0.15 as the curtain covers it, rAF scroll handler in Hero.js), page
  curtain (full speed).
- **Settle-zoom** on load (`.hero-photo-in`, scale 1.08 → 1 over 2.2s) — a slow cinematic push-in.
- Legibility (rev. 2.4 fix): deep-teal duotone (`bg-deep/60 mix-blend-multiply`) brands the photo
  and tames the bright sky, plus a left gradient (`from-abyss/80 via-abyss/40`) under the type
  column and a base-to-top wash. GOTCHA: `/85` is NOT in Tailwind's default opacity scale — the
  class silently generates nothing; use /80 or /90.
- Headline "electrified." effect (rev. 3.3): **electric-aqua static + travelling sparks**.
  Client first asked for yellow, then preferred the original aqua (#35E0C2) — keep the volt
  color for this effect. Three layers: (1) base word
  with `electricStatic` — uneven micro-flickers of aqua text-shadow, 5.3s; (2)+(3) two
  absolutely-positioned text copies (`.electric-spark`, aria-hidden) clipped with
  `background-clip: text`, each carrying a narrow white-hot amber band that travels through the
  letterforms (`sparkTravel` 4.7s L→R, `sparkTravelBack` 7.9s R→L, delayed). KEY TRICK:
  `filter: drop-shadow(amber)` on the clipped layer glows only where the band's lit pixels are,
  so the glow travels WITH the spark through the glyphs. Mismatched prime-ish durations keep
  crossings organic. Reduced motion: static amber glow, spark layers `display: none` (without
  animation their gradient band would sit frozen mid-word). Load stagger preserved.
- A pulsing amber scroll cue (`.scroll-cue`) sits at the base of the landing (desktop).
- The **orbit ring was removed** — it overlapped the nav/hero on mobile. The plate-drift refs
  were also removed from the hero (a sticky section never moves relative to the viewport, so
  position-based parallax is inert there).

## Signature element — "The Pod"

The logo mark (amber ring, teal core) recurs as a discreet monogram system:
1. **Arched frame** (`border-radius: 999px 999px 14px 14px`) — now holds the Contact map (moved
   from the hero when the hero went full-bleed), keeping the pod silhouette in the page.
2. **Pod rings** as bullets/markers — never icons, never numbered HUD codes.
3. Small-caps label + short amber rule as the section header device.

## Motion system (rev. 2.1 — "luxury, electrified")

Brand assets are working elements, and motion carries the futuristic register:
- **Hero load sequence** (`.hero-seq-1…5`): label → rule → headline lines → copy → CTAs rise in
  a staggered orchestration; the arch photo unveils with a clip-path sweep (`.hero-arch`).
- **Electric shimmer** (`.shimmer-text`): an amber→aqua current sweeps through the word
  "electrified." every few seconds — the single electric moment in the type. Note: it must be
  nested inside (not merged with) a `.hero-seq` span, since both set `animation`.
- **Aurora glows** (`.aurora`): blurred teal/amber orbs drift slowly behind the hero and the
  Mission band; reduced opacity on mobile so it stays a hint, not a wash.
- **Road dividers** (`RoadDivider.js`): the brand's amber EV mark (electricCar.svg) drives
  along hairline roads between sections, position driven by scroll progress (rAF-throttled).
- **Orbit ring**: a slow dashed orbit with a single amber satellite circles the hero arch dome.
- **Section reveals**: staggered fade-rise via IntersectionObserver; amber rules draw themselves
  (`.rule-grow`).
- Client logos (clients.png) restored on the ivory band via `mix-blend-multiply`.
- **Parallax layer** (rev. 2.2, `useParallax.js` — measures the element's parent so transforms
  never feed back into the measurement; all rAF-throttled):
  - *Porthole*: the photo inside the hero arch scrolls slower than its frame (speed 0.06,
    image scaled 1.18 so edges never show).
  - *Plate drift*: the two headline lines slide horizontally in opposite directions (±0.05).
  - *Moving road*: RoadDivider's dashed centre line slides backward (strokeDashoffset) as the
    car drives forward — the road itself appears in motion.
  - *Ghost numerals*: 9rem roman numerals at 8% deep-teal behind each service column, each on
    a progressively deeper layer (speeds −0.10 / −0.15 / −0.20).
  - *Deep water*: the Mission band's content drifts slower than the band (0.06).
- All motion is disabled under `prefers-reduced-motion`.

## Smooth-scroll fix (rev. 2.9)

Client reported clicking a nav item "broke" the scroll — it snapped instantly instead of
animating. Root cause: `html { scroll-behavior: smooth }` in index.css was fighting
react-scroll's own JS-driven animation. react-scroll animates by calling `window.scrollTo()`
repeatedly across frames; with native CSS smooth-scroll also active, the browser coalesces
those rapid calls into its own smooth-scroll to whatever the latest target is, which collapses
the eased animation into what looks like a single jump. GOTCHA: do not re-add
`scroll-behavior: smooth` to `html` — every in-page anchor here goes through react-scroll's
`<Link smooth>`, never a native `href="#"` or `scrollIntoView`, so the CSS property serves no
purpose and only reintroduces the conflict.

Fix: removed the CSS rule; centralized the scroll animation in `scrollConfig.js`
(`SMOOTH_SCROLL` — `{ smooth: true, duration: 700, easing: 'easeInOutQuart' }`, degrading to
`{ smooth: false }` under `prefers-reduced-motion`) and spread it (`{...SMOOTH_SCROLL}`) on
every `<Link>` across NavBar, RouteRail, Hero, Mission, and Footer instead of a bare `smooth`
boolean, so the ease and duration are consistent everywhere and reduced-motion is honored.

## Responsive nav gap fix (rev. 3.0)

Audit caught a real dead zone: the mobile hamburger used `md:hidden` (disappears ≥768px) while
RouteRail used `hidden lg:block` (appears only ≥1024px) — between 768–1023px (tablets, small
laptops, split-screen windows) NEITHER nav was reachable; only the logo and hero CTAs worked.
Fixed by moving the hamburger button AND its overlay from `md:hidden`/`md:hidden` to
`lg:hidden`/`lg:hidden` so the handoff to RouteRail happens at exactly the same breakpoint (1024px)
with zero gap. Verified at 375/768/1024px: exactly one nav path visible at each, overlay opens and
renders correctly at 768px, zero horizontal overflow throughout.

## Rounded language + chip nav (rev. 2.5)

Client feedback: square buttons and the conventional full-width nav bar read as template ("Wix").
- **Radius system**: buttons `rounded-xl` (12px, deliberately not pills); large canvases
  `rounded-[1.75rem]` mobile / `rounded-[2.5rem]` desktop. The pinned hero photo is now an
  **inset rounded canvas** (`inset-3 md:inset-5`) with a porcelain frame; the curtain wrapper
  gets matching `rounded-t-*` so it reads as a rounded sheet sliding over the photo; the
  Mission band is an inset rounded slab (`px-3 md:px-5` gutter).
- **Nav (rev. 2.7 — final)**: the **vertical route rail** (`RouteRail.js`) is the navigation —
  a glass capsule fixed to the left edge (lg+) with pod-ring stops per section; the active stop
  fills deep-teal with a pulsing amber ring, labels slide out on hover. Client tried a
  horizontal capsule variant (rev. 2.6) and asked for the rail back. Top-left holds only the
  logo in a glass chip; there is **no header CTA** — the one "Partner with us" lives in the
  hero (client flagged the duplicate). Active tracking via `useActiveSection.js`.
  **Masthead (rev. 2.8)**: the logo is centered, with two states — on the landing it is the
  large bare WHITE wordmark (logoDark.png) over the photograph; past 65% of the hero it
  condenses into a small glass chip with the teal logo (logoLight.png), crossfaded via two
  stacked imgs (500ms). Note the asset names are inverted relative to their look:
  logoDark.png = white-on-dark logo, logoLight.png = teal-on-light logo.
  GOTCHA: react-scroll's `spy` cannot track the sticky hero (its rect.top pins at 0 → "home"
  stays active forever) — tracking is manual (scrollY + 40% viewport probe, hero special-cased
  to absolute top 0).
- **Glass buttons (rev. 2.6)**: `.btn-glass` + `--dark`/`--light` variants in index.css —
  frosted translucent fills, 1px translucent border, inset top highlight, 12px radius; hover
  resolves to solid (amber on dark surfaces, ink on light). Hero CTA and Mission CTA are
  glass-dark over photo/deep-teal; the nav CTA stays near-solid amber (primary action).
- Mobile: glass logo chip + glass menu chip opening the full-screen overlay (pod-ring bullets).
- The Contact map is a **rounded-square panel** (1.75–2rem radius) — the arch frame was retired
  at client request (rev. 2.6); the pod motif continues in rings, dots and the rounded canvases.

## Page skeleton (single page, anchor nav)

1. **Nav** — porcelain glass, hairline bottom, teal logo, small-caps links, outlined CTA
2. **Hero** — split: tracked light headline "Discipline, electrified." + arched field photo;
   hairline marks row (100% electric fleet · veteran chauffeurs · 24×7 control room · BLR & DEL)
3. **Clients** — ivory band, "In the service of" + client names in tracked display caps + MoD line
4. **Services** — three editorial columns with roman numerals (I employee transport,
   II airport services, III dedicated fleets), hairline dividers
5. **The Sainik Standard** — six points, two columns, pod-ring bullets
6. **Mission** — full-bleed deep-teal band: Environment / Society panels + centered
   "Request a proposal" amber CTA
7. **Contact** — details with hairline rules + soft-toned map
8. **Footer** — abyss band, white logo, small-caps links

## Constraints & honesty rules

- Stack unchanged: CRA + React 18 + Tailwind 3 + react-scroll. No new dependencies.
- **No fabricated metrics** — only claims the brand already makes (100% electric, ex-servicemen
  chauffeurs, named clients, 24×7 control room, MoD resettlement association).
- Responsive to 375px, visible focus states, `prefers-reduced-motion` respected,
  body text ≥ 4.5:1 contrast everywhere.

## Marketing rationale (from competitor research, July 2026)

- Category convention (MoveInSync, Routematic, Lithium Urban, Zeelo): hero CTA → logo wall →
  proof → offerings → ops trust device → repeated CTA. Followed, in luxury register.
- SainikPod cannot out-scale Lithium/MoveInSync; it out-positions on the two stories no one
  else owns: veteran integrity (a governance signal post-BluSmart-collapse) and double-ESG
  (zero-tailpipe kilometres + quantifiable veteran resettlement).
- Premium chauffeured EV positioning is proven in Bengaluru (Shoffr) — SainikPod adds the
  veterans story and B2B contracts on top.
