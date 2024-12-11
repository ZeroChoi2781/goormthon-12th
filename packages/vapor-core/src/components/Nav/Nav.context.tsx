import React, { createContext, useContext } from 'react';

import type { NavContextType, NavProviderProps } from './Nav.types';

const NavContext = createContext<NavContextType>({
    size: 'md',
    type: 'pill',
    stretch: false,
    direction: 'horizontal',
});

const NavProvider = ({ children, ...values }: NavProviderProps) => {
    return <NavContext.Provider value={values}>{children}</NavContext.Provider>;
};

const useNavContext = () => {
    const context = useContext(NavContext);

    if (!context) {
        throw new Error('useNavContext must be used within a NavProvider');
    }

    return context;
};

export { NavProvider, useNavContext };
