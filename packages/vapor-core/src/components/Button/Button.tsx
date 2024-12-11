import React, { forwardRef } from 'react';

import cn from 'classnames';

import Primitive from '../Primitive';
import Text from '../Text';
import { TYPOGRAPHY } from './Button.constants';
import usePhrasingContentValidator from './Button.hooks';
import styles from './Button.module.scss';
import type { ButtonElement, ButtonProps } from './Button.types';

const Button = forwardRef<ButtonElement, ButtonProps>(
    (
        {
            color = 'primary',
            size = 'md',
            disabled = false,
            shape = 'fill',
            stretch = false,
            className,
            children,
            ...props
        },
        forwardedRef,
    ) => {
        usePhrasingContentValidator(children);

        return (
            <Text
                as={Primitive.button}
                ref={forwardedRef}
                className={cn(
                    styles.container,
                    styles[`container_${size}`],
                    styles[`container_${color}${shape}`],
                    className,
                    {
                        [styles.container_stretch]: stretch,
                    },
                )}
                disabled={disabled}
                typography={TYPOGRAPHY[size]}
                {...props}
            >
                {children}
            </Text>
        );
    },
);

Button.displayName = 'Button';

export default Button;
