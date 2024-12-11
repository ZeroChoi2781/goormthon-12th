module.exports = {
    extends: '../../.eslintrc.js',
    parserOptions: {
        project: './tsconfig.json',
    },
    overrides: [
        {
            files: ['./**/*.ts', './**/*.tsx'],
            rules: {
                '@typescript-eslint/consistent-type-imports': 'error',
                '@typescript-eslint/consistent-type-exports': 'error',
            },
        },
    ],
};
