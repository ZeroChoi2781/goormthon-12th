import React from 'react';

import {
    Root as RadixCheckboxRoot,
    Indicator as RadixIndicator,
} from '@radix-ui/react-checkbox';
import cn from 'classnames';

import { useCheckboxContext } from '../Checkbox.context';
import { CheckIcon, DividerHorizontalIcon } from '../CheckboxIcon';
import { CHECKBOX_INDICATOR_ICON_SIZE } from './Indicator.constants';
import styles from './Indicator.module.scss';

const Indicator = () => {
    const { size, invalid, checked, id, ...checkboxProps } =
        useCheckboxContext();

    return (
        <RadixCheckboxRoot
            {...checkboxProps}
            id={id}
            checked={checked}
            className={cn(styles.container, styles[`container_${size}`], {
                [styles.container_invalid]: invalid,
            })}
            aria-invalid={invalid}
        >
            <RadixIndicator className={styles.indicator_checkbox}>
                {checked === 'indeterminate' ? (
                    <DividerHorizontalIcon
                        width={CHECKBOX_INDICATOR_ICON_SIZE[size]}
                        height={CHECKBOX_INDICATOR_ICON_SIZE[size]}
                    />
                ) : (
                    <CheckIcon
                        width={CHECKBOX_INDICATOR_ICON_SIZE[size]}
                        height={CHECKBOX_INDICATOR_ICON_SIZE[size]}
                    />
                )}
            </RadixIndicator>
        </RadixCheckboxRoot>
    );
};

export default Indicator;
