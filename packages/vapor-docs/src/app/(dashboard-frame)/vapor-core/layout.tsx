import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import './layout.css';

export const metadata: Metadata = {
    title: {
        template: '%s | Vapor',
        default: 'vapor-core',
    },
};

const layout = ({ children }: { children: ReactNode }) => {
    return children;
};

export default layout;
