import React from 'react';

import type { IconBaseProps } from '../types/icon.types';

function IconBase({
    children,
    width,
    height,
    size,
    className,
    color = 'currentColor',
    ...props
}: IconBaseProps) {
    return (
        <svg
            fill={color}
            /**
             * FigmaAPI 단에서 width와 height를 제거해주는 로직이 제거됨 {@link scripts/figma/utils/api.js}
             * size와 width, height를 비교해주는 로직을 IconBase단에서 처리
             */
            width={size || width}
            height={size || height}
            className={className}
            {...props}
        >
            {children}
        </svg>
    );
}

export default IconBase;
