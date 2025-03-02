// @ts-check
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['eslint.config.mjs', 'dist', 'node_modules']
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      // '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/no-floating-promises': 'warn',
      // '@typescript-eslint/no-unsafe-argument': 'warn',
      'prettier/prettier': ['warn', { singleQuote: true, semi: false }]
    }
  },
  eslintPluginPrettierRecommended
]
