import { useEffect, useRef, useState } from 'react';

import { track } from '@vercel/analytics';

const useVisibilityTracker = (
    elementRef: React.RefObject<HTMLElement | null>,
    options: {
        title: string;
        componentName: string;
    },
) => {
    const [visibleTime, setVisibleTime] = useState<number>(0);
    const visibleStartTimeRef = useRef<number | null>(null);

    const formatTime = (timeInMilliseconds: number) => {
        const minutes = Math.floor(timeInMilliseconds / 60000);
        const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    };

    useEffect(() => {
        const element = elementRef.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (visibleStartTimeRef.current === null) {
                            visibleStartTimeRef.current = performance.now();
                        }
                    } else if (visibleStartTimeRef.current !== null) {
                        const visibleEndTime = performance.now();
                        const duration =
                            visibleEndTime - visibleStartTimeRef.current;
                        setVisibleTime((prevTime) => prevTime + duration);
                        visibleStartTimeRef.current = null;
                    }
                });
            },
            { threshold: 0.5 },
        );
        observer.observe(element);

        return () => {
            track(`${options.componentName} Page Viewed Time`, {
                title: options.title,
                visibleTime: formatTime(visibleTime),
            });
            observer.disconnect();
        };
    }, [elementRef, options, visibleTime]);

    return visibleTime;
};

export default useVisibilityTracker;
