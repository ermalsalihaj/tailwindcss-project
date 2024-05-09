/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#8C0808",
        "color-primary-light": "#D91A1A",
        "color-primary-dark": "#400409",
        "color-secondary": "#BF8C88",
        "color-gray": "#333",
        "color-white": "#fff",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [],
};
