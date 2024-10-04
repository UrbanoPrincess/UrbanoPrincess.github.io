import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {

      fontFamily: {
    'serif': ['Merriweather', 'serif'], // Add Merriweather font here
  },
    }
  },

  plugins: []
} as Config;
