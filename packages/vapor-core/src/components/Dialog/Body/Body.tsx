import React from 'react';

import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import styles from './Body.module.scss';
import type { BodyProps } from './Body.types';

const Body = ({
    expanded = false,
    className,
    children,
    ...props
}: BodyProps) => {
    return (
        <div
            className={cn(styles.body, className, {
                [styles.body_expanded]: expanded,
            })}
            {...props}
        >
            {children}
        </div>
    );
};
Body.displayName = DISPLAY_NAME.body;

export default Body;
