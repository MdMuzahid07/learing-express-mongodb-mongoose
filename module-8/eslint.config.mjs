import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    languageOptions: { globals: globals.browser },
    ignores: ["**/node_modules/", ".dist/"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error"
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];