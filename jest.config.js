module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  restoreMocks: true,
  // Adjust the following patterns according to your project's structure
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'json', 'cobertura', 'text', 'text-summary', 'json-summary'],
  testTimeout: 60000,
};