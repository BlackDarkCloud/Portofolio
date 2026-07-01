/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F12",
        panel: "#16181D",
        line: "#272B33",
        paper: "#F2EFE9",
        muted: "#9CA0AA",
        amber: {
          DEFAULT: "#E8A33D",
          dim: "#A6743A",
        },
        signal: "#3D5A55",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(242,239,233,0.04) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
