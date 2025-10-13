import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      next: nextPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      // React 관련
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      
      // Google TypeScript Style Guide 규칙
      // 변수 선언
      'no-var': 'error',
      'prefer-const': 'error',
      
      // 타입 관련
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      
      // 명명 규칙
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
      
      // 코드 품질
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      
      // 비교 연산자
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      
      // 세미콜론
      'semi': ['error', 'always'],
      
      // 따옴표
      'quotes': ['error', 'single', { avoidEscape: true }],
      
      // 기타
      'camelcase': 'off',
      ...tseslint.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
];
