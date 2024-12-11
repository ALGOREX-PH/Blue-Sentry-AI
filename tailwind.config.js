/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: '#00ffff',
        marine: '#013f4d',
        deep: '#001f3f',
        purple: '#5e239d',
        surface: {
          900: 'rgba(1, 63, 77, 0.95)',
          800: 'rgba(0, 31, 63, 0.85)',
          700: 'rgba(94, 35, 157, 0.75)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, rgba(0, 255, 255, 0.15) 0%, rgba(0, 31, 63, 0.35) 100%)',
      },
    },
  },
  plugins: [],
};