import React, { createContext } from 'react';

import type {
    CheckboxContextProps,
    CheckboxContextState,
} from './Checkbox.types';

const CheckBoxContext = createContext<CheckboxContextState | null>(null);

const CheckBoxProvider = ({ children, value }: CheckboxContextProps) => {
    return (
        <CheckBoxContext.Provider value={value}>
            {children}
        </CheckBoxContext.Provider>
    );
};

const useCheckboxContext = () => {
    const context = React.useContext(CheckBoxContext);
    if (context === null) {
        throw new Error(
            'useCheckBoxContext must be used within a CheckBoxProvider',
        );
    }
    return context;
};
export { CheckBoxProvider, useCheckboxContext };
