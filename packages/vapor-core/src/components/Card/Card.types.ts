import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type Primitive from '../Primitive';

export type CardProps = ComponentPropsWithoutRef<typeof Primitive.article>;

export type CardContextType = {
    titleId: string;
    descriptionId: string;
};

export type CardProviderProps = CardContextType & {
    children: ReactNode;
};
