import React, { forwardRef } from 'react';

import { DialogClose } from '@radix-ui/react-dialog';

import { DISPLAY_NAME } from '../Dialog.constants';
import type { CloseProps, CloseRef } from './Close.types';

const Close = forwardRef<CloseRef, CloseProps>(
    ({ asChild = true, ...props }, ref) => {
        return <DialogClose {...props} ref={ref} asChild={asChild} />;
    },
);

Close.displayName = DISPLAY_NAME.close;

export default Close;
