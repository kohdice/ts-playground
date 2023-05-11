/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
};
