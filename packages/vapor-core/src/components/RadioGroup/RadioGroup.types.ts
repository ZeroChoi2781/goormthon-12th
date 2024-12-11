import type { ReactNode } from 'react';

import type { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

export type RadioGroupSize = 'md' | 'lg';

export type RadioGroupProps = Omit<
    RadixRadioGroupProps,
    'orientation' | 'defaultValue' | 'value' | 'onValueChange'
> & {
    size?: RadioGroupSize;
    invalid?: boolean;
    direction?: 'horizontal' | 'vertical';
    children: ReactNode;
    defaultSelectedValue?: RadixRadioGroupProps['defaultValue'];
    selectedValue?: RadixRadioGroupProps['value'];
    onSelectedValueChange?: RadixRadioGroupProps['onValueChange'];
};

export type RadioGroupContextState = {
    size: RadioGroupSize;
    invalid: RadioGroupProps['invalid'];
};

export type RadioGroupContextProps = {
    children: ReactNode;
    value: RadioGroupContextState;
};

export type RadioGroupIndicatorIconProps = {
    width: string;
    height: string;
    radius: string;
};
