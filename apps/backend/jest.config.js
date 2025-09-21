export default {
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '^#utils/(.*)$': '<rootDir>/utils/$1',
    '^#modules/(.*)$': '<rootDir>/modules/$1'
  },
  transform: {},
  extensionsToTreatAsEsm: ['.js'],
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js']
};