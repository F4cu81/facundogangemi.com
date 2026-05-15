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
    label: 'Years of Professional Experience',
    sublabel: 'Across technology, delivery, agile transformation and operating model evolution.',
  },
  {
    value: '9',
    label: 'Countries',
    sublabel: 'International transformation footprint across Europe and Latin America.',
  },
  {
    value: '20+',
    label: 'Enterprise Projects',
    sublabel: 'Across banking, insurance, technology services and large-scale transformation contexts.',
  },
  {
    value: '5+',
    label: 'AI Opportunities Prioritized',
    sublabel: 'Connecting business needs, governance requirements, operating model constraints and measurable business impact.',
  },
];
