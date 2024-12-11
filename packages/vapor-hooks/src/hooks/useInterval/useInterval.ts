import { useEffect, useRef } from 'react';

import { UseInterval } from './useInterval.types';

const useInterval: UseInterval = (callback, delay: number | null) => {
    const savedCallback = useRef<() => void>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
