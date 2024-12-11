'use client';

import { DashboardFrameNew, Text } from '@goorm-dev/vapor-components';
import { usePathname } from 'next/navigation';

import DashboardNavbarTemplate from '../DashboardNavbarTemplate';
import DashboardSidebarTemplate from '../DashboardSidebarTemplate';
import styles from './DashboardTemplate.module.scss';
import type { DashboardTemplateProps } from './DashboardTemplate.types';

// eslint-disable-next-line no-console
const originalConsoleError = console.error;

const Title = () => (
    <Text typography="subtitle1" color="text-hint" className={styles.title}>
        Goorm Design System: Vapor
    </Text>
);

const DashboardTemplate = ({
    children,
    sidebarItems,
}: DashboardTemplateProps) => {
    const pathname = usePathname();

    const breadcrumbItem = pathname.split('/').filter((item) => item !== '');
    const breadcrumbItems = breadcrumbItem.reduce((acc, cur, index) => {
        if (index === 0) return acc;
        const path = `/${breadcrumbItem.slice(0, index + 1).join('/')}`;

        return {
            ...acc,
            [cur]: path,
        };
    }, {});

    // TODO: defaultProps 문제 해결 후, 해당 코드 삭제
    // eslint-disable-next-line no-console
    console.error = (...args) => {
        const message = args.join(' '); // 모든 인자를 하나의 문자열로 합침

        if (!message.includes('defaultProps')) {
            // "defaultProps"가 포함되지 않은 메시지만 출력
            originalConsoleError.apply(console, args);
        }
    };

    return (
        <DashboardFrameNew>
            <DashboardFrameNew.SideBar
                innerClassName="p-0"
                innerHeaderClassName={styles.sideBarInnerHeader}
                Title={<Title />}
            >
                <DashboardSidebarTemplate sidebarItems={sidebarItems} />
            </DashboardFrameNew.SideBar>
            <DashboardFrameNew.NavBar>
                <DashboardNavbarTemplate items={breadcrumbItems} />
            </DashboardFrameNew.NavBar>
            <DashboardFrameNew.Contents>{children}</DashboardFrameNew.Contents>
        </DashboardFrameNew>
    );
};

export default DashboardTemplate;
