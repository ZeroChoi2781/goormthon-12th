import React from 'react';

import cn from 'classnames';

import Primitive from '../../Primitive';
import { DISPLAY_NAME } from '../Card.constants';
import styles from './Header.module.scss';
import type { HeaderProps } from './Header.types';

const Header = ({ className, children, ...props }: HeaderProps) => {
    return (
        <Primitive.header
            className={cn(styles.container, className)}
            {...props}
        >
            {children}
        </Primitive.header>
    );
};
Header.displayName = DISPLAY_NAME.header;

export default Header;
