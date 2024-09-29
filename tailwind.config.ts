import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        videoCardFade: 'videoCardFade 1s forwards',
        linksCardScale: 'linksCardScale 1s forwards'
      },
      keyframes: {
        videoCardFade: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          },
        },
        linksCardScale: {
          '0%': {
            transform: 'scale(0.5)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },
      }
    },
    screens: {
      xs: '420px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
};
export default config;
