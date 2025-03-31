import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { sourceType: "module" } },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  {
    ignores: [
      "node_modules/",
      ".husky/",
      "eslint.config.js",
      ".prettierrc.json",
    ],
    rules: {
      "no-unused-vars": "warn"
    }
  }
]);