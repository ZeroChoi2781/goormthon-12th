import React from 'react';

import { DialogDescription } from '@radix-ui/react-dialog';
import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import styles from './Description.module.scss';
import type { DescriptionProps } from './Description.types';

const Description = ({ className, ...props }: DescriptionProps) => {
    return (
        <DialogDescription
            className={cn(styles.description, className)}
            {...props}
        />
    );
};
Description.displayName = DISPLAY_NAME.description;

export default Description;
