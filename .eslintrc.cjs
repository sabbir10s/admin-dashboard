module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18.2', // Specify the version of React you are using
    },
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  rules: {
    // General ESLint Rules
    'no-console': 'error',
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-destructuring': 'error',

    // React-specific Rules
    'react/prop-types': 'off', // Disable prop-types since React now has TypeScript/PropTypes
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spreading': 'off', // Enable this rule if you don't use prop spreading
    'react/react-in-jsx-scope': 'off', // Enable this rule if you're not using React 17+ with automatic JSX transformation

    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Import Rules
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // Prettier Rules
    'prettier/prettier': 'error',
  },
};
