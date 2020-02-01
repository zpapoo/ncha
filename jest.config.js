module.exports = {
  testRegex: '\\.test\\.ts$',
  moduleNameMapper: {
    '^constants(.*)$': '<rootDir>/constants$1',
    '^__tests__(.*)$': '<rootDir>/__tests__$1',
    '^utils(.*)$': '<rootDir>/utils$1',
    '^features(.*)$': '<rootDir>/features$1',
    '^api(.*)$': '<rootDir>/api$1',
  },
  transform: {
    '^.+\\.(t|j)s?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'jsx',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
