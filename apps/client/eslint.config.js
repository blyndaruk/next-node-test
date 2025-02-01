const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'public',
      'package.json',
      'yarn.lock',
      'next.config.js',
      'src/app/graphql',
      'src/app/shared/validation',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^next', '^@?\\w'],
            ['^next', '^./?\\w'],
            ['^react', '^./?\\w'],
            ['^react', '^@?\\w'],
            ['^(@|modules)(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
