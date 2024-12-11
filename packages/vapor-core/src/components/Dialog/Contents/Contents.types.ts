import type { CSSProperties } from 'react';

import type { DialogContentProps } from '@radix-ui/react-dialog';

type Unit = '%' | 'px' | 'em' | 'rem' | 'vw' | 'vh';
export type CSSNumericValues = `${number}${Unit}` | number;

type RadixDialogContentEssentialProps = Omit<
    DialogContentProps,
    | 'forceMount'
    | 'onOpenAutoFocus'
    | 'onCloseAutoFocus'
    | 'onEscapeKeyDown'
    | 'onPointerDownOutside'
    | 'onInteractOutside'
>;

export type ContentsProps = RadixDialogContentEssentialProps & {
    maxHeight?: CSSProperties['maxHeight'];
};
