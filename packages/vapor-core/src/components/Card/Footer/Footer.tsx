import React from 'react';

import cn from 'classnames';

import Primitive from '../../Primitive';
import { DISPLAY_NAME } from '../Card.constants';
import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.types';

const Footer = ({ className, children, ...props }: FooterProps) => {
    return (
        <Primitive.footer
            className={cn(styles.container, className)}
            {...props}
        >
            {children}
        </Primitive.footer>
    );
};
Footer.displayName = DISPLAY_NAME.footer;

export default Footer;
