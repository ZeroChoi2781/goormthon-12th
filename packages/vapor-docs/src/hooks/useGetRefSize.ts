import { useEffect, useState } from 'react';

function useGetRefSize(ref: React.RefObject<HTMLDivElement | null>) {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [borderRadius, setBorderRadius] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
            setHeight(ref.current.offsetHeight);

            const computedStyle = getComputedStyle(ref.current);
            const borderRadiusStyle = Number(
                computedStyle.borderRadius.split('px')[0],
            );

            setBorderRadius(borderRadiusStyle);
        }
    }, [ref]);

    return { width, height, borderRadius };
}

export default useGetRefSize;
