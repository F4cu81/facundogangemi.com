/** @type {import('tailwindcss').Config} */

/**
 * Tailwind CSS configuration for facundogangemi.com
 *
 * Design system: Executive AI Premium
 * Colors, typography, spacing and breakpoints follow
 * strategy/HOMEPAGE_UI_DIRECTION.md and branding/COLOR_SYSTEM.md
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  darkMode: 'class',

  theme: {
    extend: {
      // ─── Colors ───────────────────────────────────────────────────────────
      colors: {
        // Primary — Deep Navy (authority, trust, AI)
        navy: {
          DEFAULT: '#00274C',
          50:  '#E6EEF5',
          100: '#CCDCEB',
          200: '#99B9D6',
          300: '#6696C2',
          400: '#3373AD',
          500: '#005099',
          600: '#003E7A',
          700: '#002D5B',
          800: '#00274C', // brand primary
          900: '#001B35',
          950: '#000E1D',
        },

        // Accent — Muted Orange (action, transformation, CTAs)
        orange: {
          DEFAULT: '#F57C00',
          50:  '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#F57C00', // brand accent
          600: '#EF6C00',
          700: '#E65100',
          800: '#BF360C',
          900: '#8D2A09',
        },

        // Electric Blue — ambient AI / technology accent (optional)
        blue: {
          ai: '#129BFF',
        },

        // Neutrals
        gray: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#F2F2F2', // brand secondary bg
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#121212',
        },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        // Manrope — headings, hero, KPI numerals, strategic statements
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        // Inter — body, UI, navigation, buttons, labels
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Eyebrow labels
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
        // Standard scale extended for desktop hero
        '5xl':  ['3rem', { lineHeight: '1.05' }],
        '6xl':  ['3.75rem', { lineHeight: '1' }],
        '7xl':  ['4.5rem', { lineHeight: '0.97' }],
        '8xl':  ['5rem', { lineHeight: '0.95' }],
      },

      lineHeight: {
        hero: '0.97',
        tight: '1.05',
        snug: '1.2',
        normal: '1.55',
        relaxed: '1.65',
      },

      letterSpacing: {
        eyebrow: '0.1em',
        widest: '0.15em',
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      maxWidth: {
        container: '1280px',
        content: '65ch',
        prose: '72ch',
      },

      spacing: {
        section: '6rem',       // 96px — desktop section padding
        'section-lg': '8rem',  // 128px
        'section-sm': '4rem',  // 64px — tablet
        'section-xs': '3.5rem', // 56px — mobile
      },

      // ─── Border radius ────────────────────────────────────────────────────
      borderRadius: {
        card: '1rem',   // 16px — standard cards
        'card-lg': '1.5rem', // 24px — larger cards
        btn: '0.5rem',  // 8px — standard buttons
      },

      // ─── Shadows ──────────────────────────────────────────────────────────
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)',
        btn: '0 2px 8px rgba(245,124,0,0.25)',
        'btn-hover': '0 4px 16px rgba(245,124,0,0.35)',
        nav: '0 1px 0 rgba(255,255,255,0.06)',
      },

      // ─── Breakpoints ──────────────────────────────────────────────────────
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },

      // ─── Transitions ──────────────────────────────────────────────────────
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0.0, 0, 0.2, 1)',
      },

      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },

      // ─── Animation ────────────────────────────────────────────────────────
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'count-up': 'countUp 0.8s ease-out forwards',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      // ─── Background image ─────────────────────────────────────────────────
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(18,155,255,0.06) 0%, transparent 70%), linear-gradient(135deg, #00274C 0%, #001B35 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #00274C 0%, #001430 100%)',
        'orange-glow':
          'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,124,0,0.12) 0%, transparent 70%)',
      },

      // ─── Z-index ──────────────────────────────────────────────────────────
      zIndex: {
        nav: '100',
        overlay: '200',
        modal: '300',
      },
    },
  },

  plugins: [],
};
