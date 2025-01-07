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
        'spin-reverse': 'spin 6s linear infinite reverse'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'spin-reverse': 'spin 6s linear infinite reverse',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-out': 'fadeOut 0.5s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
};