'use client';

import { useEffect, useState } from 'react';

import { Skeleton } from '@goorm-dev/vapor-components';

import { EXAMPELS } from './[componentName].constants';
import type { PageProps } from './[componentName].types';

const Page = ({ params }: PageProps) => {
    const [Component, setComponent] = useState<React.ComponentType | null>(
        null,
    );

    useEffect(() => {
        const loadComponent = async () => {
            const { componentName } = params;
            const component =
                await EXAMPELS['vapor-core' as const][componentName]();
            setComponent(() => component.default);
        };

        loadComponent().catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Error loading component:', error);
        });
    }, [params]);

    useEffect(() => {
        const sendHeight = () => {
            const height = document.body.scrollHeight;
            window.parent.postMessage({ height }, '*');
        };

        const observer = new MutationObserver(sendHeight);

        // Observe changes in the entire body
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
        });

        // Clean up the observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    if (!Component) {
        return <Skeleton width="100%" height="550px" />;
    }

    return <Component />;
};

export default Page;
