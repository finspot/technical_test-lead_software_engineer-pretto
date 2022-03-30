module.exports = {
  bail: true,
  collectCoverageFrom: ["src/app/**/*.ts?(x)", "!src/app/index.tsx"],
  coverageReporters: ["html", "text-summary"],
  errorOnDeprecated: true,
  logHeapUsage: true,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "~/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./test/setup.ts",
  ],
  testEnvironment: "jsdom",
  verbose: false,
};
