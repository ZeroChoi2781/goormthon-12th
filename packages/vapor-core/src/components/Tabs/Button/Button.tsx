import React, { forwardRef } from 'react';

import { Trigger as TabsButton } from '@radix-ui/react-tabs';
import cn from 'classnames';

import Text from '../../Text';
import { useTabsContext } from '../Tabs.context';
import { SIZE_TO_TEXT_TYPO } from './Button.constants';
import styles from './Button.module.scss';
import type { ButtonElement, ButtonProps } from './Button.types';

const Button = forwardRef<ButtonElement, ButtonProps>(
    ({ align, className, children, ...props }, ref) => {
        const { size, stretch } = useTabsContext();

        return (
            <Text
                asChild
                typography={SIZE_TO_TEXT_TYPO[size]}
                align={align}
                title={children as string}
            >
                <TabsButton
                    ref={ref}
                    className={cn(styles.tab, styles[`tab_${size}`], {
                        [styles.tab_stretch]: stretch,
                    })}
                    {...props}
                >
                    {children}
                </TabsButton>
            </Text>
        );
    },
);
Button.displayName = 'Tabs.Button';

export default Button;
