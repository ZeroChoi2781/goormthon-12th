import type { AlertProps } from '@goorm-dev/vapor-core';
import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

const ALERT_COLORS: Required<AlertProps['color'][]> | undefined = [
    'primary',
    'success',
    'warning',
    'hint',
    'danger',
    'contrast',
];

export const META: ContentMeta = {
    desc: '',
    outLink: {
        githubIssue:
            'https://github.com/goorm-dev/gds/issues/new?title=[Alert]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Alert',
        storybook: 'https://gds.goorm.io/?path=/story/core-alert',
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
    Alert: {
        color: {
            type: 'select',
            list: ALERT_COLORS,
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    color: {
        description: '',
        valueList: ALERT_COLORS,
        defaultValue: 'primary',
        type: 'AlertColor',
    },
    children: { description: '', type: '' },
};

export const ACCESSIBILITY_TABLE_DATA = {
    headingDescription:
        'Alert WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\nVapor Alert는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    a11ySupportTable: {
        a11ySupportTitle:
            '컴포넌트 내부적으로 준수되고 있는 접근성 기능을 명시합니다.',
        a11ySupportTable: [
            {
                accessibility: 'WCAG',
                descriptions: [
                    'WCAG 2.x criterion 1.4.3 (level AA)를 준수하고 있습니다.',
                ],
            },
            {
                accessibility: 'role=”alert”',
                descriptions: [
                    'Alert 컴포넌트는 role=”alert” 속성을 갖습니다.',
                    'role=”alert”은 암시적으로 aria-live="assertive" 속성을 포함합니다. ',
                    '페이지가 로드되거나 alert 요소가 업데이트 되면 스크린 리더기는 진행 중인 동작을 멈추고 alert 요소의 정보를 사용자에게 읽어줍니다.',
                    '포커스는 이동되지 않습니다.',
                ],
            },
        ],
    },
};
