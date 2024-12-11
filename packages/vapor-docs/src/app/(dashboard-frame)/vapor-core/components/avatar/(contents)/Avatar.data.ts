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
            'https://github.com/goorm-dev/gds/issues/new?title=[Avatar]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Avatar',
        storybook: 'https://gds.goorm.io/?path=/story/core-avatar',
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
    Avatar: {
        size: {
            type: 'select',
            list: ['sm', 'md', 'lg', 'xl'],
        },
        square: {
            type: 'boolean',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    size: {
        description: 'Avatar의 너비를 결정합니다.',
        valueList: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
        type: 'string',
    },
    square: {
        description: 'Avatar의 모서리 둥글기를 결정합니다.',
        valueList: [],
        defaultValue: 'false',
    },
    label: {
        description: '대체 텍스트를 지정합니다.',

        options: {
            required: true,
        },

        valueList: [],
    },
    className: { description: '', type: '' },
    style: { description: '', type: '' },
    children: {
        description: 'React.children',
    },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Avatar WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Avatar는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'label',
                descriptions: [
                    '아바타 이미지의 대체 텍스트를 지정합니다.',
                    '이미지를 불러오는 데에 실패한 경우, label의 첫 글자를 대체 UI로 사용합니다.',
                ],
            },
        ],
    },
};

export const IMAGE_PROPS_TABLE: ContentPropsTable = {
    src: {
        description: '이미지 주소를 지정합니다.',
    },
};
