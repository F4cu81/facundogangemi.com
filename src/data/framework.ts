/**
 * AI Strategy Framework data — FrameworkTeaser section
 * Source: PLATFORM_STRATEGY.md + HOMEPAGE_COPY_DECK_EN.md
 */

export interface FrameworkPhase {
  step: number;
  id: string;
  label: string;
  outcome: string;
  description: string;
}

export const FRAMEWORK_PHASES: FrameworkPhase[] = [
  {
    step: 1,
    id: 'discover',
    label: 'Discover',
    outcome: 'Clarity on where AI creates real business value',
    description:
      'Diagnose organizational readiness, map strategic priorities and identify high-impact AI opportunities.',
  },
  {
    step: 2,
    id: 'design',
    label: 'Design',
    outcome: 'A roadmap aligned to operating model and leadership',
    description:
      'Design the AI strategy, operating model changes and governance structures required for sustainable adoption.',
  },
  {
    step: 3,
    id: 'deploy',
    label: 'Deploy',
    outcome: 'Measurable execution with minimal disruption',
    description:
      'Implement AI initiatives with structured delivery, change management and executive enablement.',
  },
  {
    step: 4,
    id: 'evolve',
    label: 'Evolve',
    outcome: 'An organization that learns and adapts continuously',
    description:
      'Embed intelligence into operations, measure outcomes and iterate toward an AI-enabled operating model.',
  },
];

export const FRAMEWORK_META = {
  title: 'The AI Strategy Framework',
  eyebrow: 'Signature Framework',
  tagline: 'Real business impact through intelligent adoption.',
  description:
    'A four-phase approach to move organizations from AI experiments to AI-enabled operating models — with clarity, governance and measurable outcomes at every step.',
  href: '/frameworks/ai-strategy-framework',
  ctaLabel: 'Explore the Framework',
};
