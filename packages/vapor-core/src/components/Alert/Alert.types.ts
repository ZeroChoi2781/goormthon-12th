import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type Primitive from '../Primitive';

export type AlertColor =
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'contrast'
    | 'hint';

export type AlertProps = {
    color?: AlertColor;
    children: ReactNode;
} & ComponentPropsWithoutRef<typeof Primitive.div>;
