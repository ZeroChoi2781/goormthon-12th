import React, { createContext, useContext } from 'react';

import type {
    SearchInputContextType,
    SearchInputProviderProps,
} from './SearchInput.types';

const SearchInputContext = createContext<SearchInputContextType>({
    id: '',
    disabled: false,
    invalid: false,
    size: 'md',
});

const SearchInputProvider = ({
    children,
    ...values
}: SearchInputProviderProps) => {
    return (
        <SearchInputContext.Provider value={values}>
            {children}
        </SearchInputContext.Provider>
    );
};

const useSearchInputContext = () => {
    const context = useContext(SearchInputContext);

    if (!context) {
        throw new Error(
            'useSearchInputContext must be used within a SearchInputProvider',
        );
    }

    return context;
};

export { SearchInputProvider, useSearchInputContext };
