/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      header: ["Poppins"],
      open: ["Open Sans"],
    },
    extend: {
      colors: {
        light: "#fff",
        gray: "#323232",
        dark: "#111",
        info: "#3498db",
        danger: "#f9004d",
        warning: "#f1c40f",
        success: "#07bc0c",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
