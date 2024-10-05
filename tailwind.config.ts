import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: '#9948af', // Custom color for your project
        secondary: '#14171A', // Another custom color if needed
        accent: '#F5A623', // Example color
      },
    },
  },

  plugins: [],
} as Config;
