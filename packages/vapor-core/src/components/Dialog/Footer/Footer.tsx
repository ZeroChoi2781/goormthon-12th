import React from 'react';

import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.types';

const Footer = ({ className, children, ...props }: FooterProps) => {
    return (
        <div {...props} className={cn(styles.footer, className)}>
            {children}
        </div>
    );
};
Footer.displayName = DISPLAY_NAME.footer;

export default Footer;
