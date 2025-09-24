import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#02030A',
          900: '#050814',
          800: '#0A1430',
          700: '#121E3F',
          600: '#1B2A52',
          500: '#6F7A95',
        },
        mint: {
          600: '#00CDA4',
          500: '#1FE6B5',
          400: '#58F6CB',
          300: '#9CFCDD',
        },
        iris: {
          600: '#4A4DF0',
          500: '#6568FF',
          400: '#8C90FF',
          300: '#B6BAFF',
        },
      },
      boxShadow: {
        'card-lg': '0 24px 60px rgba(6,10,28,0.28)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(120% 120% at 15% 20%, rgba(31,230,181,0.35) 0%, rgba(10,20,48,0) 60%)',
        'panel-sheen': 'linear-gradient(135deg, rgba(101,104,255,0.12), rgba(31,230,181,0.06))',
      },
    },
  },
  plugins: [],
}

export default config
