module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Lato, sans-serif',
      },
      colors: {
        invalidRed: '#ad3e3e',
        jetBlack: '#1e1e1e',
        aquaGreen: '#3ead81',
        lightGray: '#f2f2f2',
        mediumLightGray: '#f3f3f3'
      }
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "invalid"]
    },
  },
  plugins: [require("tailwindcss-invalid-variant-plugin")],
}
