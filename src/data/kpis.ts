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
    value: '10+',
    label: 'Teams Enabled',
    sublabel: 'Supporting teams and leaders in agile, product-driven and data-informed ways of working.',
  },
  {
    value: '20+',
    label: 'Enterprise Projects',
    sublabel: 'Across banking, insurance, technology services and large-scale transformation contexts.',
  },
  {
    value: '€10M',
    label: 'Estimated Portfolio Scope',
    sublabel: 'Contributing to portfolio execution, financial governance, QBRs, OKRs and measurable business impact.',
  },
];
