module.exports = {
    extension: ['.ts', '.tsx'],
    exclude: [
      '*.js',
      '**/*.test.ts',
      '**/*.d.ts',
      '**/coverage',
      '**/tests',
      '**/dist',
      '**/.yarn',
      'wallaby.js',
    ],
    all: true,
    reporter: ['cobertura', 'html'],
    checkCoverage: true,
    lines: 5,
    statements: 5,
    functions: 5,
    branches: 5,
  };
  