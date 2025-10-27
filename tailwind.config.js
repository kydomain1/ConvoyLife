/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Morandi Color Palette - Soft and Sweet
        'morandi': {
          'pink': '#E8C4C4',
          'peach': '#F5DEB3',
          'lavender': '#D4C5D8',
          'sage': '#C8D5B9',
          'blue': '#B8C9D8',
          'cream': '#F5EFE7',
          'rose': '#E5B8B8',
          'mint': '#C8E0D4',
          'lilac': '#DCC6E0',
          'sand': '#E8DCC4',
        },
        'primary': '#E8C4C4',
        'secondary': '#D4C5D8',
        'accent': '#C8D5B9',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

