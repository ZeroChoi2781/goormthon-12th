import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CommonSizeToken } from '@vapor-core/src/types/common';

import type Primitive from '../Primitive';

export type SearchInputSize = CommonSizeToken;

export type SearchInputContextType = {
    id: string;
    disabled: boolean;
    invalid: boolean;
    size: SearchInputSize;
};

export type SearchInputProviderProps = SearchInputContextType & {
    children: ReactNode;
};

export type SearchInputProps = Partial<SearchInputProviderProps> &
    ComponentPropsWithoutRef<typeof Primitive.div>;
