/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'black': '#333333',
      'black-transparent': 'rgba(51, 51, 51, 0.5)',
      'white': '#ffffff',
      'primary': '#ffc000'
    },
    fontSize: {
      base: '1.6rem',
      lg: '2.4rem',
      xl: '4rem',
      xxl: '9.6rem'
    }
  },
  plugins: [],
}
