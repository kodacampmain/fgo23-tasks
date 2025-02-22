import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
    {languageOptions: { globals: globals.node }},
    {
        rules: {
            quotes: ["error", "double"],
            indent: ["error", 4, { "SwitchCase": 1 }],
            semi: ["error", "always"],
            "eol-last": ["error", "always"]
        }
    }
];