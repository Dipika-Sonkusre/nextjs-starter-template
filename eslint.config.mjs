import pluginJs from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  // Ignore generated and dependency files
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "coverage/**",
    ],
  },

  ...nextVitals,
  ...nextTs,

  // Files to lint
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },

  // Browser globals
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Recommended javaScript rules
  pluginJs.configs.recommended,

  // Recommended typeScript rules
  ...tseslint.configs.recommended,

  // Recommended react rules
  pluginReact.configs.flat.recommended,

  // Custom rules
  {
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "always"],
      "react/self-closing-comp": "error",

      // General JavaScript/TypeScript rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "eqeqeq": ["error", "always"],
      "curly": "error",
      "no-unused-vars": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
