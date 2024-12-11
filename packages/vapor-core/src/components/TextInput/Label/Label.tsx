import React from 'react';

import Label from '@vapor-core/src/components/Label';
import cx from 'classnames';

import { DISPLAY_NAME } from '../TextInput.constants';
import { useTextInputContext } from '../TextInput.context';
import style from './Label.module.scss';
import type { TextInputLabelProps } from './Label.types';

const TextInputLabel = ({
    className,
    visuallyHidden = false,
    children,
    ...props
}: TextInputLabelProps) => {
    const { id, disabled } = useTextInputContext();

    return (
        <Label
            className={cx(className, style.label)}
            htmlFor={id}
            visuallyHidden={visuallyHidden}
            aria-disabled={disabled}
            {...props}
        >
            {children}
        </Label>
    );
};

TextInputLabel.displayName = DISPLAY_NAME.Label;

export default TextInputLabel;
