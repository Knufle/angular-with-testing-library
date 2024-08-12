module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    transform: {
      '^.+\\.(ts|html)$': 'jest-preset-angular',
    },
    moduleNameMapper: {
      '^@app/(.*)': '<rootDir>/src/app/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  };
  