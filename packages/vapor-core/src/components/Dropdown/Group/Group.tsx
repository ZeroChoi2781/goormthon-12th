import React from 'react';

import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

import { DISPLAY_NAME } from '../Dropdown.constants';
import styles from './Group.module.scss';
import type { GroupProps } from './Group.types';

function Group({ divider = false, children, ...props }: GroupProps) {
    return (
        <>
            <div role="group" {...props}>
                {children}
            </div>
            {divider && <DropdownMenuSeparator className={styles.divider} />}
        </>
    );
}
Group.displayName = DISPLAY_NAME.group;

export default Group;
