import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

export const META: ContentMeta = {
    desc: '',
    outLink: {
        githubIssue: 'https://github.com/goorm-dev/gds/issues/new?title=[Nav]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Nav',
        storybook: 'https://gds.goorm.io/?path=/story/core-nav',
        library:
            'https://www.radix-ui.com/primitives/docs/components/navigation-menu',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight: '',
    CommonDark: '',
};

export const EXAMPLE: ContentExample = {
    // examples..
    Nav: {
        // size: {
        //     type: 'sizes',
        // },
        // type: {
        //     type: 'select',
        //     list: ['pill', 'text'],
        // },
        // stretch: {
        //     type: 'boolean',
        // },
        // direction: {
        //     type: 'select',
        //     list: ['horizontal', 'vertical'],
        // },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    size: {
        description: 'Nav의 크기를 지정합니다.',
        defaultValue: 'md',
    },
    type: {
        description: 'Nav의 형태를 지정합니다.',
        defaultValue: 'pill',
    },
    stretch: {
        description: 'Nav.Item의 너비를 상위 요소의 width에 맞게 조정합니다.',
        defaultValue: 'false',
    },
    direction: {
        description: 'Nav의 정렬 방향을 지정합니다.',
        valueList: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
    },
    className: { description: '', type: '' },
    children: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Nav WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Nav는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'aria-label',
                descriptions: [
                    '페이지에 여러 개의 네비게이션이 있는 경우, 네비게이션의 목적을 명확하게 설명해야 합니다.',
                    '이 때, aria-label에는 navigation이란 단어를 사용하지 않습니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'role=”navigation”',
                descriptions: [
                    '해당 요소가 네비게이션의 역할을 수행 중임을 안내합니다.',
                ],
            },
            {
                accessibility: 'aria-current=“page”',
                descriptions: [
                    '내비게이션의 여러 링크 중에서 사용자가 현재 보고 있는 페이지를 나타냅니다.',
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
                    '체크박스에 포커스가 있을 때 Space 키를 누르면 체크박스의 상태가 변경됩니다.',
                ],
            },
        ],
    },
};

export const ITEM_PROPS_TABLE: ContentPropsTable = {
    href: {
        description: '클릭 시 이동할 페이지 주소를 입력합니다.',
        defaultValue: '""',
    },
    disabled: {
        description: 'Item의 상호작용 가능 여부를 지정합니다.',
        defaultValue: 'false',
    },
    active: {
        description: 'Item의 활성화 상태를 지정합니다.',
        defaultValue: 'false',
    },
    align: {
        description: 'Nav.Item의 수평 정렬을 지정합니다.',
        valueList: ['left', 'center', 'right'],
        defaultValue: 'left',
    },
};
