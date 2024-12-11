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
            'https://github.com/goorm-dev/gds/issues/new?title=[Text] ',
        github: '',
        storybook: '',
        library: '',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

const TEXT_TYPOGRAPHY = [
    ...Array.from({ length: 6 }, (_, index) => `heading${index + 1}`),
    ...Array.from({ length: 4 }, (_, index) => `body${index + 1}`),
    ...Array.from({ length: 2 }, (_, index) => `subtitle${index + 1}`),
];

const SEMANTIC_TEXT_FOUNDATION = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'hint',
    'contrast',
    'light',
];

const SEMANTIC_TEXT_VALUES = SEMANTIC_TEXT_FOUNDATION.map((semanticColor) => {
    return [`text-${semanticColor}`, `text-${semanticColor}-alternative`];
});

const TEXT_COLORS = [
    ...SEMANTIC_TEXT_VALUES.flat(),
    'text-alternative',
    'text-normal',
    'text-exception',
    'inherit',
];

export const EXAMPLE: ContentExample = {
    // examples..
    Text: {
        typography: {
            type: 'select',
            list: TEXT_TYPOGRAPHY,
        },
        color: {
            type: 'select',
            list: TEXT_COLORS,
        },
        align: {
            type: 'inline-radio',
            list: ['left', 'center', 'right'],
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    as: {
        description: 'HTML 태그를 지정합니다.',
        defaultValue: 'span',
    },
    asChild: {
        description:
            '기본으로 렌더링되는 요소를 자식으로 전달달되는 요소로 변경하며, 이들의 속성과 동작을 병합합니다.',
        defaultValue: 'false',
    },
    typography: {
        description: '텍스트의 스타일을 지정합니다.',
        defaultValue: 'body1',
    },
    color: {
        description: '텍스트의 색상을 지정합니다.',
        defaultValue: 'text-normal',
    },
    align: {
        description: '텍스트의 정렬을 지정합니다.',
        defaultValue: 'left',
    },
    className: {
        description: '컴포넌트에 추가되는 클래스 이름을 지정합니다.',
    },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Text WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Text는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'as',
                descriptions: [
                    'as 속성을 사용하여 컴포넌트의 기본 태그를 변경할 수 있습니다. 기본값은 span 태그입니다.',
                    '해당 prop은 시맨틱 마크업을 준수하기 위해 다양한 HTML 요소를 사용할 수 있도록 합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'ref',
                descriptions: [
                    'ref 속성을 사용하여 컴포넌트에 대한 참조를 전달할 수 있습니다. 이는 포커스 관리, 텍스트 조작 및 기타 접근성 기능 구현에 유용합니다.',
                ],
            },
        ],
    },
};
