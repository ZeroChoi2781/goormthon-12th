import { useState } from 'react';

const useMouseDrag = (
    scrollableRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (!scrollableRef.current) return;
        setStartX(e.pageX - scrollableRef.current.offsetLeft);
        setScrollLeft(scrollableRef.current.scrollLeft);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        if (!scrollableRef.current) return;
        const x = e.pageX - scrollableRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        if (scrollableRef.current) {
            // eslint-disable-next-line no-param-reassign
            scrollableRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    return { onMouseDown, onMouseMove, onMouseUp };
};

export default useMouseDrag;
