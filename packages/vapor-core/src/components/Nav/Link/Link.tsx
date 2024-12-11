import React, { forwardRef } from 'react';

import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import cn from 'classnames';

import Text from '../../Text';
import { SIZE_TO_TYPOGRAPHY } from '../Item/Item.constants';
import { useNavContext } from '../Nav.context';
import styles from './Link.module.scss';
import type { LinkElement, LinkProps } from './Link.types';

const Link = forwardRef<LinkElement, LinkProps>(
    (
        {
            asChild = false,
            active = false,
            disabled = false,
            href,
            align,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const { type, size, direction } = useNavContext();
        const DEFAULT_ALIGN = direction === 'horizontal' ? 'center' : 'left';

        return (
            <Text asChild={true} typography={SIZE_TO_TYPOGRAPHY[size]}>
                <NavigationMenuLink
                    ref={ref}
                    asChild={asChild}
                    active={active}
                    className={cn(
                        styles.navLink,
                        styles[`navLink_${size}`],
                        styles[`navLink_${type}`],
                        styles[`navLink_${align || DEFAULT_ALIGN}`],
                        {
                            [styles.navLink_vertical]: direction === 'vertical',
                        },
                        className,
                    )}
                    href={disabled ? undefined : href}
                    data-disabled={disabled || undefined}
                    aria-disabled={disabled || undefined}
                    {...props}
                >
                    {children}
                </NavigationMenuLink>
            </Text>
        );
    },
);
Link.displayName = 'Nav.Link';

export default Link;
