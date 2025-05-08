/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // blue-800
          light: '#3b82f6', // blue-500
          dark: '#1e3a8a', // blue-900
        },
        secondary: {
          DEFAULT: '#f0f9ff', // sky-50
          light: '#ffffff',
          dark: '#e0f2fe', // sky-100
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}
