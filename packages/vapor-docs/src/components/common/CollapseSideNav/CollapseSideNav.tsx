'use client';

import { Nav } from '@goorm-dev/vapor-core';

import styles from './CollapseSideNav.module.scss';
import type { CollapseSideNavProps } from './CollapseSideNav.types';
import Link from './Link';

const CollapseSideNav = ({ children }: CollapseSideNavProps) => {
    return (
        <Nav direction="vertical" size="md" stretch>
            <Nav.List className={styles.nav}>{children}</Nav.List>
        </Nav>
    );
};

CollapseSideNav.Link = Link;

export default CollapseSideNav;
