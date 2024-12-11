import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | Vapor',
        default: 'vapor-components',
    },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <article>{children}</article>;
};

export default Layout;
