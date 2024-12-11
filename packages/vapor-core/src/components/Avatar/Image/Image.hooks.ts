import { useEffect, useState } from 'react';

const useImageLoaded = (src?: string) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!src) {
            setLoaded(false);

            return;
        }

        let isMounted = true;
        const image = new window.Image();

        const updateStatus = (status: boolean) => () => {
            if (!isMounted) return;

            setLoaded(status);
        };

        image.onload = updateStatus(true);
        image.onerror = updateStatus(false);
        image.src = src;

        return () => {
            isMounted = false;
        };
    }, [src]);

    return loaded;
};

export default useImageLoaded;
