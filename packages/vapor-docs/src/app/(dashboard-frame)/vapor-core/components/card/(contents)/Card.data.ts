import type {
    ContentExample,
    ContentExampleFigma,
    ContentMeta,
    ContentPropsTable,
} from '@vapor-docs/src/types/content';

export const META: ContentMeta = {
    desc: '',
    outLink: {
        githubIssue: 'https://github.com/goorm-dev/gds/issues/new?title=[Card]',
        github: 'https://github.com/goorm-dev/gds/tree/develop/packages/vapor-core/src/components/Card',
        storybook: 'https://gds.goorm.io/?path=/story/core-card',
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
    Card: {
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
    className: {
        description: '',
        type: 'string',
    },
    children: {
        description: '',
        type: 'ReactNode',
    },
};

export const HEADER_PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '',
        type: 'string',
    },
    children: {
        description: '',
        type: 'ReactNode',
    },
};

export const BODY_PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '',
        type: 'string',
    },
    expanded: {
        description: 'Body 컴포넌트의 좌우 여백의 여부를 결정합니다.',
        defaultValue: 'false',
    },
    children: {
        description: '',
        type: 'ReactNode',
    },
};

export const FOOTER_PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '',
        type: 'string',
    },
    children: {
        description: '',
        type: 'ReactNode',
    },
};

export const TITLE_PROPS_TABLE: ContentPropsTable = {
    className: {
        description: '',
        type: 'string',
    },
    children: {
        description: '',
        type: 'ReactNode',
    },
};
