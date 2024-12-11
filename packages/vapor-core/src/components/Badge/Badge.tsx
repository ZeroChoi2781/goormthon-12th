import React from 'react';

import cn from 'classnames';

import Primitive from '../Primitive';
import Text from '../Text';
import { TYPOGRAPHY } from './Badge.constants';
import styles from './Badge.module.scss';
import type { BadgeProps } from './Badge.types';

function Badge({
    color = 'primary',
    size = 'md',
    pill = false,
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <Text asChild typography={TYPOGRAPHY[size]}>
            <Primitive.span
                className={cn(
                    styles.container,
                    styles[`container_${size}`],
                    styles[`container_${color}`],
                    {
                        [styles[`container_${size}pill`]]: pill,
                    },
                    className,
                )}
                {...props}
            >
                {children}
            </Primitive.span>
        </Text>
    );
}

export default Badge;
