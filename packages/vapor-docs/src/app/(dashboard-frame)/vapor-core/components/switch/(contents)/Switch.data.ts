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
            'https://github.com/goorm-dev/gds/issues/new?title=[Switch] ',
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

export const EXAMPLE: ContentExample = {
    // examples..
    Switch: {
        //     size: {
        //         type: 'sizes',
        //     },
        //     iconSide: {
        //         type: 'string',
        //         list: ['right', 'left'],
        //     },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    disabled: {
        description: 'Switch 컴포넌트의 사용 가능 여부를 지정합니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    size: {
        description: 'Switch.Indicator의 크기를 결정합니다.',
        type: 'SwitchSize',
        valueList: ['sm', 'md', 'lg'],
        defaultValue: 'md',
    },
    children: {
        description: 'Children Node',
        type: 'ReactNode',
        options: {
            required: true,
        },
    },
    className: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Switch WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Switch는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'aria-label',
                descriptions: [
                    'Switch에 가시적으로 보이는 레이블이 없는 경우 제공해야 하는 레이블입니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'role=”switch”',
                descriptions: ['체크박스는 switch 역할을 가집니다.'],
            },
            {
                accessibility: 'aria-checked',
                descriptions: [
                    '토글 가능한 UI 요소의 상태를 스크린 리더와 같은 보조 기술에 전달하기 위해 사용됩니다.',
                ],
            },
            {
                accessibility: 'id',
                descriptions: [
                    '내부적으로 고유한 id를 생성해 Switch.Label이 Switch의 id를 참조할 수 있도록 설정해 줍니다.',
                ],
            },
        ],
    },
    keyboardInteractionsTable: {
        devNoteTitle: '버튼을 구성하는 요소를 설명합니다.',
        keyboardTable: [
            {
                name: 'Space',
                descriptions: [
                    '스위치에 포커스가 있을 때 Space 키를 누르면 스위치의 상태가 변경됩니다.',
                ],
            },
        ],
    },
};

export const LABEL_PROPS_TABLE: ContentPropsTable = {
    visuallyHidden: {
        description: 'Switch.Label의 시각적 표시 여부를 지정합니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    typography: {
        description: 'Switch.Label의 Typography를 지정합니다.',
        type: 'TypographyValue',
        defaultValue: 'body2',
    },
    color: {
        description: 'Switch.Label의 글자 색상을 지정합니다.',
        type: 'ColorValue',
        defaultValue: 'text-normal',
    },
    children: {
        description: 'Children Node',
        type: 'ReactNode',
        options: {
            required: true,
        },
    },
};
