module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  testMatch: ["**/tests/**/*.test.(ts|js)"],
  testEnvironment: "node",
};
