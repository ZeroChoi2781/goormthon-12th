import React from 'react';

import type { BreadcrumbsSize } from './Breadcrumbs.types';

interface State {
    size: BreadcrumbsSize;
}

interface Props {
    children: React.ReactNode;
    value: State;
}

const BreadcrumbsContext = React.createContext<State | null>(null);

function BreadcrumbsProvider({ children, value }: Props) {
    return (
        <BreadcrumbsContext.Provider value={value}>
            {children}
        </BreadcrumbsContext.Provider>
    );
}

function useBreadcrumbsContext() {
    const context = React.useContext(BreadcrumbsContext);
    if (context === null) {
        throw new Error(
            'useBreadcrumbsContext must be used within a BreadcrumbsProvider',
        );
    }
    return context;
}

export { BreadcrumbsProvider, useBreadcrumbsContext };
