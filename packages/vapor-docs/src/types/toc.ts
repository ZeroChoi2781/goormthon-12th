export type MdxHeading = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

export type HeadingItem = {
    tag: MdxHeading;
    title: string;
};

export type Tab = 'Usage' | 'History';

export type MdxHeadings = Record<Tab, HeadingItem[]>;

export type ParsedComponentContent = {
    Usage: string;
    History: string;
};
