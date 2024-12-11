import type {
    FoundationMap,
    PropsTable,
    knobControl,
} from '../components/common/LiveDemo/LiveDemo.types';

export type ContentOption = 'Typescript' | 'WAI-ARIA';

export type ContentMeta = {
    desc: string;
    outLink: {
        githubIssue: string;
        github: string;
        storybook: string;
        library: string;
    };
    options?: readonly ContentOption[];
};

export type ContentExample = knobControl;

export type ContentExampleFigma = FoundationMap;

export type ContentPropsTable = PropsTable;
