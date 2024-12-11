import React from 'react';

import type { CheckboxIndicatorIconProps } from './Checkbox.types';

export const CheckIcon = ({ width, height }: CheckboxIndicatorIconProps) => (
    <svg
        height={height}
        viewBox="0 0 8 7"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.3135 5.29325c-.391-.391-1.024-.391-1.414 0l-3.364 3.364-.829-.828c-.39-.391-1.023-.391-1.414 0-.39.39-.39 1.023 0 1.414l1.536 1.535c.39.391 1.023.391 1.414 0l4.071-4.071c.391-.39.391-1.023 0-1.414"
            fill="rgb(255, 255, 255)"
            fillRule="evenodd"
            transform="translate(-4 -5)"
        />
    </svg>
);

export const DividerHorizontalIcon = ({
    width,
    height,
}: CheckboxIndicatorIconProps) => (
    <svg
        height={height}
        viewBox="0 0 8 2"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            fill="rgb(255, 255, 255)"
            fillRule="evenodd"
            height="2"
            rx="1"
            width="8"
        />
    </svg>
);
