// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    preset: "react-native",
    rootDir: "./src",
    collectCoverage: true,
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(test).ts?(x)", "**/?(*.)+(test).js?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverageFrom: ["src/components/**/*.{ts,tsx,js,jsx}"],
    transformIgnorePatterns: [
      "node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)"
    ]
  };
};
