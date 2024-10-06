import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        secondary: '#9948af', // Example color for secondary
        accent: '#000000', 
      },
      fontFamily: {
        'pt-serif': ['PT Serif', 'serif'],
      },
    },
  },

  plugins: [],
} as Config;
