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
        primary: '#8C89CC',
        light: '#A38ECF',
        dark: '#8673AA',
        background: '#292728',
        foreground: '#282627',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
