import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CommonSizeToken } from '@vapor-core/src/types/common';

import type Primitive from '../Primitive';

export type AvatarSize = CommonSizeToken;

export type AvatarContextType = {
    size: AvatarSize;
    label: string;
};

type ChildrenType = { children: ReactNode };

export type AvatarProviderProps = AvatarContextType & ChildrenType;

type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type AvatarProps = MakeRequired<Partial<AvatarContextType>, 'label'> &
    ComponentPropsWithoutRef<typeof Primitive.div> & { square?: boolean };
