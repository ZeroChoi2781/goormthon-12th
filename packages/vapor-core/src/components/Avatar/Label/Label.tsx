import React from 'react';

import cn from 'classnames';

import { useAvatarContext } from '../Avatar.context';
import styles from './Label.module.scss';

const Label = () => {
    const { size, label } = useAvatarContext();

    return (
        <span className={cn(styles.label, styles[`label_${size}`])}>
            {(label || 'G').trim()[0].toLocaleUpperCase()}
        </span>
    );
};

export default Label;
