/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  safelist:['animate-fade-in-up'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      contrast: {
        110: '1.10',
      },
      colors: {
        'dark-primary': '#21165f',
      },
      animation: {
        // Definir la animación personalizada
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        // Definir los pasos de la animación
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@headlessui/tailwindcss'),
  ],
  daisyui: {
    theme: true,
    themes: [
      {
        mytheme: {
          primary: '#3926ae',
          secondary: '#4ecdc4',
          accent: '#6750fa',
          neutral: '#1E1E1E',
          'base-100': '#FFFFFF',
          info: '#0288d1',
          success: '#2e7d32',
          warning: '#ffcc00',
          error: '#d32f2f',
        },
      },
    ],
  },
};

module.exports = config;
