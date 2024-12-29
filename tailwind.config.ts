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
        'primary-gold': 'var(--primary-gold)',
        'secondary-saffron': 'var(--secondary-saffron)',
        'accent-red': 'var(--accent-red)',
        'text-brown': 'var(--text-brown)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        tamil: ['var(--font-tamil)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
