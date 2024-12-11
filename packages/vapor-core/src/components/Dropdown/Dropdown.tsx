import React from 'react';

import { DropdownMenu } from '@radix-ui/react-dropdown-menu';

import Contents from './Contents';
import { DropdownProvider } from './Dropdown.context';
import type { DropdownProps } from './Dropdown.types';
import Group from './Group';
import Item from './Item';
import Trigger from './Trigger';

function Dropdown({
    side = 'bottom',
    align = 'start',
    modal = true,
    ...props
}: DropdownProps) {
    return (
        <DropdownProvider modal={modal} side={side} align={align}>
            <DropdownMenu {...props} modal={modal} />
        </DropdownProvider>
    );
}

Dropdown.Trigger = Trigger;
Dropdown.Contents = Contents;
Dropdown.Group = Group;
Dropdown.Item = Item;

export default Dropdown;
