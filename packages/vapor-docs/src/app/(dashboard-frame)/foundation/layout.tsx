import type { ReactNode } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Foundation | Vapor',
};

const layout = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
};

export default layout;
