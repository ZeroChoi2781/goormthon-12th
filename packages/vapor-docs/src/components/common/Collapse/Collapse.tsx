import React from 'react';

import {
    Content as CollapsibleContent,
    Trigger as CollapsibleTrigger,
    Root as CollasibeRoot,
} from '@radix-ui/react-collapsible';
import type {
    CollapsibleContentProps,
    CollapsibleProps,
    CollapsibleTriggerProps,
} from '@radix-ui/react-collapsible';

const CollapseContent = ({ children, ...props }: CollapsibleContentProps) => {
    return <CollapsibleContent {...props}>{children}</CollapsibleContent>;
};

const CollapseTrigger = ({ children, ...props }: CollapsibleTriggerProps) => {
    return <CollapsibleTrigger {...props}>{children}</CollapsibleTrigger>;
};

const Collapse = ({ children, ...props }: CollapsibleProps) => {
    return <CollasibeRoot {...props}>{children}</CollasibeRoot>;
};

Collapse.Trigger = CollapseTrigger;
Collapse.Content = CollapseContent;

export default Collapse;
