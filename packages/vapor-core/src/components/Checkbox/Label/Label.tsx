import React from 'react';

import Label from '@vapor-core/src/components/Label';
import cx from 'classnames';

import { useCheckboxContext } from '../Checkbox.context';
import styles from './Label.module.scss';
import type { CheckboxLabelProps } from './Label.types';

const CheckboxLabel = ({
    children,
    htmlFor,
    className,
    ...props
}: CheckboxLabelProps) => {
    const { id } = useCheckboxContext();
    return (
        <Label
            {...props}
            htmlFor={htmlFor || id}
            className={cx(styles.label, 'mb-0', className)}
        >
            {children}
        </Label>
    );
};

export default CheckboxLabel;
