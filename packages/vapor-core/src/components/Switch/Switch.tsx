import React from 'react';

import { useId } from '@radix-ui/react-id';
import cn from 'classnames';

import { Indicator } from './Indicator';
import { Label } from './Label';
import { SwitchProvider } from './Switch.context';
import styles from './Switch.module.scss';
import type { SwitchProps } from './Switch.types';

const Switch = ({
    disabled = false,
    size = 'md',
    children,
    className,
    ...props
}: SwitchProps) => {
    const indicatorId = useId();

    return (
        <SwitchProvider
            value={{
                disabled,
                size,
                indicatorId,
                ...props,
            }}
        >
            <div
                className={cn(styles.container, className)}
                aria-disabled={disabled}
            >
                {children}
            </div>
        </SwitchProvider>
    );
};

Switch.Indicator = Indicator;
Switch.Label = Label;

export default Switch;
