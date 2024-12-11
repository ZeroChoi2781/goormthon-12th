import type { ComponentPropsWithRef } from 'react';

export type TextInputSize = 'sm' | 'md' | 'lg' | 'xl';

export type TextInputProps = {
    size?: TextInputSize;
    invalid?: boolean;
    type: Extract<
        React.HTMLInputTypeAttribute,
        'text' | 'email' | 'password' | 'url' | 'tel'
    >;
    onValueChange?: (value: ComponentPropsWithRef<'input'>['value']) => void;
} & Omit<ComponentPropsWithRef<'input'>, 'size'>;

export type TextInputContextState = Omit<TextInputProps, 'children'> &
    Required<Pick<TextInputProps, 'size' | 'value'>> & {
        id: string;
        setValue: (value: TextInputProps['value']) => void;
    };

export type TextInputContextProps = {
    children: React.ReactNode;
    value: TextInputContextState;
    className?: string;
};
