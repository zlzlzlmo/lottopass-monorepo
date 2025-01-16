const js = require('@eslint/js');
const globals = require('globals');
const reactPlugin = require('eslint-plugin-react');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended, // ESLint 기본 권장 설정
  tsPlugin.configs.recommended, // TypeScript 권장 설정
  reactPlugin.configs.recommended, // React 권장 설정
  {
    // 공통 설정
    files: ['**/*.{js,jsx,ts,tsx}'], // 검사할 파일
    ignores: ['node_modules', 'dist', 'build'], // 무시할 경로
    languageOptions: {
      parser: tsParser, // TypeScript 파서
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser, // 브라우저 글로벌 객체 활성화
    },
    rules: {
      // 공통 규칙
      'no-console': 'warn', // console 경고
      eqeqeq: 'error', // 강력한 비교 연산자
    },
  },
  {
    // React 전용 설정
    files: ['**/*.{jsx,tsx}'], // React 관련 파일
    languageOptions: {
      ecmaFeatures: {
        jsx: true, // JSX 활성화
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
      'react/jsx-uses-react': 'off',
    },
  },
  {
    // TypeScript 전용 설정
    files: ['**/*.ts', '**/*.tsx'], // TypeScript 관련 파일
    languageOptions: {
      parser: tsParser, // TypeScript 파서
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'], // 미사용 변수 경고
    },
  },
];
