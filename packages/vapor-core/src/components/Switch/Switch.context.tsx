import React, { createContext, useContext } from 'react';

import type { SwitchContextType, SwitchProviderProps } from './Switch.types';

const SwitchContext = createContext<SwitchContextType>({
    disabled: false,
    size: 'md',
    indicatorId: '',
    checked: false,
    defaultChecked: false,
    onCheckedChange: () => {},
});

export const SwitchProvider = ({ children, value }: SwitchProviderProps) => {
    return (
        <SwitchContext.Provider value={value}>
            {children}
        </SwitchContext.Provider>
    );
};

export const useSwitchContext = () => {
    const context = useContext(SwitchContext);
    if (context === null) {
        throw new Error(
            'useSwitchContext must be used within a SwitchProvider',
        );
    }
    return context;
};
