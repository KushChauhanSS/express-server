/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'dist',
  ],
  coveragePathIgnorePatterns: [
    'src/controllers/feedback',
    'src/controllers/trainee',
    'src/repositories/feedback'
  ]
};
