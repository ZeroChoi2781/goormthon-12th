import React from 'react';

import { TabsContent } from '@radix-ui/react-tabs';
import cn from 'classnames';

import styles from './Panel.module.scss';
import type { PanelProps } from './Panel.types';

const Panel = ({ className, children, ...props }: PanelProps) => {
    return (
        <TabsContent className={cn(styles.panel, className)} {...props}>
            {children}
        </TabsContent>
    );
};

export default Panel;
