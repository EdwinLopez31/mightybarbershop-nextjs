module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Lato, sans-serif',
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
