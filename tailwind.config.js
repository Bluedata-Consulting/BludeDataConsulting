/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html" /* ... */],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "blue-shade-1": "#163278",
        "blue-shade-2": "#0F4187",
        "blue-shade-3": "#114DC7",
        "blue-shade-4": "#135BEA",
        "blue-shade-5": "#DDEDFF",
        "blue-shade-6": "#74b3fa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
