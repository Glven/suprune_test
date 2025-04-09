import fsd from "@conarti/eslint-plugin-feature-sliced";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: [ "dist" ] },
    {
        extends: [ js.configs.recommended, ...tseslint.configs.recommended ],
        files: [ "**/*.{js,jsx,ts,tsx}" ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@conarti/feature-sliced": fsd,
            import: importPlugin,
            react,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [ "warn", { allowConstantExport: true } ],
            "react/jsx-max-props-per-line": [ 1, { maximum: 1 } ],
            "react/jsx-first-prop-new-line": [ 1, "multiline" ],
            "@conarti/feature-sliced/layers-slices": "error",
            "@conarti/feature-sliced/absolute-relative": "error",
            "@conarti/feature-sliced/public-api": "error",
            "quotes": [
                "error",
                "double",
                {
                    "allowTemplateLiterals": true,
                    "avoidEscape": true,
                },
            ],
            "comma-dangle": [ "error", {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never",
            } ],
            "semi": [ "error", "always" ],
            "array-callback-return": "error",
            "no-case-declarations": "error",
            "no-confusing-arrow": "error",
            "import/no-duplicates": [ "error", {
                "considerQueryString": true,
            } ],
            "prefer-rest-params": "error",
            "no-var": "error",
            "curly": [ "error", "all" ],
            "func-style": [
                "error",
                "declaration",
                {
                    "allowArrowFunctions": true,
                },
            ],
            "prefer-arrow-callback": "error",
            "prefer-template": "error",
            "prefer-const": "error",
            "func-call-spacing": [ "error", "never" ],
            "implicit-arrow-linebreak": [ "error", "beside" ],
            "import/first": "error",
            "import/no-mutable-exports": "error",
            "indent": [ "error", "tab" ],
            "no-constant-condition": "error",
            "no-empty": "error",
            "no-multiple-empty-lines": "error",
            "no-sparse-arrays": "error",
            "no-template-curly-in-string": "error",
            "no-trailing-spaces": "error",
            "no-undef": "off",
            "no-unneeded-ternary": "error",
            "nonblock-statement-body-position": [ "error", "beside" ],
            "object-curly-spacing": [ "error", "always" ],
            "padded-blocks": [ "error", "never" ],
            "no-new-func": "error",
            "no-loop-func": "error",
            "no-param-reassign": "error",
            "no-eval": "error",
            "no-const-assign": "error",
            "no-else-return": "error",
            "dot-notation": "error",
            "wrap-iife": [ "error", "outside" ],
            "arrow-parens": [ "error", "as-needed" ],
            "arrow-spacing": "error",
            "space-before-blocks": "error",
            "space-infix-ops": [ "error", {
                "int32Hint": false,
            } ],
            "array-element-newline": [ "error", {
                "minItems": 3,
            } ],
            "array-bracket-newline": [ "error", {
                "minItems": 3,
            } ],
            "array-bracket-spacing": [
                "error",
                "always",
                {
                    "singleValue": true,
                },
            ],
            "import/order": [ "error", {
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true,
                },
                "newlines-between": "always",
                "pathGroups": [
                    {
                        "group": "internal",
                        "position": "after",
                        "pattern": "~/pages/**",
                    },
                    {
                        "group": "internal",
                        "position": "after",
                        "pattern": "~/widgets/**",
                    },
                    {
                        "group": "internal",
                        "position": "after",
                        "pattern": "~/features/**",
                    },
                    {
                        "group": "internal",
                        "position": "after",
                        "pattern": "~/entities/**",
                    },
                    {
                        "group": "internal",
                        "position": "after",
                        "pattern": "~/shared/**",
                    },
                ],
                "pathGroupsExcludedImportTypes": [ "builtin" ],
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
            } ],
        },
        ignores: [ "src/shared/api/gql/*" ],
    }
);