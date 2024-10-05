import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  'html, body': {
    fontSize: '16px',
    letterSpacing: '0.1rem',
    color: 'gray.800',
    lineHeight: '1.5',
    background: 'background',
  },
  html: {
    '--global-font-body': 'Roboto, sans-serif',
  },
  h2: {
    fontFamily: 'Oswald',
  },
})

export default defineConfig({
  globalCss,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      tokens: {
        colors: {
          primary: {
            main: { value: '#0891b2' },
          },
          background: { value: '#fff' },
        },
        fonts: {
          fira: { value: 'var(--font-fira-code)' },
        },
        shadows: {
          neumorphism: {
            dent: {
              value: 'inset 2px 2px 6px #babecc, inset -4px -4px 10px #ffffff73',
            },
            bump: {
              value: '2px 2px 6px #babecc, -4px -4px 10px #ffffff73',
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
