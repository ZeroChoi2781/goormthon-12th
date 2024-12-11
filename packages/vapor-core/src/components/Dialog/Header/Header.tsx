import React from 'react';

import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import styles from './Header.module.scss';
import type { HeaderProps } from './Header.types';

const Header = ({ className, children, ...props }: HeaderProps) => {
    return (
        <div className={cn(styles.header, className)} {...props}>
            {children}
        </div>
    );
};
Header.displayName = DISPLAY_NAME.header;

export default Header;
