import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': '@typescript-eslint/eslint-plugin',
            prettier: 'eslint-plugin-prettier',
        },
        rules: {
            'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
    },
    ...compat.extends('next/core-web-vitals'),
    ...compat.extends('next/typescript'),
    prettier,
];

export default eslintConfig;
