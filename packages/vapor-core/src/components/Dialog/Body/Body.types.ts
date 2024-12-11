import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

export type Expanded = boolean;
export type BodyProps = ComponentPropsWithoutRef<'div'> & {
    expanded?: Expanded;
    maxHeight?: CSSProperties['maxHeight'];
};
