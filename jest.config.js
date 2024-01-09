module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src'],
  coveragePathIgnorePatterns: ['<rootDir>/dist'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**"],
  coverageThreshold: {
    "global": {
      "lines": 70
    }
  },
};
