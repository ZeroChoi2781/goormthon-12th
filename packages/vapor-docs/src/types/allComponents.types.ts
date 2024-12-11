import type { ALL_COMPONETS_SCRIPTS_TARGET } from '../constants/allComponents';

export type ComponentInfo = {
    name: string;
    imageUrl: string;
    description: string;
    componentType?: string;
};

export type AllComponentsScriptsTarget =
    (typeof ALL_COMPONETS_SCRIPTS_TARGET)[keyof typeof ALL_COMPONETS_SCRIPTS_TARGET];

export type FigmaFileChildrenNode = {
    id: string;
    name: string;
    type: string;
    children?: FigmaFileChildrenNode[];
};

export type FigmaFileChildrenNodeItem = {
    id: string;
    name: string;
    type: string;
    children: FigmaFileChildrenNode[];
};

export type FigmaFileNode = {
    name: string;
    nodes: {
        [key: string]: {
            document: {
                children: FigmaFileChildrenNodeItem[];
            };
        };
    };
};
