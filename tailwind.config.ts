import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#3E5468',
        card: '#FFFFFF',
        muted: '#F4F7F9',
        'muted-foreground': '#6B7F90',
        border: '#D6E0E7',
        navy: '#102A43',
        petrol: '#17799E',
        tuerkis: '#27AFC4',
        accent: '#17799E',
        'accent-dark': '#102A43',
        'accent-light': '#27AFC4',
        destructive: '#DC2626',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '24px',
        xl: '36px',
        '2xl': '48px',
      },
      spacing: {
        0: '0',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        80: '80px',
        96: '96px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'light': '0 4px 6px rgba(0, 0, 0, 0.07)',
      },
      transitionDuration: {
        200: '200ms',
        250: '250ms',
        300: '300ms',
      },
    },
  },
  plugins: [],
} satisfies Config
