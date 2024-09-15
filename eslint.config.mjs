const globals = require("globals");
const pluginJs = require("@eslint/eslint-plugin");
const tseslint = require("typescript-eslint");
const pluginReactConfig = require("eslint-plugin-react").configs.recommended;

module.exports = {
  languageOptions: { globals: globals.browser },
  extends: [
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    pluginReactConfig,
  ]
};