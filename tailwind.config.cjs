module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    boxShadow: {
      DEFAULT: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    },
    colors: {
      accent1: "#fc5c63",
      "accent1-hover": "#fc5057",
      error2: "#e52626",
      neutral1: "#050505",
      neutral3: "#d3d3d3",
      neutral4: "#f5f5f5",
      primary1: "#006855",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Maison Neue", "sans-serif"],
    },
    screens: {
      md: "1024px",
      sm: "744px",
    },
  },
};
