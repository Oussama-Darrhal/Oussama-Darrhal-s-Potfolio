/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.snap-y': {
          scrollSnapType: 'y mandatory',
        },
        '.snap-start': {
          scrollSnapAlign: 'start',
        },
        '.snap-end': {
          scrollSnapAlign: 'end',
        },
        '.snap-center': {
          scrollSnapAlign: 'center',
        },
        '.snap-align-none': {
          scrollSnapAlign: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
}