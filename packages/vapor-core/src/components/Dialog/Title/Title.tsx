import React from 'react';

import { DialogTitle } from '@radix-ui/react-dialog';
import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import styles from './Title.module.scss';
import type { TitleProps } from './Title.types';

const Title = ({ className, children, ...props }: TitleProps) => {
    return (
        <DialogTitle className={cn(styles.title, className)} {...props}>
            {children}
        </DialogTitle>
    );
};
Title.displayName = DISPLAY_NAME.title;

export default Title;
