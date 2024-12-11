import type { ComponentPropsWithoutRef } from 'react';

export type GroupProps = ComponentPropsWithoutRef<'div'> & {
    divider?: boolean;
};
