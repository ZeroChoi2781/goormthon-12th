import React from 'react';

import { useId } from '@radix-ui/react-id';
import cn from 'classnames';

import Primitive from '../Primitive';
import Body from './Body';
import { CardProvider } from './Card.context';
import styles from './Card.module.scss';
import type { CardProps } from './Card.types';
import Footer from './Footer';
import Header from './Header';
import Title from './Title';

const Card = ({ className, children, ...props }: CardProps) => {
    const titleId = useId();
    const descriptionId = useId();

    return (
        <CardProvider titleId={titleId} descriptionId={descriptionId}>
            <Primitive.article
                className={cn(styles.container, className)}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                {...props}
            >
                {children}
            </Primitive.article>
        </CardProvider>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Title = Title;

export default Card;
