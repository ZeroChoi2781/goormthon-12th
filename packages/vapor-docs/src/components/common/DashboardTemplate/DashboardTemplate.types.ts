import type { ReactNode } from 'react';

import type { Navigation } from '@vapor-docs/src/types/navigation';

export type DashboardTemplateProps = {
    children: ReactNode;
    sidebarItems: Navigation[];
};
