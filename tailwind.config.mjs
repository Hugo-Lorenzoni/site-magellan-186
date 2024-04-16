/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#42E1DD", // cyan
        secondary: "#52DFAE", // green
        dark: "#00040B", // dark blue
      },
      dropShadow: {
        normal: [
          "0 1px 2px rgb(0 0 0 / 1)",
          "0 1px 8px rgb(0 0 0 / 0.8)",
          "0 0px 12px rgb(0 0 0 / 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
