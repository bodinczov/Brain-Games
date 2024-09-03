export default [
  {
      ignores: ['node_modules/**', 'eslint.config.js'],
      languageOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module'
      },
      linterOptions: {
          reportUnusedDisableDirectives: true,
      },
      rules: {
          'semi': ['error', 'always'],
          'quotes': ['error', 'single'],
          'no-unused-vars': 'warn',
          'no-console': 'off',
          'indent': ['error', 2],
          'comma-dangle': ['error', 'never'],
          'eqeqeq': ['error', 'always'],
      },
  }
];
