import React, { createContext, useContext } from 'react';

import type {
    RadioGroupContextProps,
    RadioGroupContextState,
} from './RadioGroup.types';

const RadioGroupContext = createContext<RadioGroupContextState>({
    size: 'md',
    invalid: false,
});
export const RadioGroupProvider = ({
    children,
    value,
}: RadioGroupContextProps) => {
    return (
        <RadioGroupContext.Provider value={value}>
            {children}
        </RadioGroupContext.Provider>
    );
};

export const useRadioGroupContext = () => {
    const context = useContext(RadioGroupContext);
    if (context === null) {
        throw new Error(
            'useRadioGroupContext must be used within a RadioGroupProvider',
        );
    }
    return context;
};
