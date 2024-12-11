import React from 'react';

import { Tabs as RadixTabs } from '@radix-ui/react-tabs';
import cn from 'classnames';

import Button from './Button';
import List from './List';
import Panel from './Panel';
import { TabsProvider } from './Tabs.context';
import styles from './Tabs.module.scss';
import type { TabsProps } from './Tabs.types';

const Tabs = ({
    size = 'md',
    direction = 'horizontal',
    stretch = false,
    position = 'start',
    className,
    children,
    ...props
}: TabsProps) => {
    return (
        <TabsProvider size={size} stretch={stretch} position={position}>
            <RadixTabs
                className={cn(styles.root, className)}
                activationMode="manual"
                orientation={direction}
                {...props}
            >
                {children}
            </RadixTabs>
        </TabsProvider>
    );
};

Tabs.List = List;
Tabs.Button = Button;
Tabs.Panel = Panel;

export default Tabs;
