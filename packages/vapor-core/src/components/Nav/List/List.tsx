import React from 'react';

import { NavigationMenuList } from '@radix-ui/react-navigation-menu';
import cn from 'classnames';

import styles from './List.module.scss';
import type { ListProps } from './List.types';

const List = ({ className, children, ...props }: ListProps) => {
    return (
        <NavigationMenuList
            className={cn(styles.navList, className)}
            {...props}
        >
            {children}
        </NavigationMenuList>
    );
};
List.displayName = 'Nav.List';

export default List;
