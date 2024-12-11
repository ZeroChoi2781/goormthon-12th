import React from 'react';

import { useId } from '@radix-ui/react-id';
import cx from 'classnames';

import { CheckBoxProvider } from './Checkbox.context';
import style from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.types';
import Indicator from './Indicator';
import Label from './Label/Label';

const Checkbox = ({
    invalid = false,
    size = 'md',
    children,
    className,
    checked = undefined,
    disabled = false,
    id,
    ...checkboxProps
}: CheckboxProps) => {
    const checkboxId = useId();
    return (
        <CheckBoxProvider
            value={{
                invalid,
                size,
                checked,
                disabled,
                id: id || checkboxId,
                ...checkboxProps,
            }}
        >
            <div
                className={cx(style.container, className, {
                    [style.container_disabled]: disabled,
                })}
            >
                {children}
            </div>
        </CheckBoxProvider>
    );
};

Checkbox.Label = Label;
Checkbox.Indicator = Indicator;

export default Checkbox;
