import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    radio: {
      valid: {
        colors: ['pink'],
      },
      styles: {
        colors: {
          pink: {
            color: 'text-main',
            border: 'checked:border-main',
            before: 'checked:before:bg-main',
          },
        },
      },
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },

    colors: {
      main: '#FF3478',
      mint: '#00DBA3',
      rate: '#47B1AA',
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
      focus: '#FF3478',
      text: {
        DEFAULT: '#15181e',
        primary: '#FF3478',
        sub: '#717680',
        disabled: '#bcc0c6',
        on: '#ffffff',
        secondary: '#9fa3ab',
        critical: '#dd3344',
      },
      bg: '#F8F9FB',
      surface: {
        DEFAULT: '#ffffff',
        sub: '#f8f9fb',
        gray: '#eff1f4',
        primary: '#ffebf1',
        critical: '#fff2f3',
        secondary: '#dbdee3',
      },
      action: {
        primary: '#FF3478',
        'primary-disabled': '#dbdee3',
        'secondary-disabled': 'rgba(113, 118, 128, 0.15)',
      },
      border: {
        DEFAULT: '#eff1f4',
        primary: '#FF3478',
        secondary: '#15181e',
        sub: '#dbdee3',
        minimal: '#f8f9fb',
        critical: '#dd3344',
      },
      divider: {
        DEFAULT: '#eff1f4',
        sub: '#dbdee3',
        minimal: '#ffffff',
        secondary: '#dbdee3',
      },
      icon: {
        DEFAULT: '#15181e',
        primary: '#FF3478',
        'primary-disabled': 'rgba(255, 52, 120, 0.3)',
        secondary: '#9fa3ab',
        'secondary-disabled': '#bcc0c6',
        critical: '#dd3344',
      },
      field: {
        primary: '#ffebf1',
        secondary: '#f8f9fb',
      },
      blue: undefined,
      purple: undefined,
      red: undefined,
      green: undefined,
      yellow: undefined,
      indigo: undefined,
      pink: undefined,
      rose: undefined,
      fuchsia: undefined,
      cyan: undefined,
      teal: undefined,
      orange: undefined,
      lime: undefined,
      emerald: undefined,
      sky: undefined,
      violet: undefined,
      amber: undefined,
      'light-blue': undefined,
      'light-green': undefined,
      coolGray: undefined,
      trueGray: undefined,
      warmGray: undefined,
      blueGray: undefined,
      slate: undefined,
      gray: undefined,
      zinc: undefined,
      neutral: undefined,
      stone: undefined,
      brown: undefined,
      'blue-gray': undefined,
      'deep-orange': undefined,
      'deep-purple': undefined,
    },

    fontSize: {
      h1: ['32px', '44px'],
      h2: ['28px', '36px'],
      h3: ['24px', '32px'],
      h4: ['22px', '32px'],
      h5: ['20px', '28px'],
      t1: ['18px', '28px'],
      t2: ['16px', '24px'],
      t3: ['14px', '20px'],
      t4: ['12px', '16px'],
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
});
export default config;
