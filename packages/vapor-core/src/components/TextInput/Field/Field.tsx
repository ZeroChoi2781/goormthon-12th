import React, { forwardRef } from 'react';

import useStyles from '@vapor-core/src/hooks/useStyles';
import cx from 'classnames';

import { DISPLAY_NAME } from '../TextInput.constants';
import { useTextInputContext } from '../TextInput.context';
import { CSS_SIZE } from './Field.constants';
import styles from './Field.module.scss';
import type { FieldProps, InputElement } from './Field.types';

const Field = forwardRef<InputElement, FieldProps>(
    ({ placeholder = '', ...props }, forwardedRef) => {
        const {
            size,
            value,
            setValue,
            invalid,
            disabled,
            type,
            id,
            'aria-label': ariaLabel,
        } = useTextInputContext();
        const componentStyles = useStyles('Field', {
            ...CSS_SIZE,
        });

        return (
            <input
                {...props}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                className={cx(componentStyles[size], styles.field, {
                    [styles.field_invalid]: invalid,
                })}
                id={id}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-invalid={invalid}
                ref={forwardedRef}
            />
        );
    },
);

Field.displayName = DISPLAY_NAME.Field;

export default Field;
