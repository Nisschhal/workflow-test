// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"

export default [
  // Ignore common directories
  { ignores: ["dist", "node_modules"] },

  // Base configuration: target JS/JSX files, browser globals, and recommended JS rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    ...js.configs.recommended,
  },

  // React recommended rules (single object — do NOT spread with ...)
  react.configs.flat.recommended,

  // Support for React 17+ new JSX transform (no need to import React)
  react.configs.flat["jsx-runtime"],

  // Optional: React settings (helps with version detection and some rules)
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
