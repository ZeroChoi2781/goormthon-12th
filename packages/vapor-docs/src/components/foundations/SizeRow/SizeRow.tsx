'use client';

import { useRef } from 'react';

import { Badge } from '@goorm-dev/vapor-components';
import useCopyTokenWithToast from '@vapor-docs/src/hooks/useCopyTokenWithToast';
import useGetRefSize from '@vapor-docs/src/hooks/useGetRefSize';

type SizeRowProps = {
    token: string;
};

const SizeRow = ({ token }: SizeRowProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { width: size } = useGetRefSize(ref);
    const onToast = useCopyTokenWithToast(token);

    return (
        <tr tabIndex={0} role="button" onClick={onToast}>
            <td>
                <Badge size="sm" color="hint">
                    {token}
                </Badge>
            </td>
            <td>
                {size}px / {size / 16}rem
            </td>
            <td>
                <div
                    ref={ref}
                    style={{
                        width: `var(--${token})`,
                        height: `var(--${token})`,
                        backgroundColor: 'var(--blue-100)',
                    }}
                />
            </td>
        </tr>
    );
};

export default SizeRow;
