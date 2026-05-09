/**
 * Site-wide constants — facundogangemi.com
 * Source: MASTER_CONTEXT.md + HOMEPAGE_COPY_DECK_EN.md + DEVELOPMENT_PROMPT.md
 */

export const SITE = {
  name: 'Facundo Gangemi',
  title: 'Facundo Gangemi — AI Strategy & Enterprise Transformation Advisor',
  description:
    'Executive advisory for AI Strategy, Digital Transformation and Intelligent Operating Models. Helping organizations transform with clarity, structure and measurable results.',
  url: 'https://facundogangemi.com',
  locale: 'en',
  twitterHandle: '@facundogangemi',

  // Contact — replace with real values before launch
  email: 'REPLACE_WITH_FACUNDO_EMAIL',
  linkedin: 'https://linkedin.com/in/facundogangemi',

  // Lead capture webhooks — configure in production
  makeContactWebhook: 'REPLACE_WITH_MAKE_WEBHOOK_URL',
  makeNewsletterWebhook: 'REPLACE_WITH_NEWSLETTER_WEBHOOK_URL',

  // Open Graph defaults
  ogImage: '/assets/og/og-home.webp',

  // i18n
  languages: ['en', 'es'] as const,
  defaultLanguage: 'en' as const,
} as const;

export type SupportedLocale = typeof SITE.languages[number];
