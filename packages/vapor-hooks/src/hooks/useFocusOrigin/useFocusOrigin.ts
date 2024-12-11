import { useEffect, useState } from 'react';

import type { FocusOrigin } from './useFocusOrigin.types';

/**
 * useFocusOrigin - 포커스 이벤트의 출처(키보드 또는 마우스)를 결정하는 커스텀 훅입니다.
 * focus 출처가 'keyboard', 'mouse' 로 반환되며, 아직 포커스 이벤트가 감지되지 않은 경우 null입니다.
 */
function useFocusOrigin(elementRef: React.RefObject<HTMLElement>): FocusOrigin {
    const [focusOrigin, setFocusOrigin] = useState<FocusOrigin>(null);

    useEffect(() => {
        let lastInputType: FocusOrigin = null;

        const handleFocus = () => {
            setFocusOrigin(lastInputType);
        };

        const handleBlur = () => {
            setFocusOrigin(null);
        };

        const handleMouseDown = () => {
            lastInputType = 'mouse';
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                lastInputType = 'keyboard';
            }
        };

        const element = elementRef.current;

        if (element) {
            element.addEventListener('focus', handleFocus);
            element.addEventListener('blur', handleBlur);
        }

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            if (element) {
                element.removeEventListener('focus', handleFocus);
                element.removeEventListener('blur', handleBlur);
            }
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [elementRef]);

    return focusOrigin;
}

export default useFocusOrigin;
