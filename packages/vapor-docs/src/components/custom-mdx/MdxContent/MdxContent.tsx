'use client';

import { type ReactNode, useRef } from 'react';

import useVisibilityTracker from '@vapor-docs/src/hooks/useVisibilityTracker';

import styles from './MdxContent.module.scss';

const MdxContent = ({
    title,
    componentName,
    children,
}: {
    title: string;
    componentName: string;
    children: ReactNode;
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useVisibilityTracker(ref, {
        title,
        componentName,
    });

    return (
        <section ref={ref} className={styles.container}>
            {children}
        </section>
    );
};

export default MdxContent;
