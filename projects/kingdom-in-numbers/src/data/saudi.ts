/**
 * Saudi Arabia data for Phase I.
 * All figures rounded; sources cited inline and in the article colophon.
 */
import type { RegionId } from './regions';

/* ---------- Headline numbers ---------- */
export const TOTAL_RESIDENTS = 35_300_000;
export const SAUDI_CITIZENS_M = 19.6;
export const RESIDENT_EXPATS_M = 15.7;
export const ANNUAL_VISITORS_M = 29.7;

/* ---------- Regions ---------- */
export type Tier = 1 | 2 | 3;
export interface RegionMeta {
  readonly name: string;
  readonly pop: number; // millions
  readonly pct: number; // % of all residents
  readonly tier: Tier;  // 1 = >5M, 2 = 1.5–3M, 3 = <1M
}

export const REGION_META: Record<RegionId, RegionMeta> = {
  riyadh:  { name: 'Riyadh',           pop: 9.0,  pct: 25.5, tier: 1 },
  makkah:  { name: 'Makkah',           pop: 7.6,  pct: 21.5, tier: 1 },
  eastern: { name: 'Eastern Province', pop: 5.3,  pct: 15.0, tier: 1 },
  madinah: { name: 'Madinah',          pop: 2.3,  pct: 6.5,  tier: 2 },
  asir:    { name: 'Asir',             pop: 2.2,  pct: 6.2,  tier: 2 },
  jazan:   { name: 'Jazan',            pop: 1.6,  pct: 4.5,  tier: 2 },
  qassim:  { name: 'Al-Qassim',        pop: 1.5,  pct: 4.2,  tier: 2 },
  tabuk:   { name: 'Tabuk',            pop: 0.9,  pct: 2.5,  tier: 3 },
  hail:    { name: "Ha'il",            pop: 0.7,  pct: 2.0,  tier: 3 },
  najran:  { name: 'Najran',           pop: 0.6,  pct: 1.7,  tier: 3 },
  jouf:    { name: 'Al-Jouf',          pop: 0.6,  pct: 1.7,  tier: 3 },
  borders: { name: 'Northern Borders', pop: 0.4,  pct: 1.1,  tier: 3 },
  bahah:   { name: 'Al-Bahah',         pop: 0.34, pct: 0.96, tier: 3 },
};

/* ---------- Top 5 resident nationalities ---------- */
export interface ResidentNationality {
  readonly name: string;
  readonly flagId: string;     // <use href="#..."> id
  readonly pct: number;        // % of all 13.4M expat residents
  readonly count: number;      // millions
  readonly c1: string;         // primary flag color
  readonly c2: string;         // secondary flag color
}

export const TOP_5_RESIDENTS: ReadonlyArray<ResidentNationality> = [
  { name: 'Bangladesh', flagId: 'flag-bd', pct: 15.8, count: 2.12, c1: '#006A4E', c2: '#F42A41' },
  { name: 'India',      flagId: 'flag-in', pct: 14.0, count: 1.88, c1: '#FF9933', c2: '#138808' },
  { name: 'Pakistan',   flagId: 'flag-pk', pct: 13.5, count: 1.81, c1: '#01411C', c2: '#01411C' },
  { name: 'Egypt',      flagId: 'flag-eg', pct: 11.2, count: 1.50, c1: '#CE1126', c2: '#000000' },
  { name: 'Yemen',      flagId: 'flag-ye', pct: 9.0,  count: 1.20, c1: '#CE1126', c2: '#000000' },
];

/* ---------- Top 5 visitor source countries ---------- */
export interface VisitorCountry {
  readonly name: string;
  readonly flagId: string;
  readonly pct: number;        // % of all 29.7M visitors
  readonly count: number;      // millions
  readonly color: string;      // primary flag color (for bars)
  readonly dark: string;       // darker variant for bar gradient
}

export const TOP_5_VISITORS: ReadonlyArray<VisitorCountry> = [
  { name: 'Egypt',    flagId: 'flag-eg', pct: 10.7, count: 3.19, color: '#CE1126', dark: '#9b0d1d' },
  { name: 'Pakistan', flagId: 'flag-pk', pct: 9.4,  count: 2.79, color: '#01411C', dark: '#022e15' },
  { name: 'Bahrain',  flagId: 'flag-bh', pct: 8.8,  count: 2.61, color: '#CE1126', dark: '#9b0d1d' },
  { name: 'Kuwait',   flagId: 'flag-kw', pct: 7.1,  count: 2.11, color: '#007A3D', dark: '#005528' },
  { name: 'India',    flagId: 'flag-in', pct: 6.5,  count: 1.94, color: '#FF9933', dark: '#C77518' },
];

