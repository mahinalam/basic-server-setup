// import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { process: "readonly" } } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      // "@typescript-eslint/prefer-const": "error",
      // "@typescript-eslint/no-explicit-any": "error",
      // "@typescript-eslint/no-non-null-assertion": "error",
      // "@typescript-eslint/no-inferrable-types": "off",
      // "@typescript-eslint/no-var-requires": "off",
    },
  },
];

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";

// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,ts}"],
//     languageOptions: {
//       globals: globals.browser,
//     },
//     rules: {
//       "no-unused-vars": "error",
//       "no-unused-expressions": "error",
//       "prefer-const": "error",
//       "no-console": "warn",
//       "no-undef": "error",
//     },
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];
