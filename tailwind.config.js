/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        rtl: {
          css: {
            direction: "rtl",
          },
        },
      },
      colors: {
        dark: {
          background: "#131313",
          text: "#525CEB",
          component: "#272727",
          backgroundL: "#1C1C1C",
        },
        light: {
          primary: "#fff",
          secondary: "#111827",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
