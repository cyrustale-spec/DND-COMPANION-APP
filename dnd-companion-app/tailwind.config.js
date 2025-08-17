/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#722F37', // Deep burgundy
        'accent-gold': '#D4AF37',
        'accent-green': '#50C878',
        'accent-orange': '#FF6B35',
        'brand-brown': {
          light: '#A0522D',
          dark: '#8B4513',
        },
        'brand-cream': '#F5F5DC',
        'brand-charcoal': '#36454F',
        'brand-off-white': '#FAFAFA',
        'brand-rich-black': '#1A1A1A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}