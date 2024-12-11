import React, { forwardRef } from 'react';

import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import cn from 'classnames';

import { useNavContext } from '../Nav.context';
import styles from './Item.module.scss';
import type { ItemProps } from './Item.types';

const Item = forwardRef<HTMLLIElement, ItemProps>(
    ({ asChild = false, className, children, ...props }, ref) => {
        const { stretch } = useNavContext();

        return (
            <NavigationMenuItem
                ref={ref}
                asChild={asChild}
                className={cn({ [styles.item_stretch]: stretch }, className)}
                {...props}
            >
                {children}
            </NavigationMenuItem>
        );
    },
);
Item.displayName = 'Nav.Item';

export default Item;
