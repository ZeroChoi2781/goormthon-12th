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
            'https://github.com/goorm-dev/gds/issues/new?title=[RadioGroup] ',
        github: '',
        storybook: '',
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
    RadioGroup: {
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
        description: 'RadioGroup.Indicator의 크기를 결정합니다.',
        type: 'RadioGroupSize',
        valueList: ['md', 'lg'],
        defaultValue: 'md',
    },
    invalid: {
        description: 'RadioGroup의 invalid 여부를 결정합니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    direction: {
        description: 'RadioGroup의 방향을 결정합니다.',
        type: 'string',
        valueList: ['horizontal', 'vertical'],
        defaultValue: 'vertical',
    },
    selectedValue: {
        description:
            'Controlled 방식으로 RadioGroup의 상태를 관리할 때, 초기 상태를 지정합니다.',
        type: 'string',
    },
    defaultSelectedValue: {
        description:
            'Uncontrolled 방식으로 RadioGroup의 상태를 관리할 때, 초기 상태를 지정합니다.',
        type: 'string',
    },
    onSelectedValueChange: {
        description: 'Controlled 방식으로 RadioGroup을 통제합니다.',
        type: '(value: string) => void',
    },
    children: {
        description: 'Children Node',
        type: 'ReactNode',
        options: { required: true },
    },
};

export const ITEM_PROPS_TABLE: ContentPropsTable = {
    disabled: {
        description: 'RadioGroup의 disabled 여부를 결정합니다.',
        defaultValue: 'false',
        type: 'boolean',
    },
};

export const INDICATOR_PROPS_TABLE: ContentPropsTable = {
    value: {
        description: 'RadioGroup.Indicator의 고유한 value 값을 의미합니다.',
        type: 'string',
        options: { required: true },
    },
};

export const LABEL_PROPS_TABLE: ContentPropsTable = {
    visuallyHidden: {
        description: 'RadioGroup.Label의 시각적 표시 여부를 지정합니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    typography: {
        description: 'RadioGroup.Label의 Typography를 지정합니다.',
        type: 'TypographyValue',
        defaultValue: 'body2',
    },
    color: {
        description: 'RadioGroup.Label의 글자 색상을 지정합니다.',
        type: 'ColorValue',
        defaultValue: 'text-normal',
    },
    children: {
        description: 'Children Node',
        type: 'ReactNode',
        options: {
            required: true,
        },
    },
};
