/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#FAF9F6',
        ivory: '#F2EFE8',
        ink: '#0C3038',
        slate: '#3B5A62',
        deep: '#014052',
        abyss: '#02222B',
        amber: '#F7A422',
      },
      fontFamily: {
        display: ['"Josefin Sans"', 'sans-serif'],
        body: ['Poppins', 'Verdana', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
        luxewide: '0.32em',
      },
      borderColor: {
        hairline: 'rgba(12, 48, 56, 0.14)',
        'hairline-light': 'rgba(250, 249, 246, 0.18)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
