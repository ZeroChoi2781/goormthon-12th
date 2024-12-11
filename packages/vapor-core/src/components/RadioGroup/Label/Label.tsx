import React from 'react';

import CoreLabel from '@vapor-core/src/components/Label';

import { useRadioGroupItemContext } from '../Item/Item.context';
import type { LabelProps } from './Label.types';

const Label = ({ children, ...props }: LabelProps) => {
    const { indicatorId } = useRadioGroupItemContext();
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

Label.displayName = 'RadioGroup.Label';
export default Label;
