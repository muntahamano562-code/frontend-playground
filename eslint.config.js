"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const ESLintPluginReactHooks = require('eslint-plugin-react-hooks');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-functions': 'warn',
    ...ESLintPluginReactHooks.configs.all.rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {},
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['dist/', '.eslintrc.cjs'],
};
