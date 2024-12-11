import React from 'react';

import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import cn from 'classnames';

import Item from './Item';
import Link from './Link';
import List from './List';
import { NavProvider } from './Nav.context';
import styles from './Nav.module.scss';
import type { NavProps } from './Nav.types';

const Nav = ({
    size = 'md',
    type = 'pill',
    stretch = false,
    direction = 'horizontal',
    className,
    children,
    ...props
}: NavProps) => {
    return (
        <NavProvider
            size={size}
            type={type}
            stretch={stretch}
            direction={direction}
        >
            <NavigationMenu
                className={cn(
                    styles.nav,
                    { [styles.nav_stretch]: stretch },
                    className,
                )}
                orientation={direction}
                {...props}
            >
                {children}
            </NavigationMenu>
        </NavProvider>
    );
};

Nav.Item = Item;
Nav.Link = Link;
Nav.List = List;

export default Nav;
