/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 255, 255, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        aqua: '#00ffff',
        marine: '#013f4d',
        'blue-400': '#60a5fa',
        deep: {
          800: '#001a33',
          900: '#001f3f',
        },
        ocean: {
          800: '#004466',
          900: '#003355',
        },
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