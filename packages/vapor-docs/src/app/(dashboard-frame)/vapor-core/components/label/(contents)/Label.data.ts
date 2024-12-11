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
            'https://github.com/goorm-dev/gds/issues/new?title=[Label]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Label',
        storybook: 'https://gds.goorm.io/?path=/story/core-label',
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
    Label: {
        visuallyHidden: {
            type: 'boolean',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Label WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Label은 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    devNoteTable: {
        devNoteTitle: '개발 시 준수해야 할 내용을 명시합니다.',
        devNoteTable: [
            {
                accessibility: 'htmlFor',
                descriptions: [
                    'htmlFor 속성을 사용하여 해당 id를 가진 form 요소와 연결해야 합니다.',
                    '이를 통해 사용자의 사용성을 확대하고 명시적인 form을 작성할 수 있습니다.',
                ],
            },
            {
                accessibility: 'visuallyHidden',
                descriptions: [
                    '라벨을 UI 상에서 숨기고 싶은 경우 visuallyHidden = true 속성을 이용해야 합니다.',
                    '접근성을 부여하면서도 화면에서 보이지 않도록 할 수 있습니다.',
                ],
            },
        ],
    },
};
