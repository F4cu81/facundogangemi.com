/**
 * Trusted organizations logo data
 * Source: ASSET_INVENTORY.md + PLATFORM_STRATEGY.md
 *
 * Legal note: logos represent real enterprise experience only.
 * Do not imply formal partnership or endorsement.
 */

export interface TrustedLogo {
  name: string;
  src: string;        // path relative to /public/
  width: number;
  height: number;
  alt: string;
}

export const TRUSTED_LOGOS: TrustedLogo[] = [
  {
    name: 'Santander',
    src: '/assets/logos/trusted/logo-santander.svg',
    width: 120,
    height: 32,
    alt: 'Santander',
  },
  {
    name: 'BBVA',
    src: '/assets/logos/trusted/logo-bbva.svg',
    width: 80,
    height: 32,
    alt: 'BBVA',
  },
  {
    name: 'CaixaBank',
    src: '/assets/logos/trusted/logo-caixabank.svg',
    width: 110,
    height: 32,
    alt: 'CaixaBank',
  },
  {
    name: 'Kruger',
    src: '/assets/logos/trusted/logo-kruger.svg',
    width: 100,
    height: 32,
    alt: 'Kruger Corporation',
  },
  {
    name: 'Mercantil Andina',
    src: '/assets/logos/trusted/logo-mercantil-andina.svg',
    width: 130,
    height: 32,
    alt: 'Mercantil Andina',
  },
  {
    name: 'Telefónica',
    src: '/assets/logos/trusted/logo-telefonica.svg',
    width: 110,
    height: 32,
    alt: 'Telefónica',
  },
];
