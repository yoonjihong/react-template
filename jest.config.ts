/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
    '~styles/(.*)$': '<rootDir>/src/styles/$1',
    '~components/(.*)$': '<rootDir>/src/components/$1',
    '~assets/(.*)$': '<rootDir>/src/assets/$1',
    '~pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};
