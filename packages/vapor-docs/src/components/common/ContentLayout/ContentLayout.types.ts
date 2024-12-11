import type { ReactNode } from 'react';

import type { ContentMeta } from '@vapor-docs/src/types/content';

export type ContentLayoutProps = {
    componentName: string;
    meta: ContentMeta;
    usageComp: ReactNode;
    historyComp: ReactNode;
};
