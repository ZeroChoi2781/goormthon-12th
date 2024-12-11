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
            'https://github.com/goorm-dev/gds/issues/new?title=[Dropdown]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Dropdown',
        storybook: 'https://gds.goorm.io/?path=/story/core-dropdown',
        library:
            'https://www.radix-ui.com/primitives/docs/components/dropdown-menu',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Dropdown: {
        //     side: {
        //         type: 'list',
        //         list: ['top', 'bottom', 'left', 'right'],
        //     },
        //     align: {
        //         type: 'list',
        //         list: ['start', 'center', 'end'],
        //     },
        //     divider: {
        //         type: 'boolean',
        //     },
        //     disabled: {
        //         type: 'boolean',
        //     },
        //     maxHeight: {
        //         type: 'number',
        //     },
        //     closeOnClick: {
        //         type: 'boolean',
        //     },
        //     modal: {
        //         type: 'boolean',
        //     },
    },
};

export const DROPDOWN_PROPS_TABLE: ContentPropsTable = {
    side: {
        description:
            'Contents가 Trigger를 기준으로 나타날 상하좌우 위치를 결정합니다.',
        valueList: ['top', 'bottom', 'left', 'right'],
        defaultValue: 'bottom',
    },
    align: {
        description: 'Trigger를 기준으로 Contents의 정렬을 결정합니다.',
        valueList: ['start', 'center', 'end'],
        defaultValue: 'start',
    },
    modal: {
        description: 'Dropdown 외부 컴포넌트와의 상호작용 여부를 결정합니다.',
        defaultValue: 'true',
    },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Dropdown WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Dropdown은 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'Trigger',
                descriptions: [
                    'Trigger는 항상 버튼입니다.',
                    '버튼 이외의 Focus 가능한 요소(Input, Radio, Checkbox 등)는 사용할 수 없습니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'aria-expanded',
                descriptions: ['드롭다운의 컨트롤 상태를 나타냅니다.'],
            },
            {
                accessibility: 'aria-haspopup',
                descriptions: [
                    '드롭다운에 의해 트리거 될 수 있는 대화형 팝업 요소의 유형을 나타냅니다.',
                ],
            },
            {
                accessibility: 'role=”menu”',
                descriptions: [
                    '해당 요소가 사용자에게 선택 목록을 제공하는 위젯임을 나타냅니다.',
                ],
            },
            {
                accessibility: 'role="menuitem"',
                descriptions: [
                    '해당 요소가 메뉴 요소(role="menu")에 의해 제공되는 선택 사항 집합의 옵션임을 나타냅니다.',
                ],
            },
            {
                accessibility: 'role="group"',
                descriptions: [
                    '하위 영역의 요소가 하나의 그룹으로 이루어져 있음을 나타냅니다.',
                ],
            },
        ],
    },
    keyboardInteractionsTable: {
        devNoteTitle: '버튼을 구성하는 요소를 설명합니다.',
        keyboardTable: [
            {
                name: 'Down Arrow',
                descriptions: [
                    '드롭다운 트리거에 포커스 되어 있다면, 드롭다운을 열림 상태로 변경합니다.',
                ],
            },
            {
                name: 'Up Arrow',
                descriptions: [
                    '드롭다운 아이템에 포커스 되어 있다면, 직전 드롭다운 아이템으로 포커스를 이동합니다.',
                ],
            },
            {
                name: 'Space',
                descriptions: [
                    '드롭다운 트리거에 포커스 되어 있다면, 드롭다운을 열림 상태로 변경합니다.',
                    '드롭다운 아이템에 포커스 되어 있다면, 해당 아이템을 선택하고 Active 상태로 변경합니다.',
                ],
            },
            {
                name: 'Enter',
                descriptions: [
                    '드롭다운 트리거에 포커스 되어 있다면, 드롭다운을 열림 상태로 변경합니다.',
                    '드롭다운 아이템에 포커스 되어 있다면, 해당 아이템을 선택하고 Active 상태로 변경합니다.',
                ],
            },
            {
                name: 'Esc',
                descriptions: [
                    '드롭다운을 닫고 드롭다운 트리거로 포커스를 이동합니다.',
                ],
            },
        ],
    },
};

export const DROPDOWN_CONTENTS_PROPS_TABLE: ContentPropsTable = {
    maxHeight: {
        description: '해당 그룹의 최대 높이를 지정합니다.',
        defaultValue: '40vh',
    },
};

export const DROPDOWN_GROUP_PROPS_TABLE: ContentPropsTable = {
    divider: {
        description: '그룹 간의 하단의 구분선 여부를 지정합니다.',
        defaultValue: 'false',
    },
};

export const DROPDOWN_ITEM_PROPS_TABLE: ContentPropsTable = {
    disabled: {
        description: '컴포넌트의 클릭 가능 여부를 지정합니다.',
        defaultValue: 'false',
    },
    closeOnClick: {
        description: 'Item 컴포넌트 클릭 시 드롭다운 닫힘 여부를 지정합니다.',
        defaultValue: 'true',
    },
};
