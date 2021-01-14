module.export = {
  preset: 'ts-jest',
  // All imported modules in your tests should be mocked automatically
  automock: false,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  // Automatically reset mock state between every test
  resetMocks: false,
  // Reset the module registry before running each individual test
  resetModules: false,
  // Automatically restore mock state between every test
  restoreMocks: false,
  // The test environment that will be used for testing
  testEnvironment: 'node',
}
