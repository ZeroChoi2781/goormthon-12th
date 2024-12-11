import React, { createContext, useContext } from 'react';

import type {
    RadioGroupItemContextProps,
    RadioGroupItemState,
} from './Item.types';

const RadioGroupItemContext = createContext<RadioGroupItemState>({
    disabled: false,
    indicatorId: '',
});
export const RadioGroupItemProvider = ({
    children,
    value,
}: RadioGroupItemContextProps) => {
    return (
        <RadioGroupItemContext.Provider value={value}>
            {children}
        </RadioGroupItemContext.Provider>
    );
};

export const useRadioGroupItemContext = () => {
    const context = useContext(RadioGroupItemContext);
    if (context === null) {
        throw new Error(
            'useRadioGroupItemContext must be used within a RadioGroupItemProvider',
        );
    }
    return context;
};
