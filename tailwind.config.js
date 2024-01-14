/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage: {
        desktop: "url('assets/images/bg-header-desktop.png')",
        mobile: "url('assets/images/bg-header-mobile.png')",
      },
      colors: {
        primary: '#26baa4',
        secondary: '#6173ff',
        darkGreyBlue: '#4c545d',
        GrayishBlue: '#9fabb2',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [],
};
