/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* =========================================
           MAIN BACKGROUND — WHITE / VERY LIGHT PINK
           ========================================= */

        cream: {
          50: '#FFFFFF',
          100: '#FFFCFD',
          200: '#FFF8FA',
          300: '#FDECEF',
        },

        /* =========================================
           DARK NEUTRAL TEXT
           Replaces the old brown/espresso
           ========================================= */

        espresso: {
          700: '#5A4A4F',
          800: '#44383C',
          900: '#2F272A',
        },

        /* =========================================
           SOFT PINK ACCENTS
           ========================================= */

        terracotta: {
          500: '#E89CAF',
          600: '#D97891',
          700: '#C45F78',
        },

        /* =========================================
           VERY LIGHT PINK
           ========================================= */

        clay: {
          100: '#FFF5F7',
          200: '#F9E1E7',
        },

        /* =========================================
           ROSE ACCENT
           ========================================= */

        goldAccent: {
          400: '#E8A8B9',
          500: '#D97891',
        },

        /* =========================================
           MAIN TEXT
           ========================================= */

        charcoal: '#33272B',

        /* =========================================
           EXTRA PINK PALETTE
           ========================================= */

        blush: {
          50: '#FFFFFF',
          100: '#FFFAFB',
          200: '#FFF5F7',
          300: '#FDECEF',
          400: '#F9D9E1',
          500: '#F2BBC9',
          600: '#E89CAF',
          700: '#D97891',
          800: '#C45F78',
          900: '#A94B63',
        },

        white: '#FFFFFF',
      },

      fontFamily: {
        serif: [
          '"Playfair Display"',
          'Cormorant Garamond',
          'Georgia',
          'serif',
        ],

        sans: [
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },

      animation: {
        'fade-up':
          'fadeUp 0.8s cubic-bezier(0.215, 0.610, 0.355, 1) forwards',

        'fade-in':
          'fadeIn 0.6s ease-out forwards',

        'slow-zoom':
          'slowZoom 20s ease-out infinite alternate',

        'float':
          'float 4s ease-in-out infinite',
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },

          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        fadeIn: {
          '0%': {
            opacity: '0',
          },

          '100%': {
            opacity: '1',
          },
        },

        slowZoom: {
          '0%': {
            transform: 'scale(1)',
          },

          '100%': {
            transform: 'scale(1.08)',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },

          '50%': {
            transform: 'translateY(-8px)',
          },
        },
      },
    },
  },

  plugins: [],
}