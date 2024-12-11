module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    overrides: [
        {
            files: '*.hbs',
            options: {
                parser: 'typescript',
            },
        },
    ],
    /**
     * TODO: Prettier 3 <-> @trivago/prettier-plugin-sort-imports 호환안됨 해결하기
     * @link https://github.com/goorm-dev/gds/issues/216
     */
    importOrder: [
        '^react(.*)',
        '<THIRD_PARTY_MODULES>',
        '^_vapor-icons/(.*)$',
        '^_vapor-components/(.*)$',
        '^(_vapor-[^/]+)(/.*)?$',
        '^App',
        '^_constants',
        '^[./]',
        '^types',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    // plugins: ['@goorm-dev/eslint-config-goorm/prettier'],
};
