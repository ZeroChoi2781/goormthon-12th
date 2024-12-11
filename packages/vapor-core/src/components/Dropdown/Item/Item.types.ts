import type { ComponentPropsWithoutRef } from 'react';

import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';

type ItemEssentialProps = Pick<DropdownMenuItemProps, 'disabled' | 'asChild'>;

export type ItemProps = ItemEssentialProps &
    ComponentPropsWithoutRef<'button'> & {
        closeOnClick?: boolean;
    };
