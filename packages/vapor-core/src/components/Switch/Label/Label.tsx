import React from 'react';

import CoreLabel from '@vapor-core/src/components/Label';

import { useSwitchContext } from '../Switch.context';
import type { LabelProps } from './Label.types';

const Label = ({ children, ...props }: LabelProps) => {
    const { indicatorId } = useSwitchContext();
    return (
        <CoreLabel
            typography="body2"
            color="text-normal"
            htmlFor={indicatorId}
            {...props}
        >
            {children}
        </CoreLabel>
    );
};

export default Label;
