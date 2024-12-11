import { useEffect, useState } from 'react';

import type { IframeProps } from './Iframe.types';

const Iframe = ({
    title,
    width = '100%',
    height = '550px',
    ...props
}: IframeProps) => {
    const [heightState, setHeight] = useState(height);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data.height) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                setHeight(`${event.data.height}px`);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <iframe
            title={title}
            width={width}
            height={heightState}
            style={{ border: 'none', minHeight: heightState }}
            {...props}
        />
    );
};

export default Iframe;
