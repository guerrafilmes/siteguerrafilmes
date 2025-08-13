import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0d0d0d',
          fg: '#f0f2f2',
          accent: '#c23e3c'
        }
      }
    }
  },
  plugins: []
} satisfies Config
