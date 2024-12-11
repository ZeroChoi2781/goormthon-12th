import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

export const META: ContentMeta = {
    desc: '',
    outLink: {
        githubIssue:
            'https://github.com/goorm-dev/gds/issues/new?title=[Badge]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Badge',
        storybook: 'https://gds.goorm.io/?path=/story/core-badge',
        library: '',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Badge: {
        color: {
            type: 'radio',
            list: [
                'primary',
                'success',
                'warning',
                'danger',
                'hint',
                'contrast',
            ],
            defaultValue: 'primary',
        },
        size: {
            type: 'radio',
            list: ['sm', 'md', 'lg'],
            defaultValue: 'md',
        },
        pill: {
            type: 'boolean',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    color: {
        description: '',
        type: 'BadgeColor',
        valueList: [
            'primary',
            'success',
            'warning',
            'danger',
            'hint',
            'contrast',
        ],

        defaultValue: 'primary',
    },
    size: {
        type: 'BadgeSize',
        description: '',
        valueList: ['sm', 'md', 'lg'],
        defaultValue: 'md',
    },
    pill: {
        description: '알약 형태를 결정합니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
    className: {
        type: 'string',
        description: '',
        valueList: [],
    },
    children: {
        type: 'ReactNode',
        description: '',
        valueList: [],
    },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Badge WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Badge는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'WCAG',
                descriptions: [
                    'WCAG 2.x criterion 1.4.3 (level AA)를 준수하고 있습니다.',
                ],
            },
        ],
    },
};
