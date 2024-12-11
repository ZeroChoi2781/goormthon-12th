import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

export type ContentsProps = ComponentPropsWithoutRef<'div'> & {
    maxHeight?: CSSProperties['maxHeight'];
};
