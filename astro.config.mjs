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
    sitemap({
      filter: (page) =>
        ![
          'https://facundogangemi.com/speaking/',
          'https://facundogangemi.com/newsletter/',
          'https://facundogangemi.com/ai-assessment/',
          'https://facundogangemi.com/es/',
          // Legacy WordPress URL compatibility pages — excluded from sitemap
          'https://facundogangemi.com/contacto/',
          'https://facundogangemi.com/curriculum/',
          'https://facundogangemi.com/proyectos-portfolio/',
          'https://facundogangemi.com/articulos/',
          'https://facundogangemi.com/del-management-1-0-al-3-0-la-transformacion-empresarial/',
          'https://facundogangemi.com/el-rol-del-lider-en-el-cambio-organizacional/',
          'https://facundogangemi.com/lean-portfolio-management/',
        ].includes(page),
    }),
  ],

  vite: {
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