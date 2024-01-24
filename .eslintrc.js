module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Should be the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["prettier"],
  rules: {
    // Place to specify ESLint rules - can be used to overwrite rules specified from the extended configurations
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-vars": "off", // Disable the "is defined but never used" error
    "@typescript-eslint/no-unused-vars": ["off"], // Disable the "is defined but never used" error
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    ["prettier/prettier"]: ["error", { endOfLine: "auto" }],
  },
};
