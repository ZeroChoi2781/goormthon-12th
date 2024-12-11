import React, { createContext, useContext } from 'react';

import type { AvatarContextType, AvatarProviderProps } from './Avatar.types';

const AvatarContext = createContext<AvatarContextType>({
    size: 'md',
    label: '',
});

const AvatarProvider = ({ children, ...values }: AvatarProviderProps) => {
    return (
        <AvatarContext.Provider value={values}>
            {children}
        </AvatarContext.Provider>
    );
};

const useAvatarContext = () => {
    const context = useContext(AvatarContext);

    if (!context) {
        throw new Error(
            'useAvatarContext must be used within a AvatarProvider',
        );
    }

    return context;
};

export { AvatarProvider, useAvatarContext };
