import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        secondary: '#9948af', 
        accent: '#000000', 
        primary:'#2A0134'
      },
      fontFamily: {
        'pt-serif': ['PT Serif', 'serif'],
      },
    },
  },

  plugins: [],
} as Config;
