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
            'https://github.com/goorm-dev/gds/issues/new?title=[Dialog]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Dialog',
        storybook: 'https://gds.goorm.io/?path=/story/core-dialog',
        library: 'https://www.radix-ui.com/primitives/docs/components/dialog',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Dialog: {
        // size: {
        //     type: 'list',
        //     list: ['md', 'lg', 'xl'],
        // },
        // scrimClickable: {
        //     type: 'boolean',
        // },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    size: {
        description: 'Dialog의 너비를 결정합니다.',
        valueList: ['md', 'lg', 'xl'],
        defaultValue: 'md',
    },
    scrimClickable: {
        description:
            'Scrim 영역을 클릭했을 때 다이얼로그 닫힘 여부를 결정합니다.',
        defaultValue: 'true',
    },
    children: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Dialog WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Dialog은 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'Dialog.Title',
                descriptions: [
                    '다이얼로그는 항상 제목을 입력해야 합니다.',
                    'Dialog에서 기본적으로 제공하는 서브 컴포넌트인 Dialog.Title를 이용하여 제목을 지정할 수 있습니다.',
                ],
            },
            {
                accessibility: 'Dialog.Description',
                descriptions: [
                    'Dialog의 기능 및 역할을 보충 설명합니다.',
                    'Dialog의 기능 및 역할을 제목(Dialog.Title)만으로 설명하지 못하는 경우, 보충 설명합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'focus',
                descriptions: [
                    '다이얼로그가 열리면 사용자의 포커스는 다이얼로그 내부의 포커스 가능한 첫 번째 요소로 이동합니다.',
                    '다이얼로그가 닫히면 사용자의 포커스는 다이얼로그의 트리거 요소로 이동합니다.',
                    '다이얼로그 내부의 마지막 포커스에서 탭을 누르면 첫 번째 포커스 요소로 이동합니다.',
                ],
            },
            {
                accessibility: 'aria-labelledby',
                descriptions: [
                    '해당 속성이 적용되는 요소의 제목이 될 요소와 연결합니다.',
                ],
            },
            {
                accessibility: 'aria-describedby',
                descriptions: [
                    '해당 속성이 적용되는 요소의 보충 설명이 될 요소와 연결합니다.',
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
                    '다이얼로그의 트리거에 포커스가 있을 때, 다이얼로그를 열림 상태로 변경합니다.',
                ],
            },
            {
                name: 'Enter',
                descriptions: [
                    '다이얼로그의 트리거에 포커스가 있을 때, 다이얼로그를 열림 상태로 변경합니다.',
                ],
            },
            {
                name: 'Tab',
                descriptions: [
                    '다이얼로그 내부에서 포커스 가능한 다음 요소로 이동합니다.',
                ],
            },
            {
                name: 'Shift + Tab',
                descriptions: [
                    '다이얼로그 내부에서 포커스 가능한 이전 요소로 이동합니다.',
                ],
            },
            {
                name: 'Esc',
                descriptions: [
                    '다이얼로그를 닫고, 트리거 요소로 포커스를 이동합니다.',
                ],
            },
        ],
    },
};

export const CONTENTS_PROPS_TABLE: ContentPropsTable = {
    maxHeight: {
        description:
            '다이얼로그의 최대 높이를 지정합니다.(80vh 초과 시 자동조정)',
        defaultValue: '80vh',
    },
};

export const BODY_PROPS_TABLE: ContentPropsTable = {
    expanded: {
        description: 'Body 컴포넌트의 좌우 여백의 여부를 결정합니다.',
        defaultValue: 'false',
    },
};
