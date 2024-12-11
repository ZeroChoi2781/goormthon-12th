import type { ReactNode } from 'react';

import type { DialogProps as RadixDialogProps } from '@radix-ui/react-dialog';
import type { CommonSizeToken } from '@vapor-core/src/types/common';

type DialogSize = Extract<CommonSizeToken, 'md' | 'lg' | 'xl'>;
export type DialogContextType = {
    size: DialogSize;
    scrimClickable?: boolean;
};

type ChildrenType = { children: ReactNode };

export type DialogProviderProps = DialogContextType & ChildrenType;

type RadixDialogEssentialProps = Pick<
    RadixDialogProps,
    'open' | 'onOpenChange' | 'defaultOpen' | 'children'
>;

export type DialogProps = RadixDialogEssentialProps &
    Partial<DialogContextType>;
