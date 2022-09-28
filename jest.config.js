module.exports = {
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@service(.*)$': '<rootDir>/src/service$1',
    '^@controller(.*)$': '<rootDir>/src/controllers$1',
    '^@schemas(.*)$': '<rootDir>/src/schemas$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
};
