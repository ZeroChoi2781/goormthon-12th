import { useEffect, useRef } from 'react';

import type { TrapFocusProps } from './useTrapFocus.types';

const useTrapFocus = ({ trapContainer, onEscape }: TrapFocusProps) => {
    const ref = useRef<number>(0);

    useEffect(() => {
        const trapElement = trapContainer?.current;

        if (!trapElement) return;

        const focusAbleElements = trapElement.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusAbleElements) return;

        const handleTabKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                if (ref.current === focusAbleElements.length - 1) {
                    event.preventDefault();
                    focusAbleElements[0].focus();
                    ref.current = 0;
                } else {
                    ref.current += 1;
                }
            }
        };

        const handleEscKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onEscape) {
                onEscape();
            }
        };

        trapElement.focus();
        trapElement.addEventListener('keydown', handleTabKeyPress);
        trapElement.addEventListener('keydown', handleEscKeyPress);

        return () => {
            trapElement.removeEventListener('keydown', handleTabKeyPress);
            trapElement.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [trapContainer, onEscape]);
};

export default useTrapFocus;
