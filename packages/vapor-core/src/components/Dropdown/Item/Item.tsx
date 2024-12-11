import React, { forwardRef } from 'react';

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import cn from 'classnames';

import { DISPLAY_NAME } from '../Dropdown.constants';
import styles from './Item.module.scss';
import type { ItemProps } from './Item.types';

const Item = forwardRef<HTMLButtonElement, ItemProps>(
    (
        { asChild = false, closeOnClick = true, className, children, ...props },
        ref,
    ) => {
        const Component = asChild ? Slot : 'button';
        const onSelect = (e: Event) => {
            if (!closeOnClick) e.preventDefault();
        };

        return (
            <DropdownMenuItem onSelect={onSelect} asChild>
                <Component
                    {...props}
                    ref={ref}
                    className={cn(styles.item, className, {
                        [styles.item_background]: !asChild,
                    })}
                >
                    {children}
                </Component>
            </DropdownMenuItem>
        );
    },
);
Item.displayName = DISPLAY_NAME.item;

export default Item;
