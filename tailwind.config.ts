import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        pretend: ['Pretendard Variable', 'sans-serif'],
      },

      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: '#0F4C81',
        secondary: '#FFAA00',
        tertiary: '#173F5F',
        ui: '#E9E9E9',
        quaternary: '#20639B',
        quinary: '#ED553B',
        senary: '#3CAEA3',
      },
    },
  },
  plugins: [],
};
export default config;
