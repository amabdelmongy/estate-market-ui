module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "300px",
      // => @media (min-width: 300px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      pc: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "house-inside": "url('/images/home_inside_01.jpg')",
      },
      aspectRatio: {
        vertical: "9 /16",
      },
    },
  },
  plugins: [],
};
