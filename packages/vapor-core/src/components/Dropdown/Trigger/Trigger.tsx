import React, { forwardRef } from 'react';

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

import { DISPLAY_NAME } from '../Dropdown.constants';
import type { TriggerProps } from './Trigger.types';

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
    ({ asChild = true, ...props }, ref) => {
        return <DropdownMenuTrigger ref={ref} asChild={asChild} {...props} />;
    },
);
Trigger.displayName = DISPLAY_NAME.trigger;

export default Trigger;
