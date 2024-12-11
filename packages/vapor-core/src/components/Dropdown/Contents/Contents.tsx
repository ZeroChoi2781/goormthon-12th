import React from 'react';

import {
    DropdownMenuContent,
    DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import { formatCssValue } from '@vapor-core/src/utils/styles';
import cn from 'classnames';

import { DISPLAY_NAME } from '../Dropdown.constants';
import { useDropdownContext } from '../Dropdown.context';
import { DEFAULT_MAX_HEIGHT } from './Contents.constants';
import styles from './Contents.module.scss';
import type { ContentsProps } from './Contents.types';

function Contents({
    maxHeight = DEFAULT_MAX_HEIGHT,
    className,
    children,
    ...props
}: ContentsProps) {
    const { side, align, modal } = useDropdownContext();

    return (
        <DropdownMenuPortal>
            <DropdownMenuContent
                loop
                avoidCollisions={modal}
                align={align}
                side={side}
                sideOffset={4}
                style={{ maxHeight: formatCssValue(maxHeight) }}
                className={cn(styles.contents, className)}
                {...props}
            >
                {children}
            </DropdownMenuContent>
        </DropdownMenuPortal>
    );
}
Contents.displayName = DISPLAY_NAME.contents;

export default Contents;
