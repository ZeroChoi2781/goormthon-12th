import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import type Primitive from '../../Primitive';

export type FieldProps = Omit<
    ComponentPropsWithoutRef<typeof Primitive.input>,
    'size'
>;

export type InputElement = ElementRef<typeof Primitive.input>;
