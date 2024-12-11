import { Fragment, useEffect, useState } from 'react';

import { Nav } from '@goorm-dev/vapor-core';
import type { Navigation } from '@vapor-docs/src/types/navigation';
import { kebabCase } from 'lodash';
import { usePathname } from 'next/navigation';

import CollapseSideNav from '../CollapseSideNav';
import { SIDEBAR_ICON } from './DashboardSidebarTemplate.constants';
import styles from './DashboardSidebarTemplate.module.scss';

const DashboardSidebarTemplate = ({
    sidebarItems,
}: {
    sidebarItems: Navigation[];
}) => {
    const pathname = usePathname();
    const [activeHref, setActiveHref] = useState(pathname);

    useEffect(() => {
        setActiveHref(pathname);
    }, [pathname]);

    if (sidebarItems.length === 0) return null;

    return (
        <div className={styles.sidebarTemplateContainer}>
            <Nav size="md" stretch direction="vertical">
                <Nav.List>
                    {sidebarItems.map(({ category, items }) => (
                        <Fragment key={category}>
                            <CollapseSideNav.Link
                                active={
                                    activeHref === `/${kebabCase(category)}`
                                }
                                key={category}
                                title={category}
                                href={`/${kebabCase(category)}`}
                                icon={SIDEBAR_ICON[category]}
                            >
                                {items.map(({ title, href, children }) => {
                                    if (href) {
                                        return (
                                            <CollapseSideNav.Link
                                                active={activeHref === href}
                                                key={title}
                                                title={title}
                                                href={href}
                                            />
                                        );
                                    }

                                    return (
                                        <CollapseSideNav.Link
                                            key={title}
                                            title={title}
                                            href={`/${kebabCase(category)}/${kebabCase(title)}`}
                                        >
                                            {children?.map(
                                                ({
                                                    title: title2,
                                                    href: href2,
                                                }) => (
                                                    <CollapseSideNav.Link
                                                        active={
                                                            activeHref === href2
                                                        }
                                                        key={title2}
                                                        title={title2}
                                                        href={href2}
                                                    />
                                                ),
                                            )}
                                        </CollapseSideNav.Link>
                                    );
                                })}
                            </CollapseSideNav.Link>
                        </Fragment>
                    ))}
                </Nav.List>
            </Nav>
        </div>
    );
};

export default DashboardSidebarTemplate;
