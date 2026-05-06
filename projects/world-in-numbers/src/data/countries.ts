export interface CountryData {
  name: string;
  flagId: string;
  pct: number;
  population: string;
}

export const TOP_8: CountryData[] = [
  { name: 'India',      flagId: 'flag-india',      pct: 17.6, population: '1.44 billion' },
  { name: 'China',      flagId: 'flag-china',      pct: 17.3, population: '1.42 billion' },
  { name: 'USA',        flagId: 'flag-usa',        pct: 4.2,  population: '341 million'  },
  { name: 'Indonesia',  flagId: 'flag-indonesia',  pct: 3.4,  population: '278 million'  },
  { name: 'Pakistan',   flagId: 'flag-pakistan',   pct: 3.0,  population: '245 million'  },
  { name: 'Nigeria',    flagId: 'flag-nigeria',    pct: 2.8,  population: '229 million'  },
  { name: 'Brazil',     flagId: 'flag-brazil',     pct: 2.6,  population: '217 million'  },
  { name: 'Bangladesh', flagId: 'flag-bangladesh', pct: 2.1,  population: '173 million'  },
];

export interface RegionData {
  name: string;
  population: string;
  pct: number;
  color: string;
}

export const REGIONS: RegionData[] = [
  { name: 'Asia',     population: '4.8 billion',  pct: 59, color: '#6b9c5c' },
  { name: 'Africa',   population: '1.5 billion',  pct: 18, color: '#a08658' },
  { name: 'Americas', population: '1.0 billion',  pct: 13, color: '#7a9c64' },
  { name: 'Europe',   population: '744 million',  pct: 9,  color: '#82a866' },
  { name: 'Oceania',  population: '46 million',   pct: 1,  color: '#9a9c64' },
];
