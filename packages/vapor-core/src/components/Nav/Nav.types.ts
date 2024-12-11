import type { ReactNode } from 'react';

import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import type { CommonSizeToken } from '@vapor-core/src/types/common';

export type NavSize = CommonSizeToken;
export type NavContextType = {
    size: NavSize;
    type: 'pill' | 'text';
    stretch: boolean;
    direction: 'horizontal' | 'vertical';
};

export type NavProviderProps = NavContextType & {
    children: ReactNode;
};

export type NavProps = Omit<NavigationMenuProps, 'orientation'> &
    Partial<NavContextType>;
