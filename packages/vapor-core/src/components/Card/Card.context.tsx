import React, { createContext, useContext } from 'react';

import type { CardContextType, CardProviderProps } from './Card.types';

const CardContext = createContext<CardContextType>({
    titleId: '',
    descriptionId: '',
});

const CardProvider = ({ children, ...values }: CardProviderProps) => {
    return (
        <CardContext.Provider value={values}>{children}</CardContext.Provider>
    );
};

const useCardContext = () => {
    const context = useContext(CardContext);

    if (!context) {
        throw new Error('useCardContext must be used within a CardProvider');
    }

    return context;
};

export { CardProvider, useCardContext };
