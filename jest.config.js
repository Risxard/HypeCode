module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'], 
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}