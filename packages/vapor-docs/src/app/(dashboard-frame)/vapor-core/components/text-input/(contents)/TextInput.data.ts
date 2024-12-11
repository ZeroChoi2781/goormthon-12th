import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

export const META: ContentMeta = {
    desc: 'TextInput은 사용자로부터 텍스트를 입력받을 수 있는 입력 필드입니다.',
    outLink: {
        githubIssue:
            'https://github.com/goorm-dev/gds/issues/new?title=[TextInput]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/TextInput',
        storybook: 'https://gds.goorm.io/?path=/story/core-textinput',
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
    TextInput: {
        //     size: {
        //         type: 'sizes',
        //     },
        //     iconSide: {
        //         type: 'string',
        //         list: ['right', 'left'],
        //     },
        size: {
            type: 'select',
            list: ['md', 'lg', 'xl'],
        },
        invalid: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
        },
        type: {
            type: 'select',
            list: ['text', 'password', 'number', 'email', 'tel'],
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    size: {
        description: '사이즈를 설정합니다.',
        valueList: ['md', 'lg', 'xl'],
        defaultValue: 'md',
    },
    invalid: {
        description: 'TextInput의 유효성을 설정합니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
    value: {
        description: 'TextInput을 제어형식으로 사용할 때 사용합니다.',
        defaultValue: 'undefined',
        type: 'string',
    },
    onValueChange: { description: '', type: '' },
    children: { description: '', type: '' },
    disabled: {
        description: 'TextInput의 비활성화 여부를 설정합니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
    defaultValue: { description: '', type: '', defaultValue: '' },
    id: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'TextInput WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor TextInput은 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'label',
                descriptions: [
                    '텍스트 입력에는 명확하고 설명적인 가시적 레이블이 있어야 합니다.',
                    '<label> 요소를 사용하여 텍스트 입력에 접근 가능한 이름을 제공해야 합니다',
                    '추가 지침은 aria-describedby를 사용하여 프로그래밍 방식으로 입력과 연결해야 합니다',
                    '플레이스홀더 텍스트는 레이블을 대체할 수 없습니다. 플레이스홀더 텍스트는 입력에 값이 입력되면 사라지고, 색상 대비가 낮아 접근성 요구사항을 충족하지 못할 수 있습니다',
                ],
            },
            {
                accessibility: 'id',
                descriptions: ['TextInput에 고유한 id 속성을 부여합니다.'],
            },
            {
                accessibility: 'htmlFor',
                descriptions: [
                    '연관된 레이블 요소에 htmlFor 속성을 사용하여 TextInput의 id 를 참조',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'id',
                descriptions: [
                    'Props로 id와 htmlFor를 넘겨주지 않는 경우, 내부적으로 자동으로 생성해 줍니다.',
                ],
            },
        ],
    },
};

export const LABEL_PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '추가적인 스타일을 적용할 클래스를 설정합니다.',
        defaultValue: 'undefined',
        type: 'string',
    },
};

export const FIELD_PROPS_TABLE: ContentPropsTable = {
    placeholder: {
        description: 'placeholder를 설정합니다.',
        defaultValue: 'undefined',
        type: 'string',
    },
};
