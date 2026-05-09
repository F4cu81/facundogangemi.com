/**
 * Navigation data — facundogangemi.com
 * Source: HOMEPAGE_COPY_DECK_EN.md + PLATFORM_STRATEGY.md
 */

export interface NavItem {
  label: string;
  href: string;
  /** If true, show as a dropdown/mega-menu trigger */
  hasDropdown?: boolean;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Advisory',
    href: '/advisory',
    hasDropdown: true,
    children: [
      { label: 'AI Strategy',            href: '/advisory/ai-strategy' },
      { label: 'Digital Transformation', href: '/advisory/digital-transformation' },
      { label: 'Enterprise Agility',     href: '/advisory/enterprise-agility' },
      { label: 'AI Adoption',            href: '/advisory/ai-adoption' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights',     href: '/insights' },
  { label: 'Speaking',     href: '/speaking' },
  { label: 'About',        href: '/about' },
];

export const NAV_CTA = {
  label: 'Book Advisory Call',
  href: '/contact',
};

export const FOOTER_NAV = {
  advisory: [
    { label: 'AI Strategy Advisory',      href: '/advisory/ai-strategy' },
    { label: 'Digital Transformation',     href: '/advisory/digital-transformation' },
    { label: 'Enterprise Agility',         href: '/advisory/enterprise-agility' },
    { label: 'AI Adoption & Enablement',   href: '/advisory/ai-adoption' },
    { label: 'Executive Advisory Hub',     href: '/advisory' },
  ],
  resources: [
    { label: 'Insights',        href: '/insights' },
    { label: 'Case Studies',    href: '/case-studies' },
    { label: 'Speaking',        href: '/speaking' },
    { label: 'AI Assessment',   href: '/ai-assessment' },
    { label: 'Newsletter',      href: '/newsletter' },
  ],
  about: [
    { label: 'About Facundo', href: '/about' },
    { label: 'Contact',       href: '/contact' },
  ],
};
