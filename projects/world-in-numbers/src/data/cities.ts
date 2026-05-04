export interface UrbanShare { label: string; pct: number; color: string; }

export const URBAN_SHARES: UrbanShare[] = [
  { label: 'World avg',    pct: 57, color: '#9a9590' },
  { label: 'Arab World',   pct: 62, color: '#2a7a4e' },
  { label: 'Saudi Arabia', pct: 85, color: '#1a5e36' },
];

export interface KsaStat { num: string; label: string; sub: string; }

export const KSA_STATS: KsaStat[] = [
  { num: '37M',  label: 'Total Population', sub: 'Nationals + expats, 2024' },
  { num: '31.8', label: 'Median Age',       sub: 'Younger than USA' },
  { num: '85%',  label: 'Urban Rate',       sub: "Among world's highest" },
  { num: '7M',   label: 'Riyadh Pop.',      sub: 'From 150K in 1960' },
];

export interface Closing2050 { num: string; title: string; sub: string; }

export const CLOSING_2050: Closing2050[] = [
  { num: '9.7B',   title: 'World total by 2050',   sub: "Growth slows but won't stop" },
  { num: '400M+',  title: 'Nigeria by 2050',       sub: '3rd most populous nation' },
  { num: '100M',   title: 'Japan by 2050',         sub: 'Down from 125M — shrinking' },
  { num: '43M',    title: 'Saudi Arabia by 2050',  sub: 'Hinges on expat policy' },
  { num: '2 in 3', title: 'Will live in cities',   sub: 'Urban share rising globally' },
  { num: '600M',   title: 'Arab world by 2050',    sub: 'Region aging faster than expected' },
];
