import { useCallback, useRef, useState } from 'react';

// Hover 상태를 관리하는 커스텀 훅
// TODO: 추후에 vapor-hooks로 옮기는 거 제안하기
const useHover = <T extends HTMLElement>(): [
    boolean,
    (node: T | null) => void,
] => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    const callbackRef = useCallback(
        (node: T | null) => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', handleMouseEnter);
                ref.current.removeEventListener('mouseleave', handleMouseLeave);
            }

            ref.current = node;

            if (ref.current) {
                ref.current.addEventListener('mouseenter', handleMouseEnter);
                ref.current.addEventListener('mouseleave', handleMouseLeave);
            }
        },
        [handleMouseEnter, handleMouseLeave],
    );

    return [isHovered, callbackRef];
};

export default useHover;
