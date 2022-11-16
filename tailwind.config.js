/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Red Rose"'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
