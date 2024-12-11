import React from 'react';

import type { RadioGroupIndicatorIconProps } from './RadioGroup.types';

const RadioGroupIcon = ({
    width,
    height,
    radius,
}: RadioGroupIndicatorIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
        >
            <circle cx={radius} cy={radius} r={radius} fill="white" />
        </svg>
    );
};

export default RadioGroupIcon;
