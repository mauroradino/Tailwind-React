/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      "screens": {
        "xs": "400px",
        "s": "500px",
        "md": "850px"
      }
    },
  },
  plugins: [],
}

