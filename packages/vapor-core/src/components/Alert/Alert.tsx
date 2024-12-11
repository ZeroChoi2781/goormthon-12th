import React from 'react';

import cn from 'classnames';

import Primitive from '../Primitive';
import Text from '../Text';
import styles from './Alert.module.scss';
import type { AlertProps } from './Alert.types';

function Alert({ color = 'primary', children }: AlertProps) {
    return (
        <Text asChild typography="subtitle1">
            <Primitive.div
                role="alert"
                className={cn(styles.container, styles[`container_${color}`])}
            >
                {children}
            </Primitive.div>
        </Text>
    );
}

export default Alert;
