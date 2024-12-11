import React from 'react';

import {
    Root as RadixSwitchRoot,
    Thumb as RadixThumb,
} from '@radix-ui/react-switch';
import cn from 'classnames';

import { useSwitchContext } from '../Switch.context';
import styles from './Indicator.module.scss';
import type { IndicatorProps } from './Indicator.types';

const Indicator = ({ className, ...props }: IndicatorProps) => {
    const { size, indicatorId, checked, defaultChecked, onCheckedChange } =
        useSwitchContext();
    return (
        <div
            className={cn(
                styles.container,
                styles[`container_${size}`],
                className,
            )}
        >
            <RadixSwitchRoot
                id={indicatorId}
                className={cn(styles.root, styles[`root_${size}`])}
                checked={checked}
                defaultChecked={defaultChecked}
                onCheckedChange={onCheckedChange}
            >
                <RadixThumb
                    className={cn(styles.thumb, styles[`thumb_${size}`])}
                    {...props}
                />
            </RadixSwitchRoot>
        </div>
    );
};

export default Indicator;
