import React, { createContext } from 'react';

import type { TabsContextType, TabsProviderProps } from './Tabs.types';

const TabsContext = createContext<TabsContextType>({
    size: 'md',
    stretch: false,
    position: 'start',
});

const TabsProvider = ({ children, ...values }: TabsProviderProps) => {
    return (
        <TabsContext.Provider value={values}>{children}</TabsContext.Provider>
    );
};

const useTabsContext = () => {
    const context = React.useContext(TabsContext);

    if (!context) {
        throw new Error('useTabsContext must be used within a TabsProvider');
    }

    return context;
};

export { TabsProvider, useTabsContext };
