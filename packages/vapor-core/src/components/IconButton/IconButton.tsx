import React, { forwardRef } from 'react';

import cn from 'classnames';

import Primitive from '../Primitive';
import style from './IconButton.module.scss';
import type { IconButtonProps, IconButtonRef } from './IconButton.types';

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(
    (
        {
            icon: Icon,
            className,
            size = 'md',
            color = 'primary',
            rounded = false,
            disabled = false,
            shape = 'fill',
            'aria-label': ariaLabel = '',
            iconClassName,
            ...props
        },
        ref,
    ) => {
        const IconComponent = React.createElement(Icon);

        const iconShape = React.cloneElement(IconComponent, {
            className: cn(iconClassName, IconComponent.props.className, {
                [style[`icon_${size}`]]: size,
            }),
            'aria-hidden': true,
        });
        return (
            <Primitive.button
                {...props}
                ref={ref}
                className={cn(
                    className,
                    style.button,
                    style[`button_${color}${shape}`],
                    {
                        [style.button_rounded]: rounded,
                        [style[`button_${size}`]]: size,
                    },
                )}
                disabled={disabled}
                aria-label={ariaLabel}
            >
                {iconShape}
            </Primitive.button>
        );
    },
);

IconButton.displayName = 'IconButton';

export default IconButton;
