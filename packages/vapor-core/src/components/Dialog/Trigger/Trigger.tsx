import React, { forwardRef } from 'react';

import { DialogTrigger } from '@radix-ui/react-dialog';

import { DISPLAY_NAME } from '../Dialog.constants';
import type { TriggerProps, TriggerRef } from './Trigger.types';

const Trigger = forwardRef<TriggerRef, TriggerProps>(
    ({ asChild = true, ...props }, ref) => {
        return <DialogTrigger {...props} ref={ref} asChild={asChild} />;
    },
);

Trigger.displayName = DISPLAY_NAME.trigger;

export default Trigger;
