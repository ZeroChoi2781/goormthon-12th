module.exports = {
    extends: '../../.eslintrc.js',
    parserOptions: {
        project: './tsconfig.json',
    },
    overrides: [
        {
            files: ['./**/*'],
            rules: {
                '@typescript-eslint/consistent-type-imports': 'error',
                '@typescript-eslint/consistent-type-exports': 'error',

                'react/react-in-jsx-scope': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-misused-promises': 'off',
                'import/no-unresolved': 'off',
                'import/extensions': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
            },
        },
    ],
};
