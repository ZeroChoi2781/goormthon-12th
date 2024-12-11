import type { ReactNode } from 'react';

export type SideNavItemProps = {
    type: 'link' | 'group';
    children: ReactNode;
};

export type SideNavProps = {
    children: ReactNode;
};
