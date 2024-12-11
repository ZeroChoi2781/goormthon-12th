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
            'https://github.com/goorm-dev/gds/issues/new?title=[Button]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Button',
        storybook: 'https://gds.goorm.io/?path=/story/core-button',
        library: '',
    },
    options: ['Typescript', 'WAI-ARIA'],
};

export const EXAMPLE_FIGMA: ContentExampleFigma = {
    CommonLight:
        'https://www.figma.com/design/lEU9aqzv6l9E4XM3SST9op/Component-%5Bcore%5D?node-id=822-5368&node-type=frame&m=dev',
    CommonDark: '',
};

const sizeOptions = ['sm', 'md', 'lg', 'xl'];
const colorOptions = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'contrast',
];
const shapeOptions = ['fill', 'outline', 'invisible'];
export const EXAMPLE: ContentExample = {
    // examples..
    Button: {
        size: {
            type: 'string',
            list: sizeOptions,
        },
        color: {
            type: 'string',
            list: colorOptions,
        },
        shape: {
            type: 'string',
            list: shapeOptions,
        },
        stretch: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
        },
    },
};

export const PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '',
        type: 'string',
    },
    color: {
        description: '',
        valueList: colorOptions,
        defaultValue: 'primary',
        type: 'ButtonColor',
    },
    size: {
        description: '',
        valueList: sizeOptions,
        defaultValue: 'md',
        type: 'ButtonSize',
    },
    shape: {
        description: '',
        valueList: shapeOptions,
        defaultValue: 'fill',
        type: 'ButtonShape',
    },
    stretch: {
        description: '부모 컨테이너의 너비에 맞춥니다.',
        type: 'boolean',
        defaultValue: 'false',
    },
    disabled: {
        description: '',
        type: 'boolean',
        defaultValue: 'false',
    },
};
