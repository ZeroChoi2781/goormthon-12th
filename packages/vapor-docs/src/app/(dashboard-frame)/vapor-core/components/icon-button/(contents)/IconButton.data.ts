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
            'https://github.com/goorm-dev/gds/issues/new?title=[IconButton]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/IconButton',
        storybook: 'https://gds.goorm.io/?path=/story/core-iconbutton',
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
    IconButton: {
        size: {
            type: 'select',
            list: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
        },
        color: {
            type: 'select',
            list: [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
                'contrast',
                'hint',
            ],
            defaultValue: 'primary',
        },
        rounded: {
            type: 'boolean',
            defaultValue: 'false',
        },
        disabled: {
            type: 'boolean',
            defaultValue: 'false',
        },
        shape: {
            type: 'select',
            list: ['fill', 'outline', 'invisible'],
            defaultValue: 'fill',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'IconButton WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor IconButton은 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'aria-label',
                descriptions: [
                    '버튼의 기능을 설명하는 접근 가능한 이름을 제공해야 합니다.',
                    '아이콘 버튼의 경우, 아이콘의 모양이 아닌 기능을 간결하게 설명해야 합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'aria-hidden',
                descriptions: [
                    '아이콘은 주로 장식적 요소이므로, aria-hidden="true"를 사용하여 스크린 리더가 이를 읽지 않도록 \n하여 불필요한 정보 전달을 방지하도록 합니다.',
                ],
            },
        ],
    },
};
