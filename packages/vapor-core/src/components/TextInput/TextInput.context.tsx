import React, { createContext } from 'react';

import type {
    TextInputContextProps,
    TextInputContextState,
} from './TextInput.types';

const TextInputContext = createContext<TextInputContextState | null>({
    size: 'md',
    invalid: false,
    type: 'text',
    id: '',
    value: '',
    setValue: () => {},
});

const TextInputProvider = ({ children, value }: TextInputContextProps) => {
    return (
        <TextInputContext.Provider value={value}>
            {children}
        </TextInputContext.Provider>
    );
};

const useTextInputContext = () => {
    const context = React.useContext(TextInputContext);
    if (context === null) {
        throw new Error(
            'useTextInputContext must be used within a TextInputProvider',
        );
    }
    return context;
};
export { TextInputProvider, useTextInputContext };
