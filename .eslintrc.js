module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/eslint-plugin-next/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],

  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
