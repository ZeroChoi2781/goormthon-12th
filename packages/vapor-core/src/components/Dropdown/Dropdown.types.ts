import type { ReactNode } from 'react';

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';

export type DropdownContextType = {
    side: 'top' | 'bottom' | 'left' | 'right';
    align: 'start' | 'center' | 'end';
    modal: boolean;
};

type ChildrenType = { children: ReactNode };
export type DropdownProviderProps = ChildrenType & DropdownContextType;

type DropdownEssentialProps = Pick<
    DropdownMenuProps,
    'open' | 'onOpenChange' | 'defaultOpen' | 'children' | 'modal'
>;

export type DropdownProps = DropdownEssentialProps &
    Partial<DropdownContextType>;
