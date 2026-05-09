/**
 * KPI authority strip data
 * Source: HOMEPAGE_COPY_DECK_EN.md + PLATFORM_STRATEGY.md
 */

export interface KPI {
  value: string;    // e.g. "20+"
  label: string;    // e.g. "Years of experience"
  sublabel?: string;
}

export const KPIS: KPI[] = [
  {
    value: '20+',
    label: 'Years of experience',
    sublabel: 'Enterprise transformation & AI advisory',
  },
  {
    value: '50+',
    label: 'Enterprise engagements',
    sublabel: 'Across banking, insurance, technology & telco',
  },
  {
    value: '10+',
    label: 'Industries transformed',
    sublabel: 'From financial services to digital platforms',
  },
  {
    value: 'AI-First',
    label: 'Strategic alignment',
    sublabel: 'Operating models built for the intelligence era',
  },
];
