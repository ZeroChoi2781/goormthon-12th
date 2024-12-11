import 'react-toastify/dist/ReactToastify.min.css';

import type { Metadata } from 'next';

import type { PageProps } from './[componentName].types';

export function generateMetadata({ params }: PageProps): Metadata {
    // read route params
    const { componentName } = params;

    return {
        title: `${componentName} Example | Vapor`,
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body style={{ backgroundColor: 'white' }}>{children}</body>
        </html>
    );
}
