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
            'https://github.com/goorm-dev/gds/issues/new?title=[Checkbox]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Checkbox',
        storybook: 'https://gds.goorm.io/?path=/story/core-checkbox',
        library: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Checkbox: {
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
    invalid: {
        description: 'Checkbox의 유효하지 않은 상태입니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
    size: {
        description: 'Checkbox의 크기입니다.',
        valueList: ['md', 'lg'],
        defaultValue: 'md',
    },
    children: {
        description: 'Checkbox의 자식 요소입니다.',
        valueList: [],
    },
    className: {
        description: 'Checkbox의 className입니다.',
        type: 'string',
    },
    checked: {
        description: 'Checkbox의 체크 여부입니다.',
        valueList: ['boolean', 'indeterminate'],
        defaultValue: 'false',
    },
    disabled: {
        description: 'Checkbox를 비활성화 시킵니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
    id: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Slider WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Slider는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'aria-valuemin',
                descriptions: [
                    '슬라이더 요소는 최소값을 나타내는 10진수 형식의 aria-valuemin 속성을 가집니다.',
                ],
            },
            {
                accessibility: 'aria-valuemax',
                descriptions: [
                    '슬라이더 요소는 최소값을 나타내는 10진수 형식의 aria-valuemax 속성을 가집니다.',
                ],
            },
            {
                accessibility: 'aria-valuenow',
                descriptions: [
                    '사용자에게 익숙하지 않은 값일 경우 (e.g. 요일/날짜가 숫자로 표현) aria-valuetext 속성으로 슬라이더 값을 이해할 수 있는 문자열로 설정됩니다. (e.g. “월요일”, “9월 30일”)',
                    'ariaValueText 혹은 getAriaValueText 로 설정해줘야 합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'role=”slider”',
                descriptions: [
                    '포커스 가능한 슬라이더 컨트롤 역할을 하는 요소(e.g. thumb)는 role=”slider”를 가집니다.',
                ],
            },
            {
                accessibility: 'aria-valuenow',
                descriptions: [
                    '슬라이더 요소는 현재 슬라이더 값을 의미하는 10 진수 형식의 aria-valuenow 속성을 가집니다.',
                ],
            },
            {
                accessibility: 'aria-orientation',
                descriptions: [
                    '슬라이더의 방향에 따라 aria-orientation 이 “horizontal” 입니다.',
                ],
            },
            {
                accessibility: 'thumb',
                descriptions: [
                    'thumb이 두 개 이상일 때, 각 thumb는 서로를 통과할 수 없습니다.',
                    '하단의 범위를 설정하는 thumb의 최대값은 상단의 범위를 설정하는 thumb의 현재 값으로 제한됩니다.',
                    '상단의 범위를 설정하는 thumb의 최소값은 하단의 범위를 설정하는 thumb의 현재 값으로 제한됩니다.',
                ],
            },
        ],
    },
    keyboardInteractionsTable: {
        keyboardInteractionsTitle: '버튼을 구성하는 요소를 설명합니다.',
        keyboardTable: [
            {
                name: 'Right Arrow',
                descriptions: ['슬라이더의 값을 1 step씩 늘립니다.'],
            },
            {
                name: 'Up Arrow',
                descriptions: ['슬라이더의 값을 1 step씩 늘립니다.'],
            },
            {
                name: 'Left Arrow',
                descriptions: ['슬라이더의 값을 1 step씩 줄입니다.'],
            },
            {
                name: 'Down Arrow',
                descriptions: ['슬라이더의 값을 1 step씩 줄입니다.'],
            },
            {
                name: 'Home',
                descriptions: [
                    '슬라이더를 범위 내에서 허용되는 첫 번째 값으로 설정합니다.',
                ],
            },
            {
                name: 'End',
                descriptions: [
                    '슬라이더를 범위 내에서 허용되는 마지막 값으로 설정합니다.',
                ],
            },
            {
                name: 'Page Up',
                descriptions: [
                    '슬라이더 값을 1 step보다 더 큰 양으로 늘립니다.',
                ],
            },
            {
                name: 'Page Down',
                descriptions: [
                    '슬라이더 값을 1 step보다 더 큰 양으로 늘립니다.',
                ],
            },
        ],
    },
};
