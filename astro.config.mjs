// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

/**
 * Astro configuration for facundogangemi.com
 *
 * Static site — GitHub Pages compatible.
 * Primary language: English (/)
 * Future secondary language: Spanish (/es/)
 *
 * @see https://docs.astro.build/en/reference/configuration-reference/
 */
export default defineConfig({
  site: 'https://facundogangemi.com',

  // GitHub Pages deployment: set base to '/' for custom domain
  // If deploying to <user>.github.io/<repo>, set base: '/<repo>/'
  base: '/',

  // Output: static — required for GitHub Pages
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-ES' } } }),
  ],

  vite: {
    css: {
      transformer: 'lightningcss',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
      },
    },
  },

  // i18n routing — English primary, Spanish future
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  // Performance: inline stylesheets below 4kb
  build: {
    inlineStylesheets: 'auto',
  },
});