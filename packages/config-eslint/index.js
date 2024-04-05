module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "prefer-arrow", "import"],
  rules: {
    "import/no-named-as-default": 0,
    "react/function-component-definition": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/jsx-filename-extension": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "no-restricted-syntax": [
      "error",
      "FunctionExpression",
      "FunctionDeclaration",
    ],
  },
};
