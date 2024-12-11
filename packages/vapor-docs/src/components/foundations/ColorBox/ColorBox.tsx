'use client';

import { useEffect, useRef, useState } from 'react';

import { Text } from '@goorm-dev/vapor-components';
import useCopyTokenWithToast from '@vapor-docs/src/hooks/useCopyTokenWithToast';
import cn from 'classnames';

import styles from './ColorBox.module.scss';
import type { ColorBoxProps } from './ColorBox.types';

function ColorBox({ color }: ColorBoxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [rgb, setRgb] = useState('rgb(0, 0, 0)');

    const onToast = useCopyTokenWithToast(color);

    const token = `var(--${color})`;

    useEffect(() => {
        if (!ref?.current) return;
        setRgb(getComputedStyle(ref.current).backgroundColor || 'rgb(0, 0, 0)');
    }, []);

    const handleCopy = async () => {
        await onToast();
    };

    return (
        <button type="button" className={styles.container} onClick={handleCopy}>
            <div
                ref={ref}
                className={styles.palette}
                style={{
                    backgroundColor: token,
                }}
            />
            <div className={cn('d-flex flex-column', styles.descriptions)}>
                <Text typography="subtitle1" color="gray-600">
                    {rgb}
                </Text>
                <Text
                    typography="subtitle1"
                    color="gray-900"
                    className={styles.description}
                >
                    {color}
                </Text>
            </div>
        </button>
    );
}

export default ColorBox;
