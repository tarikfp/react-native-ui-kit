// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    preset: "react-native",
    rootDir: "./",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(test).ts?(x)", "**/?(*.)+(test).js?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverageFrom: ["./src/components/**"],
    transformIgnorePatterns: [
      "node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)",
    ],
  };
};
