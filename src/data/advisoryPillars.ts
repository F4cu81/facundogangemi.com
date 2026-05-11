/**
 * Advisory pillars data — homepage AdvisoryGrid section
 * Source: HOMEPAGE_COPY_DECK_EN.md + PLATFORM_STRATEGY.md
 */

export interface AdvisoryPillar {
  id: string;
  icon: string;       // lucide icon name or SVG path
  eyebrow?: string;
  title: string;
  outcome: string;    // one-line business outcome
  description: string;
  href: string;
}

export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    id: 'ai-strategy',
    icon: 'brain-circuit',
    title: 'AI Strategy',
    outcome: 'From AI experiments to AI-enabled organizations.',
    description:
      'Build a pragmatic AI strategy aligned with your business model, operating structure and transformation goals.',
    href: '/advisory/ai-strategy',
  },
  {
    id: 'digital-transformation',
    icon: 'layers',
    title: 'Digital Transformation',
    outcome: 'Operating models that scale beyond the pilot.',
    description:
      'Design and execute transformation programs that deliver measurable outcomes across people, process and technology.',
    href: '/advisory/digital-transformation',
  },
  {
    id: 'enterprise-agility',
    icon: 'git-branch',
    title: 'Enterprise Agility',
    outcome: 'Agility as an operating model, not a methodology.',
    description:
      'Evolve how your organization operates, decides and delivers at enterprise scale — beyond frameworks and ceremonies.',
    href: '/advisory/enterprise-agility',
  },
  {
    id: 'ai-adoption',
    icon: 'target',
    title: 'AI Adoption',
    outcome: 'From AI awareness to AI-enabled execution.',
    description:
      'Guide your organization through structured AI adoption — from readiness assessment and use-case prioritization to embedded, scalable AI practices.',
    href: '/advisory/ai-adoption',
  },
];
