# SainikPod — sainikpod.org

Marketing site for SainikPod: corporate mobility with a 100% electric fleet, chauffeured by
ex-servicemen of the Indian Armed Forces (Bengaluru, India).

Built with Create React App + Tailwind CSS. Single-page layout with anchor navigation
(react-scroll): Hero → Clients → Services → The Sainik Standard → Mission → Contact.

Design direction ("Discipline, Electrified") is documented in
[docs/superpowers/specs/2026-07-07-sainikpod-revamp-design.md](docs/superpowers/specs/2026-07-07-sainikpod-revamp-design.md).

## Scripts

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `build/`
- `npm run deploy` — publish `build/` with gh-pages (see `package.json` for target branch)

## Design tokens

Colors and fonts are defined in `tailwind.config.js` (porcelain/ivory/ink/slate/deep/abyss/amber;
Josefin Sans display, Poppins body — the brand wordmark's own family). Shared UI:
`src/components/Waypoint.js` (section headers), `src/components/useReveal.js` (scroll reveal).
