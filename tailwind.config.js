/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '425px'},    // 640px - 767px
      'md': {'max': '768px'},   // 768px - 1023px
      // 'lg': {'max': '1279px'},   // 1024px - 1279px
      // 'xl': {'min': '1280px'},   // 1280px and above
    },
    extend: {},
  },
  plugins: [],
}

