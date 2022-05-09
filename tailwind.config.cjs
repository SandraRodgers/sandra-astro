module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#1C0D55",
      secondary: "#781160",
      tertiary: "#EA7051",
      success: "#017e66",
      info: "#4D8075",
      warning: "#FEB34F",
      danger: "#FEB34F",
      white: "#FFF",
      // gray: "#9ca3af",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-intersect")],
};
