import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#8C89CC',
        light: '#A38ECF',
        dark: '#8673AA',
        accent: '#854FDB',
        background: '#292728',
        foreground: '#101010',
        secondary: '#E5E3E0',
        text: '#FFFFFF',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },

      animation: {
        typing: 'typing 3.5s steps(20) infinite alternate, blink .7s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
