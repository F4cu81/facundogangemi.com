/**
 * Insight editorial pillars — Strategic Perspectives section and Insights pages
 */

export interface InsightPillar {
  title: string;
  categorySlug: string;
  description: string;
  cta: string;
  href: string;
}

export const INSIGHT_PILLARS: InsightPillar[] = [
  {
    title: 'AI Strategy',
    categorySlug: 'ai-strategy',
    description:
      'Perspectives on how organizations define, govern and scale AI initiatives with clear business ownership and measurable impact.',
    cta: 'Explore AI Strategy',
    href: '/insights/ai-strategy/',
  },
  {
    title: 'Digital Transformation',
    categorySlug: 'digital-transformation',
    description:
      'Insights on how companies evolve technology, capabilities and operating models to compete in digital markets.',
    cta: 'Explore Transformation',
    href: '/insights/digital-transformation/',
  },
  {
    title: 'Operational Excellence',
    categorySlug: 'operational-excellence',
    description:
      'Ideas on how organizations improve execution, reduce friction and create operating discipline through better processes, metrics and management systems.',
    cta: 'Explore Excellence',
    href: '/insights/operational-excellence/',
  },
  {
    title: 'Strategy Execution',
    categorySlug: 'strategy-execution',
    description:
      'Perspectives on connecting strategy, OKRs, QBRs and portfolio decisions to execution routines that create measurable business outcomes.',
    cta: 'Explore Execution',
    href: '/insights/strategy-execution/',
  },
];
