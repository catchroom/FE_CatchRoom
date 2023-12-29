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

    colors: {
      main: '#FF3478',
      mint: '#00DBA3',
      raspberry: '#FE5868',
      mango: '#FFA811',
      white: '#ffffff',
      black: '#000000',
      'gray-100': '#F8F9FB',
      'gray-200': '#EFF1F4',
      'gray-250': '#E8E8E8',
      'gray-300': '#DBDEE3',
      'gray-400': '#BCC0C6',
      'gray-500': '#9FA3AB',
      'gray-600': '#717680',
      'gray-700': '#4B515B',
      'gray-800': '#363B44',
      'gray-900': '#292C36',
      'gray-1000': '#15181E',
      'pink-100': '#FFEBF1',
      'pink-200': '#FFD6E4',
      'pink-300': '#FFAEC9',
      'pink-400': '#FF85AE',
      'pink-500': '#FF5D93',
      'pink-600': '#FF3478',
      'pink-700': '#DD2160',
      'pink-800': '#BB124B',
      'pink-900': '#770028',
      'pink-1000': '#55001D',
    },

    fontSize: {
      h1: ['24px', '32px'],
      h2: ['20px', '28px'],
      h3: ['18px', '28px'],
      t1: ['16px', '24px'],
      t2: ['14px', '20px'],
      t3: ['12px', '16px'],
      p1: ['16px', '24px'],
      p2: ['14px', '20px'],
      p3: ['12px', '16px'],
      p4: ['11px', '12px'],
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
    },
  },
  plugins: [],
};
export default config;
