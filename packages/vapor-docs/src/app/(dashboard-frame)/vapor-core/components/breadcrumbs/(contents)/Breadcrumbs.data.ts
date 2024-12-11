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
            'https://github.com/goorm-dev/gds/issues/new?title=[Breadcrumbs]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Breadcrumbs',
        storybook: 'https://gds.goorm.io/?path=/story/core-breadcrumbs',
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
    Breadcrumbs: {
        size: {
            type: 'list',
            list: ['xs', 'sm', 'md', 'lg'],
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    className: {
        description: 'Breadcrumbs의 클래스 이름을 설정합니다.',
        type: 'string',
    },
    children: { description: '', type: '' },
    size: {
        description: 'Breadcrumbs의 사이즈를 지정합니다. ',
        valueList: ['xs', 'sm', 'md', 'lg'],
        defaultValue: 'md',
    },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Breadcrumbs WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Breadcrumbs는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'aria-label',
                descriptions: [
                    'Breadcrumb 탐색 경로를 포함하는 navigation landmark는 aria-label 또는 aria-labelledby를 사용해 적절히 레이블이 제공되어야 합니다.',
                    '기본 값으로 aria-label = “Breadcrumbs”가 지정되어 있습니다.',
                    '페이지 내에 여러 navigation 요소가 존재할 경우, 각 navigation을 구분하기 위해 고유한 레이블을 \n제공해야 합니다.',
                ],
            },
        ],
    },
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'nav',
                descriptions: [
                    'Breadcrumb 탐색 경로는 <nav>(네비게이션 랜드마크) 요소 안에 포함되어야 합니다',
                ],
            },
            {
                accessibility: 'aria-label',
                descriptions: [
                    'Breadcrumb 탐색 경로를 포함하는 navigation landmark는 aria-label 또는 aria-labelledby를  \n사용해 적절히 레이블이 제공되어야 합니다.',
                    '기본 값으로 aria-label = “Breadcrumbs”가 지정되어 있습니다.',
                ],
            },
            {
                accessibility: 'aria-current=“page”',
                descriptions: [
                    '현재 컨텍스트에서 활성화된 항목을 나타내는 데 사용되는 상태 속성입니다.',
                    'Breadcrumbs.Item 컴포넌트에서 active prop이 전달되고, 해당 요소가 <a> 태그인 경우 자동으로 aria-current="page" 속성이 지정됩니다.',
                ],
            },
        ],
    },
};

export const BREADCRUMBSITEM_PROPS_TABLE: ContentPropsTable = {
    active: {
        description: 'Breadcrumbs.Item의 활성 상태를 설정합니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    href: {
        description: 'Breadcrumbs.Item의 링크 주소를 설정합니다.',
        type: 'string',
        defaultValue: '',
    },
    as: {
        description: 'Breadcrumbs.Item의 태그를 설정합니다.',
        type: 'React.ElementType',
        defaultValue: 'a',
    },
};
