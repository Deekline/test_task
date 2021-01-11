module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'linebreak-style': 0,
    "react/prop-types": ["off", {}],
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-props-no-spreading": 0,
    'react/jsx-curly-brace-presence': 0,
    '@typescript-eslint/ban-ts-comment': [1, {
      'ts-expect-error': 'allow-with-description'
    }],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/label-has-associated-control": 1,
    'jsx-a11y/no-static-element-interactions': [
      1,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    "react/button-has-type": 0,
  },
};
