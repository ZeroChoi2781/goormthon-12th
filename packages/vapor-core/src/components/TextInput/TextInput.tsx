import React from 'react';

import { useId } from '@radix-ui/react-id';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import cn from 'classnames';

import Field from './Field';
import Label from './Label';
import { TextInputProvider } from './TextInput.context';
import styles from './TextInput.module.scss';
import type { TextInputProps } from './TextInput.types';

const TextInput = ({
    size = 'md',
    invalid = false,
    value: valueProp = undefined,
    onValueChange,
    children,
    disabled = false,
    defaultValue: defaultValueProp = '',
    id: idProp,
    ...textInputProps
}: TextInputProps) => {
    const generatedId = useId();
    const id = idProp || generatedId;
    const [textInputValue = '', setTextInputValue] = useControllableState<
        TextInputProps['value']
    >({
        prop: valueProp,
        defaultProp: defaultValueProp,
        onChange: onValueChange,
    });
    return (
        <TextInputProvider
            value={{
                size,
                value: textInputValue,
                setValue: setTextInputValue,
                invalid,
                id,
                disabled,
                ...textInputProps,
            }}
        >
            <div
                className={cn(styles.container, {
                    [styles.disabled]: disabled,
                })}
            >
                {children}
            </div>
        </TextInputProvider>
    );
};

TextInput.Field = Field;
TextInput.Label = Label;

export default TextInput;
