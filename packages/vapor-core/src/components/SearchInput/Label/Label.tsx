import React from 'react';

import CoreLabel from '../../Label';
import { DISPLAY_NAME } from '../SearchInput.constants';
import { useSearchInputContext } from '../SearchInput.context';
import type { LabelProps } from './Label.types';

const Label = ({ htmlFor, ...props }: LabelProps) => {
    const { id } = useSearchInputContext();

    return <CoreLabel htmlFor={htmlFor || id} {...props} />;
};
Label.displayName = DISPLAY_NAME.Label;

export default Label;
