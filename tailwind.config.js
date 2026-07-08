/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ink: "#141612",
        moss: "#3A5A40",
        body: "#5A5D52",
        mute: "#6B6E64",
        dim: "#9A9A8C",
        line: "#DDDCD2",
        "line-soft": "#E2E0D5",
        paper: "#FFFFFF",
        danger: "#A8502E",
      },
    },
  },
  plugins: [],
};
