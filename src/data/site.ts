/**
 * Site-wide constants — facundogangemi.com
 * Source: MASTER_CONTEXT.md + HOMEPAGE_COPY_DECK_EN.md + DEVELOPMENT_PROMPT.md
 */

export const SITE = {
  name: 'Facundo Gangemi',
  title: 'Facundo Gangemi — AI Strategy & Enterprise Transformation Advisor',
  description:
    'Executive advisory for AI Strategy, Digital Transformation and Operating Models. Helping enterprise leaders build clarity and measurable business impact.',
  url: 'https://facundogangemi.com',
  locale: 'en',
  twitterHandle: '@facundogangemi',

  // Contact — replace with real values before launch
  email: 'facundo.gangemi@facundogangemi.com',
  linkedin: 'https://linkedin.com/in/facundogangemi',

  // Open Graph defaults — used as fallback when a page does not set its own ogImage
  ogImage: '/assets/og/og-default.webp',

  // i18n
  languages: ['en', 'es'] as const,
  defaultLanguage: 'en' as const,
} as const;

export type SupportedLocale = typeof SITE.languages[number];
