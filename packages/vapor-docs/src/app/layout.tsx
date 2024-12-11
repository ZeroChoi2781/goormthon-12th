import { preinit } from 'react-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
    preinit('/styles/vapor-foundation.css', {
        as: 'style',
    });
    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>{children}</body>
        </html>
    );
};

export default Layout;