/* ---------- Population pyramid ---------- */
export interface PyramidRow {
  readonly age: string;
  readonly m: number; // % of total population (males)
  readonly f: number; // % of total population (females)
}

export const KSA_PYRAMID: ReadonlyArray<PyramidRow> = [
  { age: '75+',   m: 0.2, f: 0.2 },
  { age: '70–74', m: 0.2, f: 0.2 },
  { age: '65–69', m: 0.4, f: 0.3 },
  { age: '60–64', m: 0.7, f: 0.5 },
  { age: '55–59', m: 1.2, f: 0.8 },
  { age: '50–54', m: 2.0, f: 1.3 },
  { age: '45–49', m: 3.2, f: 2.0 },
  { age: '40–44', m: 4.8, f: 2.8 },
  { age: '35–39', m: 6.5, f: 3.5 },
  { age: '30–34', m: 7.8, f: 4.0 },
  { age: '25–29', m: 7.2, f: 4.2 },
  { age: '20–24', m: 5.8, f: 4.0 },
  { age: '15–19', m: 4.1, f: 3.9 },
  { age: '10–14', m: 4.0, f: 3.8 },
  { age: '5–9',   m: 3.8, f: 3.7 },
  { age: '0–4',   m: 3.5, f: 3.4 },
];

/** Index of the row with the largest male bar — drives the pyramid's central-out animation. */
export const PYRAMID_PIVOT_IDX = 10; // 25–29

/* ---------- Growth chart (2010–2024) ---------- */
export interface GrowthPoint {
  readonly y: number;     // year
  readonly c: number;     // citizens (M)
  readonly r: number;     // resident expats (M)
  readonly v: number;     // annual visitors (M)
}

export const GROWTH_DATA: ReadonlyArray<GrowthPoint> = [
  { y: 2010, c: 18.0, r: 9.9,  v: 14.0 },
  { y: 2014, c: 18.8, r: 11.0, v: 16.0 },
  { y: 2018, c: 19.1, r: 13.4, v: 17.5 },
  { y: 2020, c: 19.3, r: 14.0, v: 4.0 },   // COVID
  { y: 2022, c: 19.5, r: 14.5, v: 18.0 },
  { y: 2024, c: 19.62, r: 15.7, v: 29.7 },
];

/* ---------- Projection chart (to 2050) ---------- */
export type Series = ReadonlyArray<readonly [number, number]>;

export const PROJECTION: {
  readonly cActual: Series;
  readonly cProj: Series;
  readonly rActual: Series;
  readonly rProj: Series;
} = {
  cActual: [[2010, 18.0], [2014, 18.8], [2018, 19.1], [2022, 19.5], [2024, 19.62]],
  cProj:   [[2024, 19.62], [2030, 22], [2040, 26], [2050, 31]],
  rActual: [[2010, 9.9], [2014, 11.0], [2018, 13.4], [2022, 14.5], [2024, 15.7]],
  rProj:   [[2024, 15.7], [2030, 22], [2040, 35], [2050, 50]],
};

/* ---------- Visa purposes (2024) ---------- */
export interface VisaPurpose {
  readonly label: string;
  readonly count: string;       // formatted display number
  readonly pct: number;
  readonly color: string;
  readonly description: string;
}

export const VISA_PURPOSES: ReadonlyArray<VisaPurpose> = [
  { label: 'Religious', count: '12.3M', pct: 41.4, color: '#1a5e36', description: "Hajj & Umrah pilgrimages — Saudi's oldest visitor economy" },
  { label: 'Business',  count: '7.5M',  pct: 25.3, color: '#2a7a4e', description: 'Work travel into Vision 2030 megaprojects & HQs' },
  { label: 'Leisure',   count: '5.9M',  pct: 19.9, color: '#d4a73c', description: '+656% since 2019 — the youngest visa category' },
  { label: 'Family',    count: '2.0M',  pct: 6.7,  color: '#b85c1a', description: 'Largely GCC neighbors visiting Saudi residents' },
  { label: 'Other',     count: '2.0M',  pct: 6.7,  color: '#888',    description: 'Education, medical, transit, official' },
];

/* ---------- Vision 2030 targets ---------- */
export interface Vision2030Target {
  readonly num: string;        // big number
  readonly suffix: string;     // M, %, K
  readonly label: string;
  readonly description: string;
}

