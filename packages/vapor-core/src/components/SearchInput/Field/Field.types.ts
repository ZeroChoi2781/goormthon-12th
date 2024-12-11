import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import type Primitive from '../../Primitive';

export type FieldElement = ElementRef<typeof Primitive.input>;

export type FieldProps = Omit<
    ComponentPropsWithoutRef<typeof Primitive.input>,
    'type' | 'value' | 'defaultValue' | 'onChange'
> & {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
};
