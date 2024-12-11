import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { CommonSizeToken } from '@vapor-core/src/types/common';

import type Primitive from '../Primitive';

export type BadgeColor =
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'hint'
    | 'contrast';

export type BadgeSize = Extract<CommonSizeToken, 'sm' | 'md' | 'lg'>;

export type BadgeProps = {
    color?: BadgeColor;
    size?: BadgeSize;
    pill?: boolean;
    children: ReactNode;
} & ComponentPropsWithoutRef<typeof Primitive.span>;
