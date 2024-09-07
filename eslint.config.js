export default [
  {
    ignores: ['node_modules/**', '/project/code/eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'quotes': ['error', 'single'], 
      'semi': ['error', 'always'],  
      'comma-dangle': ['error', 'never'],  
      'indent': ['error', 2], 
      'no-multi-spaces': 'error', 
      'eol-last': ['error', 'always'],
      'no-var': 'error', 
      'prefer-const': 'error', 
      'no-unused-vars': 'error',
      'eqeqeq': ['error', 'always'],
      'no-implicit-globals': 'error', 
      'curly': ['error', 'all']
    }
  }
];
