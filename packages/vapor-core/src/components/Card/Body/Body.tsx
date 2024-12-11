import React from 'react';

import cn from 'classnames';

import Primitive from '../../Primitive';
import { DISPLAY_NAME } from '../Card.constants';
import { useCardContext } from '../Card.context';
import styles from './Body.module.scss';
import type { BodyProps } from './Body.types';

const Body = ({
    className,
    expanded = false,
    children,
    ...props
}: BodyProps) => {
    const { descriptionId } = useCardContext();
    return (
        <Primitive.div
            id={descriptionId}
            className={cn(styles.container, className, {
                [styles.container_expanded]: expanded,
            })}
            {...props}
        >
            {children}
        </Primitive.div>
    );
};
Body.displayName = DISPLAY_NAME.body;

export default Body;
