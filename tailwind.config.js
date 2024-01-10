/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      yellow: "#faab36",
      orange: "#f78104",
      red: "#fd5901",
      lightgreen: "#249ea0",
      green: "#008083",
      darkgreen: "#005f60",
      gray: "#555",
      darkgray: "#333",
      white: "#ffffff",
      lightgray: "#d3dce6",
    },
    extend: {
      fontFamily: {
        body: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
