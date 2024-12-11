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
            'https://github.com/goorm-dev/gds/issues/new?title=[SearchInput]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/SearchInput',
        storybook: 'https://gds.goorm.io/?path=/story/core-searchinput',
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
    SearchInput: {
        size: {
            type: 'sizes',
        },
        disabled: {
            type: 'boolean',
        },
        invalid: {
            type: 'boolean',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    size: {
        description: 'SearchInput의 크기를 지정합니다. ',
        valueList: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
    },
    disabled: {
        description: 'SearchInput의 상호작용 여부를 지정합니다.',
        defaultValue: 'false',
    },
    invalid: {
        description: 'SearchInput의 value가 유효하지 않음을 지정합니다.',
        defaultValue: 'false',
    },
    className: { description: '', type: '' },
    children: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'SearchInput WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor SearchInput는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'label',
                descriptions: [
                    '검색창이 무엇을 검색하기 위한 용도인지 안내해야 합니다.',
                    '레이블이 화면에 노출되지 않기를 원한다면 visuallyHidden 옵션으로 가릴 수 있습니다.',
                ],
            },
            {
                accessibility: 'id',
                descriptions: [
                    'SearchInput.Field에 고유한 id 속성을 부여합니다.',
                    'SearchInput.Label 컴포넌트와의 연결을 위해서 사용되기도 합니다.',
                ],
            },
            {
                accessibility: 'htmlFor',
                descriptions: [
                    'SearchInput.Label에 htmlFor 속성을 부여하여 동일한 id를 가진 SearchInput.Field와 연결합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'role=”searchbox”',
                descriptions: [
                    '해당 입력창이 검색을 위한 용도임을 안내합니다.',
                ],
            },
            {
                accessibility: 'id',
                descriptions: [
                    'id, htmlFor에 직접 값을 입력하지 않으면 컴포넌트 내부에서 임의의 값을 추가하여 연결합니다.',
                ],
            },
        ],
    },
    keyboardInteractionsTable: {
        devNoteTitle: '버튼을 구성하는 요소를 설명합니다.',
        keyboardTable: [
            {
                name: 'Esc',
                descriptions: ['입력된 값을 모두 제거합니다.'],
            },
        ],
    },
};

export const FIELD_PROPS_TABLE: ContentPropsTable = {
    id: {
        description: 'SearchInput의 고유한 ID를 지정합니다.',
        defaultValue: '""',
    },
    value: {
        description: 'SearchInput에 표시할 값을 지정합니다.',
        defaultValue: '""',
    },
    defaultValue: {
        description: 'SearchInput의 기본값을 지정합니다.',
        defaultValue: '""',
    },
    onChange: {
        description: 'SearchInput의 값이 변경될 때 호출되는 함수입니다.',
        defaultValue: '(value: string) => void',
    },
};

export const LABEL_PROPS_TABLE: ContentPropsTable = {
    htmlFor: {
        description: '연결하고자 하는 입력 필드의 ID를 지정합니다.',
        defaultValue: '""',
    },
    visuallyHidden: {
        description: 'Label의 시각적 표시 여부를 지정합니다.',
        defaultValue: '""',
    },
};
