import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 좌우로 스크롤 가능한지 확인하는 hook
 * @returns {scrollableRef, isLeftScrollable, isRightScrollable}
 */
const useScrollable = (): {
    scrollableRef: React.MutableRefObject<HTMLDivElement | null>;
    isLeftScrollable: boolean;
    isRightScrollable: boolean;
} => {
    const scrollableRef = useRef<HTMLDivElement>(null);

    const [isLeftScrollable, setIsLeftScrollable] = useState(false);
    const [isRightScrollable, setIsRightScrollable] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollableRef.current;

            if (!container) return;

            if (container.scrollLeft > 0) {
                setIsLeftScrollable(true);
            } else {
                setIsLeftScrollable(false);
            }

            if (
                container.scrollLeft <
                container.scrollWidth - container.clientWidth
            ) {
                setIsRightScrollable(true);
            } else {
                setIsRightScrollable(false);
            }
        };

        const scrollableContainer = scrollableRef.current;
        scrollableContainer?.addEventListener('scroll', handleScroll);

        return () => {
            scrollableContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollableRef, isLeftScrollable, isRightScrollable };
};

export default useScrollable;
