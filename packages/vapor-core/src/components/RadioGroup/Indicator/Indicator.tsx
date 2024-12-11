import React from 'react';

import {
    Indicator as RadixRadioGroupIndicator,
    Item as RadixRadioGroupItem,
} from '@radix-ui/react-radio-group';
import cn from 'classnames';

import { useRadioGroupItemContext } from '../Item/Item.context';
import { useRadioGroupContext } from '../RadioGroup.context';
import RadioGroupIcon from '../RadioGroupIcon';
import {
    RADIOGROUP_INDICATOR_ICON_RADIUS,
    RADIOGROUP_INDICATOR_ICON_SIZE,
} from './Indicator.constants';
import styles from './Indicator.module.scss';
import type { IndicatorProps } from './Indicator.types';

const Indicator = ({ value, className, ...props }: IndicatorProps) => {
    const { size, invalid } = useRadioGroupContext();
    const { disabled, indicatorId } = useRadioGroupItemContext();
    return (
        <div
            className={cn(
                styles.container,
                styles[`container_${size}`],
                className,
            )}
        >
            <RadixRadioGroupItem
                value={value}
                className={cn(styles.item, styles[`item_${size}`])}
                disabled={disabled}
                id={indicatorId}
                aria-invalid={invalid}
                {...props}
            >
                <RadixRadioGroupIndicator className={styles.indicator}>
                    <RadioGroupIcon
                        width={RADIOGROUP_INDICATOR_ICON_SIZE[size]}
                        height={RADIOGROUP_INDICATOR_ICON_SIZE[size]}
                        radius={RADIOGROUP_INDICATOR_ICON_RADIUS[size]}
                    />
                </RadixRadioGroupIndicator>
            </RadixRadioGroupItem>
        </div>
    );
};

Indicator.displayName = 'RadioGroup.Indicator';
export default Indicator;
