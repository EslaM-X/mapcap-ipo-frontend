/**
 * MapCap IPO - ESLint Quality Guard v1.2
 * ---------------------------------------------------------
 * Architect: Eslam Kora | AppDev @Map-of-Pi
 * Purpose: Enforces clean code standards and React 19 best practices.
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignore build artifacts and dependency folders
  { ignores: ['dist', 'node_modules', '.vite'] },
  
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        // Adding Pi Network SDK global variable to prevent 'not defined' errors
        Pi: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Recommended JS & React rules
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
      // MapCap Specific Guardrails
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Clean Code: Allow variables starting with underscores (common in Web3/API logic)
      'no-unused-vars': ['error', { 
        vars: 'all', 
        args: 'after-used', 
        ignoreRestSiblings: true,
        varsIgnorePattern: '^[A-Z_]' 
      }],
      
      // Console logging: Warn in dev, but helps Daniel during Audit
      'no-console': 'off', 
    },
  },
]
