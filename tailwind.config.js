/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    fontFamily:{
      sans: 'var(--font-mulish)',
    },
    colors: {
      white: {
      500: '#ffffff',
      },
      black: {
        500: '#141414',
        600: '#1c1c1e',
        },
      pink: {
        500: '#B736BA',
        },
      purple:{
       500:'#7033F5',
      },
      green: {
          500: '#6CDE9D',
        },
      
      },
    },
  },
  plugins: [],
}

