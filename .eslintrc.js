const alias = require('./alias');

module.exports = {
    ignorePatterns: [
        '*.config.js',
        '.eslintrc.js',
        'storybook-static',
        'tsconfig.json',
        'stories/components-docs-only/**',
        '**/dist/*',
        '**/*.d.ts',
    ],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@goorm-dev/eslint-config-goorm/typescript-react',
        'eslint:recommended',
        'eslint-config-prettier',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['import', 'react', 'jsx-a11y'],
    settings: {
        'import/resolver': {
            'babel-module': {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                alias,
            },
        },
    },
    /** NOTE: 0, 1, 2처럼 숫자값으로 관리하기 보다 off, warn, error로 표시하기 */
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/forbid-prop-types': ['error', { forbid: ['any'] }],
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'consistent-return': 'off',

        /**
         * 웹 접근성 관련 lint
         */
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/interactive-supports-focus': 'warn',

        /**
         * storybook의 story 코드에만 적용 Lint
         */
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'always',
            },
        ],
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'error',
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
            },
        ],
    },

    overrides: [
        /** NOTE: 해당 부분은 ts|tsx 만 잘 걸러내주면 추가적인 overrides가 필요없기에 아래와 같이 수정 */
        {
            parserOptions: {
                project: './tsconfig.json',
            },
            files: ['*.ts', '*.tsx'],
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:prettier/recommended',
            ],
            rules: {
                'react/prop-types': 'off',
                'react/destructuring-assignment': 'error',
            },
        },
    ],
};
