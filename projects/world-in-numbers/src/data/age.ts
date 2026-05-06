export interface LifeStage {
  stage: string;
  range: string;
  figureHeight: number;
  color: string;
  countries: { name: string; age: number; highlight?: boolean }[];
}

export const LIFE_STAGES: LifeStage[] = [
  {
    stage: 'Youthful',
    range: '15–25 yrs',
    figureHeight: 40,
    color: '#e8a04a',
    countries: [
      { name: 'Niger',    age: 15.1 },
      { name: 'Nigeria',  age: 17.6 },
      { name: 'Tanzania', age: 19.0 },
      { name: 'Iraq',     age: 21.5 },
      { name: 'Jordan',   age: 23.8 },
    ],
  },
  {
    stage: 'Emerging',
    range: '25–30 yrs',
    figureHeight: 56,
    color: '#c89a3a',
    countries: [
      { name: 'Egypt',   age: 25.1 },
      { name: 'India',   age: 28.4 },
      { name: 'Algeria', age: 29.3 },
    ],
  },
  {
    stage: 'Maturing',
    range: '30–35 yrs',
    figureHeight: 68,
    color: '#2a7a4e',
    countries: [
      { name: 'Morocco',      age: 30.2 },
      { name: 'Saudi Arabia', age: 31.8, highlight: true },
      { name: 'Turkey',       age: 33.5 },
      { name: 'Brazil',       age: 34.7 },
    ],
  },
  {
    stage: 'Mid-Life',
    range: '35–45 yrs',
    figureHeight: 80,
    color: '#2d4a6e',
    countries: [
      { name: 'UAE',      age: 38.4 },
      { name: 'USA',      age: 38.9 },
      { name: 'China',    age: 39.6 },
      { name: 'France',   age: 42.6 },
      { name: 'S. Korea', age: 44.9 },
    ],
  },
  {
    stage: 'Aging',
    range: '45+ yrs',
    figureHeight: 92,
    color: '#5a4a4a',
    countries: [
      { name: 'Germany', age: 46.8 },
      { name: 'Italy',   age: 47.9 },
      { name: 'Japan',   age: 49.5 },
    ],
  },
];

export interface PyramidRow { age: string; m: number; f: number; }
export interface PyramidCountry {
  title: string;
  note: string;
  maleColor: string;
  femaleColor: string;
  rows: PyramidRow[];
}

export const PYRAMIDS: Record<'japan' | 'nigeria' | 'ksa', PyramidCountry> = {
  japan: {
    title: 'Japan — The Inverted Pyramid',
    note: "Japan's pyramid is almost a rectangle — an aging society where the elderly outnumber the young. The 75+ row holds more figures than any age below it.",
    maleColor: '#2d4a6e',
    femaleColor: '#9b2226',
    rows: [
      { age: '75+',    m: 4.5, f: 7.5 }, { age: '70–74', m: 2.7, f: 3.1 },
      { age: '65–69',  m: 3.1, f: 3.3 }, { age: '60–64', m: 3.4, f: 3.5 },
      { age: '55–59',  m: 3.7, f: 3.7 }, { age: '50–54', m: 3.9, f: 3.8 },
      { age: '45–49',  m: 3.8, f: 3.7 }, { age: '40–44', m: 3.7, f: 3.6 },
      { age: '35–39',  m: 3.2, f: 3.1 }, { age: '30–34', m: 3.0, f: 2.9 },
      { age: '25–29',  m: 2.8, f: 2.7 }, { age: '20–24', m: 2.6, f: 2.5 },
      { age: '15–19',  m: 2.4, f: 2.3 }, { age: '10–14', m: 2.3, f: 2.2 },
      { age: '5–9',    m: 2.1, f: 2.0 }, { age: '0–4',   m: 1.9, f: 1.8 },
    ],
  },
  nigeria: {
    title: 'Nigeria — The Classic Pyramid',
    note: 'Nigeria is a perfect pyramid — every age group is larger than the one above it. A young society with enormous growth momentum built in.',
    maleColor: '#b85c1a',
    femaleColor: '#d97f3a',
    rows: [
      { age: '75+',    m: 0.3, f: 0.3 }, { age: '70–74', m: 0.3, f: 0.3 },
      { age: '65–69',  m: 0.4, f: 0.4 }, { age: '60–64', m: 0.6, f: 0.5 },
      { age: '55–59',  m: 0.8, f: 0.7 }, { age: '50–54', m: 1.1, f: 1.0 },
      { age: '45–49',  m: 1.5, f: 1.4 }, { age: '40–44', m: 2.0, f: 1.9 },
      { age: '35–39',  m: 2.5, f: 2.4 }, { age: '30–34', m: 3.1, f: 3.0 },
      { age: '25–29',  m: 3.8, f: 3.7 }, { age: '20–24', m: 4.7, f: 4.5 },
      { age: '15–19',  m: 5.4, f: 5.2 }, { age: '10–14', m: 6.1, f: 5.9 },
      { age: '5–9',    m: 6.8, f: 6.6 }, { age: '0–4',   m: 7.5, f: 7.3 },
    ],
  },
  ksa: {
    title: 'Saudi Arabia — The Working-Age Bulge',
    note: "KSA's dramatic working-age male bulge (ages 25–39) is driven by foreign workers, not births. It's not organic growth — it's labor migration made visible.",
    maleColor: '#1a5e36',
    femaleColor: '#4caf7d',
    rows: [
      { age: '75+',    m: 0.2, f: 0.2 }, { age: '70–74', m: 0.2, f: 0.2 },
      { age: '65–69',  m: 0.4, f: 0.3 }, { age: '60–64', m: 0.7, f: 0.5 },
      { age: '55–59',  m: 1.2, f: 0.8 }, { age: '50–54', m: 2.0, f: 1.3 },
      { age: '45–49',  m: 3.2, f: 2.0 }, { age: '40–44', m: 4.8, f: 2.8 },
      { age: '35–39',  m: 6.5, f: 3.5 }, { age: '30–34', m: 7.8, f: 4.0 },
      { age: '25–29',  m: 7.2, f: 4.2 }, { age: '20–24', m: 5.8, f: 4.0 },
      { age: '15–19',  m: 4.1, f: 3.9 }, { age: '10–14', m: 4.0, f: 3.8 },
      { age: '5–9',    m: 3.8, f: 3.7 }, { age: '0–4',   m: 3.5, f: 3.4 },
    ],
  },
};
