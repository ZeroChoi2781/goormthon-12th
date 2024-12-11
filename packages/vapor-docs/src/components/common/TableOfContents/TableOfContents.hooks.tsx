'use client';

import React from 'react';

import type { MdxHeadings } from '@vapor-docs/src/types/toc';

interface State {
    mdxHeadings: MdxHeadings;
}

interface Props {
    children: React.ReactNode;
    value?: State;
    mdxHeadings: MdxHeadings;
}

const TableOfContentsContext = React.createContext<State | null>(null);

const TableOfContentProvider = ({ children, mdxHeadings, ...value }: Props) => {
    return (
        <TableOfContentsContext.Provider value={{ mdxHeadings, ...value }}>
            {children}
        </TableOfContentsContext.Provider>
    );
};

const useTableOfContentsContext = () => {
    const context = React.useContext(TableOfContentsContext);
    if (context === null) {
        throw new Error(
            'useTableOfContentsContext must be used within a TableOfContentsProvider',
        );
    }
    return context;
};

export { TableOfContentProvider, useTableOfContentsContext };
