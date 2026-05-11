/**
 * About page data — facundogangemi.com
 * Source: MASTER_CONTEXT.md + Phase 5a prompt
 */

export interface ValueBlock {
  title: string;
  description: string;
}

export interface ExperienceItem {
  category: string;
  items: string[];
}

export interface EnterpriseContext {
  category: string;
  companies: string[];
}

export interface ApproachStep {
  number: number;
  title: string;
  description: string;
}

export const VALUE_BLOCKS: ValueBlock[] = [
  {
    title: 'Strategic Execution',
    description:
      'Connects vision, OKRs, QBRs, governance and delivery discipline to measurable outcomes.',
  },
  {
    title: 'Enterprise Transformation',
    description:
      'Helps organizations redesign ways of working, decision-making systems, team structures and execution models.',
  },
  {
    title: 'AI & Digital Strategy',
    description:
      'Frames AI as a business transformation lever connected to operating models, data, technology and adoption.',
  },
  {
    title: 'Banking & Financial Services',
    description:
      'Brings transformation experience across financial services, enterprise technology and consulting environments.',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    category: 'Transformation Expertise',
    items: [
      'Agile Transformation',
      'Digital Transformation',
      'Enterprise Transformation',
      'Operating Model Redesign',
    ],
  },
  {
    category: 'Execution Systems',
    items: ['OKRs & QBRs', 'Governance Frameworks', 'Portfolio Management', 'Delivery Excellence'],
  },
  {
    category: 'Strategic Domains',
    items: ['AI Strategy', 'Product Strategy', 'Technology Strategy', 'Organizational Agility'],
  },
  {
    category: 'Industries & Contexts',
    items: [
      'Banking & Financial Services',
      'Technology Organizations',
      'Energy & Utilities',
      'Consulting Environments',
    ],
  },
];

export const ENTERPRISE_CONTEXTS: EnterpriseContext[] = [
  {
    category: 'Financial Services',
    companies: ['BBVA', 'BNP Paribas Cardif', 'CaixaBank', 'Caja Piura', 'Chubb', 'Colmena', 'AIG', 'Santander'],
  },
  {
    category: 'Enterprise Technology & Industry',
    companies: ['Enel', 'GIRE', 'INVAP', 'Sistran', 'Telefónica', 'AMDOCS'],
  },
];

export const INTERNATIONAL_COUNTRIES = [
  'Argentina',
  'Chile',
  'Dominican Republic',
  'Mexico',
  'Peru',
  'Spain',
  'United States',
  'Uruguay',
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: 1,
    title: 'Understand the business context',
    description:
      'Before technology decisions, clarify goals, constraints, stakeholders, operating model and execution gaps.',
  },
  {
    number: 2,
    title: 'Connect strategy with execution',
    description:
      'Translate ambition into OKRs, roadmaps, governance, cadences and measurable business outcomes.',
  },
  {
    number: 3,
    title: 'Design adaptive operating models',
    description:
      'Combine agility, product thinking, data, AI and technology to improve how organizations work.',
  },
  {
    number: 4,
    title: 'Measure business impact',
    description:
      'Focus on outcomes, adoption, execution flow, decision quality and value delivered.',
  },
];

export const ABOUT_PAGE_META = {
  title: 'About Facundo Gangemi | AI Strategy & Transformation Leader',
  description:
    'Learn about Facundo Gangemi, an AI Strategy and Transformation Leader helping enterprise organizations connect digital transformation, operating models, agility and business execution.',
};
