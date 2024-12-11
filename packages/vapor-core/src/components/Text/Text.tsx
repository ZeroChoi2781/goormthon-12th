import type { ElementType } from 'react';
import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import cn from 'classnames';

import { TYPOGRAPHY } from './Text.constants';
import styles from './Text.module.scss';
import type { TextComponent, TextElement, TextProps } from './Text.types';

const Text: TextComponent & { displayName?: string } = forwardRef(
    <E extends ElementType = 'span'>(
        {
            as,
            asChild = false,
            align = 'left',
            color = 'text-normal',
            typography = TYPOGRAPHY.BODY1,
            className,
            children,
            ...props
        }: TextProps<E>,
        ref: TextElement<E>,
    ) => {
        const Tag = as || 'span';

        return (
            <Slot
                ref={ref}
                className={cn(
                    styles.common,
                    styles[typography],
                    styles[align],
                    { [styles[color]]: color },
                    className,
                )}
                {...props}
            >
                {asChild ? children : <Tag>{children}</Tag>}
            </Slot>
        );
    },
);

Text.displayName = 'Text';

export default Text;