export const VISION_TARGETS: ReadonlyArray<Vision2030Target> = [
  { num: '150', suffix: 'M', label: 'Annual Visitors by 2030', description: '+34M from today. Up from 116M in 2024 — the original 100M target was hit 7 years early.' },
  { num: '70',  suffix: 'M', label: 'International Tourists / Year', description: '+40M from today. Goal split: 70M international + 80M domestic = 150M total.' },
  { num: '43',  suffix: 'M', label: 'Total Population by 2050', description: 'UN base case. Could rise far higher if expat inflow continues at the current rate.' },
  { num: '1.2', suffix: 'M', label: 'Saudi Tourism Jobs by 2030', description: '+300K from today. Up from ~900K Saudi nationals currently in the tourism sector.' },
];

/* ---------- Riyadh skyline eras (Act II) ---------- */
export interface SkylineEra {
  readonly year: string;
  readonly pop: string;
  readonly caption: string;     // two-line caption
}

export const SKYLINE_ERAS: ReadonlyArray<SkylineEra> = [
  { year: '1960', pop: '~150K POP.', caption: 'Mud-brick town | 30% urban' },
  { year: '1980', pop: '~1M POP.',   caption: 'Oil boom rises | 66% urban' },
  { year: '2000', pop: '~4.5M POP.', caption: 'A megacity emerges | 80% urban' },
  { year: '2024', pop: '~7M POP.',   caption: 'Skyscrapers, KAFD | 85% urban' },
];

/* ---------- Takeaways ---------- */
export interface Takeaway {
  readonly tag: string;
  readonly title: string;
  readonly body: string;
}

export const TAKEAWAYS: ReadonlyArray<Takeaway> = [
  {
    tag: 'Concentration',
    title: 'The country lives in three regions',
    body: '67% of all 35 million residents are in Riyadh, Makkah, and the Eastern Province. Investment, infrastructure, and opportunity follow this map. Other regions face the inverse: depopulation pressure even while the country grows.',
  },
  {
    tag: 'Demographic shift',
    title: 'Citizens may soon be the minority',
    body: 'The citizen-to-expat ratio fell from 2-to-1 in 2010 to 1.25-to-1 in 2024. If current growth continues, the lines cross around 2030. This is the most consequential number in Vision 2030 — not GDP, not oil price, not tourism revenue.',
  },
  {
    tag: 'New economy',
    title: 'The visitor curve is the real story of 2019–2024',
    body: 'Religious tourism used to be 56% of inbound visits; today it is 41%. Leisure tourism grew 656% since 2019. The Saudi visa system shifted from "work + Hajj" to "everything" in just five years.',
  },
  {
    tag: 'Labor structure',
    title: 'The pyramid still hides a working-age male bulge',
    body: 'Even with national fertility at 2.7, the demographic shape is dominated by 25–39 year-old male foreign workers. Saudization quotas exist precisely to redistribute these jobs to citizens — but the bulge persists.',
  },
  {
    tag: 'Future',
    title: 'The next five years matter more than the last fifty',
    body: 'NEOM, the Line, Qiddiya, and Diriyah will collectively need millions of workers and visitors. The decisions made before 2030 — on Saudization, on visa rules, on housing supply — will define the demographic balance for a generation.',
  },
];

/* ---------- Recommendations ---------- */
export interface Recommendation {
  readonly headline: string;
  readonly body: string;
}

export const RECS_CITIZENS: ReadonlyArray<Recommendation> = [
  { headline: 'Up-skill into tourism & hospitality.', body: "1.2M Saudi tourism jobs are targeted by 2030 — most don't yet exist. Hospitality, event management, cultural heritage, and language skills are the fastest-growing categories." },
  { headline: 'Build small businesses around visitors.', body: '116M tourists per year cannot be served by big hotels alone. F&B, transport, experiences, and digital services scale fastest as new entrants.' },
  { headline: 'Consider real estate beyond Riyadh.', body: 'Madinah, Asir, and Eastern Province are the next development frontiers — entry costs today are a fraction of capital prices.' },
  { headline: 'Treat Saudization as a career edge.', body: 'Quotas guarantee a hiring floor in regulated sectors. Specialize where rules require nationals: finance, law, healthcare leadership, government.' },
];

export const RECS_RESIDENTS: ReadonlyArray<Recommendation> = [
  { headline: 'Premium residency is now permanent.', body: 'The new property law and residency reforms make long-term planning real for the first time. Renting forever is no longer the only path.' },
  { headline: 'Move beyond labor work into specialized roles.', body: 'Megaprojects need engineers, designers, healthcare specialists, and managers — all paid premiums over labor categories.' },
  { headline: 'Use Saudi as a regional springboard.', body: '116M visitors creates an unmatched professional network. The country has become a meeting point for the wider region.' },
  { headline: 'Plan for Saudization in your sector.', body: "Some industries will see deeper national-hire mandates. Knowing your sector's quota trajectory is now essential career hygiene." },
];
