/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Inter', 'serif'],
        Secondary: ['Playfair Display', 'serif'],
      },
      colors: {
        Red: '#FF3811',
        Dark_1: '#151515',
        Dark_2: '#444',
        Dark_3: '#737373',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
}
