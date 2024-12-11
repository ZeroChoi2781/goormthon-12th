import React from 'react';

import { Label as RadixLabel } from '@radix-ui/react-label';
import cn from 'classnames';

import Text from '../Text';
import styles from './Label.module.scss';
import type { LabelProps } from './Label.types';

const Label = ({
    visuallyHidden = false,
    typography = 'subtitle2',
    color = 'text-alternative',
    className,
    children,
    ...props
}: LabelProps) => {
    return (
        <RadixLabel asChild>
            <Text
                as="label"
                typography={typography}
                color={color}
                className={cn(
                    { [styles.visuallyHidden]: visuallyHidden },
                    className,
                )}
                {...props}
            >
                {children}
            </Text>
        </RadixLabel>
    );
};

export default Label;
