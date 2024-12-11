import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

export const META: ContentMeta = {
    desc: '',
    outLink: {
        githubIssue: 'https://github.com/goorm-dev/gds/issues/new?title=[Tabs]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Tabs',
        storybook: 'https://gds.goorm.io/?path=/story/core-tabs',
        library: 'https://www.radix-ui.com/primitives/docs/components/tabs',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Tabs: {
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
    size: {
        description: 'Tabs의 크기를 지정합니다.',
        valueList: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
    },
    direction: { description: '', type: '', defaultValue: 'horizontal' },
    stretch: {
        description:
            'Tabs.Button의 너비를 상위 요소의 width에 맞게 조정합니다.',
        defaultValue: 'false',
    },
    position: { description: '', type: '', defaultValue: 'start' },
    className: { description: '', type: '' },
    children: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Tabs WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Tabs는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'value',
                descriptions: [
                    'Tabs.Button과 Tabs.Panel의 value props는 반드시 1:1 대응해야 합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'role=”tab”',
                descriptions: [
                    '해당 요소는 tab 요소임을 안내합니다.',
                    'tab 요소는 tablist 요소 내부에 위치해야 합니다.',
                ],
            },
            {
                accessibility: 'role="tablist"',
                descriptions: [
                    '해당 요소가 tab의 집합으로 이루어진 tablist임을 안내합니다.',
                    '탭에 대한 포커스는 loop가 가능합니다.',
                ],
            },
            {
                accessibility: 'tabpanel',
                descriptions: [
                    '해당 요소는 tab과 연결된 tabpanel임을 안내합니다.',
                ],
            },
            {
                accessibility: 'aria-orientation',
                descriptions: ['Tab 요소의 정렬 방향을 안내합니다.'],
            },
        ],
    },
    keyboardInteractionsTable: {
        devNoteTitle: '버튼을 구성하는 요소를 설명합니다.',
        keyboardTable: [
            {
                name: 'Down Arrow',
                descriptions: [
                    'direction이 vertical이고 포커스가 Tab.Button에 있는 경우, 다음 Tab.Button으로 포커스가 이동합니다.',
                ],
            },
            {
                name: 'Up Arrow',
                descriptions: [
                    'direction이 vertical이고 포커스가 Tab.Button에 있는 경우, 이전 Tab.Button으로 포커스가 \n이동합니다.',
                ],
            },
            {
                name: 'Right Arrow',
                descriptions: [
                    'direction이 horizontal이고 포커스가 Tab.Button에 있는 경우, 다음 Tab.Button으로 포커스가 이동합니다.',
                ],
            },
            {
                name: 'Left Arrow',
                descriptions: [
                    'direction이 horizontal이고 포커스가 Tab.Button에 있는 경우, 이전 Tab.Button으로 포커스가 이동합니다.',
                ],
            },
            {
                name: 'Home',
                descriptions: [
                    'Tab.Button에 포커스가 있는 경우, 첫 번째 Tab.Button으로 포커스가 이동합니다.',
                ],
            },
            {
                name: 'End',
                descriptions: [
                    'Tab.Button에 포커스가 있는 경우, 마지막 Tab.Button으로 포커스가 이동합니다.',
                ],
            },
        ],
    },
};

export const BUTTON_PROPS_TABLE: ContentPropsTable = {
    disabled: {
        description: 'Button의 상호작용 가능 여부를 지정합니다.',
        defaultValue: 'false',
    },
    value: {
        description: 'Contents와 연결하는 고유값을 지정합니다.',

        options: {
            required: true,
        },
    },
};

export const PANEL_PROPS_TABLE: ContentPropsTable = {
    value: {
        description: 'Button과 연결하는 고유값을 지정합니다.',

        options: {
            required: true,
        },
    },
};
