import React from 'react';

import type {
    DropdownContextType,
    DropdownProviderProps,
} from './Dropdown.types';

const DropdownContext = React.createContext<DropdownContextType>({
    side: 'bottom',
    align: 'start',
    modal: true,
});

const DropdownProvider = ({ children, ...values }: DropdownProviderProps) => {
    return (
        <DropdownContext.Provider value={values}>
            {children}
        </DropdownContext.Provider>
    );
};

const useDropdownContext = () => {
    const context = React.useContext(DropdownContext);

    if (!context) {
        throw new Error(
            'useDropdownContext must be used within a DropdownProvider',
        );
    }

    return context;
};

export { DropdownProvider, useDropdownContext };
