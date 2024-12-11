import type { ReactNode } from 'react';

import type { TabsProps as RadixTabsProps } from '@radix-ui/react-tabs';
import type { CommonSizeToken } from '@vapor-core/src/types/common';

export type TabsSize = CommonSizeToken;

export type TabsContextType = {
    size: TabsSize;
    stretch: boolean;
    position: 'start' | 'center';
};

export type TabsProviderProps = TabsContextType & { children: ReactNode };

export type TabsProps = Partial<TabsProviderProps> & {
    direction?: RadixTabsProps['orientation'];
} & Omit<RadixTabsProps, 'orientation' | 'activationMode' | 'dir'>;
