import { preinit } from 'react-dom';

import { Analytics } from '@vercel/analytics/next';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

import DashboardTemplate from '../../components/common/DashboardTemplate';
import ToastProvider from '../../components/common/ToastProvider/ToastProvider';
import type { Navigation } from '../../types/navigation';
import './global.css';

const getSidebarItems = () => {
    const navPath = path.join('./', 'nav.yml');
    const fileContents = fs.readFileSync(navPath, 'utf8');
    const sidebarItems = yaml.load(fileContents) as Navigation[];

    return sidebarItems;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const sidebarItems = getSidebarItems();

    preinit('/styles/vapor-markdown.css', {
        as: 'style',
    });

    return (
        <html lang="en">
            <body>
                <ToastProvider>
                    <DashboardTemplate sidebarItems={sidebarItems}>
                        {children}
                    </DashboardTemplate>
                </ToastProvider>
                <Analytics />
            </body>
        </html>
    );
};

export default Layout;
