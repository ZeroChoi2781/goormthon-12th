import React from 'react';

import cn from 'classnames';

import styles from './Base.module.scss';
import type { BaseProps } from './Base.types';

const Base = ({ children, className }: BaseProps) => {
    return (
        <nav
            className={cn(styles.container, className)}
            aria-label="Breadcrumbs"
        >
            {children}
        </nav>
    );
};

export default Base;
