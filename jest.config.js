module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "<rootDir>/styleMock.js",
  },
};
