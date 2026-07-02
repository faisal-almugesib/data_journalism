# The Kingdom in Numbers — Phase I (v0.3)

Visual data journalism project on Saudi Arabia. Phase I covers population, demographics, and Vision 2030 trajectories.

## Stack

- **Vite** — dev server + build
- **React 18** + **TypeScript** (strict)
- **Three.js** — 3D extruded country map (no React reconciler in WebGL; plain Three.js inside a `useEffect`)
- Hand-rolled SVG charts (no chart library — keeps the bundle small and the visuals fully custom)

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # → dist/
npm run typecheck    # tsc --noEmit
```

## Structure

```
src/
├── main.tsx                 # React mount
├── App.tsx                  # Phase I composition (acts I-VII + footer)
├── styles/
│   ├── tokens.css           # CSS variables (colors, fonts, layout)
│   └── global.css           # Base typography, masthead, sections, animations
├── data/
│   ├── saudi.ts             # All numerical data (regions, nationalities, pyramid, projections, visa, etc.)
│   └── regions.ts           # 13 Saudi region polygons (CC-BY-4.0 from @svg-maps/saudi-arabia)
├── hooks/
│   ├── useReveal.ts         # IntersectionObserver-based fade-up
│   └── useCountUp.ts        # rAF-driven number counter
├── components/
│   ├── layout/              # Masthead, Hero, Section, Transition, Footer, PreviewBanner
│   ├── svg/                 # Reusable SVG: flag <symbol>s, person, Burj, isometric towers
│   ├── viz/                 # 3D visualisations (Three.js)
│   │   └── RegionMap3D.tsx  # Saudi regions extruded by population
│   ├── charts/              # 2D charts
│   │   ├── FlagBarChart.tsx     # Proportional horizontal bars (1:1 width = pct)
│   │   ├── VisitorBarChart.tsx
│   │   ├── GrowthLineChart.tsx
│   │   ├── ProjectionChart.tsx
│   │   ├── VisaStackedBar.tsx
│   │   ├── PyramidChart.tsx     # Animated central-out from 25-29 bulge
│   │   └── PictogramFifty.tsx
│   └── phase1/              # The seven acts + Vision2030 + Takeaways + Recommendations
│       ├── Regions.tsx          # Act I (with Burj Al Mamlakah hero + 3D map)
│       ├── Skyline.tsx          # Act II (Riyadh isometric eras 1960-2024)
│       ├── Nationalities.tsx    # Act III (flag bars + visitor chart)
│       ├── Composition.tsx      # Act IV (citizens / residents / visitors)
│       ├── Growth.tsx           # Act V (line chart 2010-2024 + visa breakdown)
│       ├── Future.tsx           # Act VI (projection to 2050)
│       ├── Pyramid.tsx          # Act VII (animated population pyramid)
│       ├── Vision2030.tsx
│       ├── Takeaways.tsx
│       └── Recommendations.tsx
```

## Data sources

- GASTAT (Saudi General Authority for Statistics): Population Estimates 2024, Census 2022, Saudi Women's Statistics Report 2024
- Saudi Ministry of Tourism Annual Statistical Report 2024
- UN World Population Prospects 2024
- World Bank Open Data
- UN Habitat World Cities Report 2022
- Region polygons: [@svg-maps/saudi-arabia](https://www.npmjs.com/package/@svg-maps/saudi-arabia) (CC-BY-4.0)

## Design system

Newspaper aesthetic — Fraunces (serif) for body/headlines, Inter (sans) for metadata/captions/UI chrome. Paper tones (#f5f0e8 / #ebe5d9), a Saudi-green primary palette, and a gold accent for Vision 2030 references. See `src/styles/tokens.css`.
