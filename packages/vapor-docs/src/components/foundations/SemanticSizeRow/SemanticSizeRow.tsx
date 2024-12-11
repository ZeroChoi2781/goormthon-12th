'use client';

import { useRef } from 'react';

import { Badge } from '@goorm-dev/vapor-components';
import useCopyTokenWithToast from '@vapor-docs/src/hooks/useCopyTokenWithToast';
import useGetRefSize from '@vapor-docs/src/hooks/useGetRefSize';

type SemanticSizeRowProps = {
    sizeType?: 'width' | 'height' | 'borderRadius';
    primitive: string;
    semantic: string;
};

const SemanticSizeRow = ({
    sizeType = 'width',
    primitive,
    semantic,
}: SemanticSizeRowProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const sizes = useGetRefSize(ref);

    const size = sizes[sizeType];
    const isBorderRadius = sizeType === 'borderRadius';

    const onToast = useCopyTokenWithToast(semantic);

    return (
        <tr tabIndex={0} role="button" onClick={onToast}>
            <td>
                <Badge size="sm" color="hint">
                    {semantic}
                </Badge>
            </td>
            <td>
                <Badge size="sm" color="hint">
                    {primitive}
                </Badge>
            </td>
            <td>
                {size}px / {size / 16}rem
            </td>
            <td>
                <div
                    ref={ref}
                    style={{
                        width: isBorderRadius ? ' 5rem' : `var(--${semantic})`,
                        height: isBorderRadius ? ' 5rem' : `var(--${semantic})`,
                        backgroundColor: 'var(--blue-100)',
                        borderRadius: isBorderRadius
                            ? `var(--${semantic})`
                            : '0',
                    }}
                />
            </td>
        </tr>
    );
};

export default SemanticSizeRow;
