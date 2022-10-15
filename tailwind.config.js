/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', 'serif'],
      },
      contrast: {
        110: '1.10',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
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
