// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const regexPlugin = require('eslint-plugin-regex');
const prettierConfig = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      tseslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    plugins: {
      prettier: prettierPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'prettier/prettier': 'error', // Enforce Prettier formatting as lint errors
      '@typescript-eslint/no-explicit-any': 'error', // Forbid usage of 'any'
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    plugins: { regex: regexPlugin },
    rules: {
      'regex/invalid': [
        'error',
        [
          {
            regex: '\\bmax-[a-z0-9]+:?\\b',
            message:
              "Do not use Tailwind's `max-*` responsive prefixes. Use mobile-first approach with `sm:`, `md:`, etc.",
          },
          {
            regex: '(?<=class=[\'"][^\'"]*)\\[[^\\]]+\\](?=[^\'"]*[\'"])',

            message:
              "Do not use Tailwind's arbitrary values like `[value]`. Stick to predefined utility classes for consistency.",
          },
        ],
      ],
    },
  },
);
