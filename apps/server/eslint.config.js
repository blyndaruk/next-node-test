const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
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
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^@nestjs', '^@?\\w'],
            ['^(@/)(/*.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
    },
  },
];
