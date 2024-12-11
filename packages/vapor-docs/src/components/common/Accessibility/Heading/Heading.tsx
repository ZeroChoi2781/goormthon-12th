import React from 'react';

import { Text } from '@goorm-dev/vapor-core';

import style from './Heading.module.scss';
import type { HeadingProps } from './Heading.types';

const Heading = ({ description }: HeadingProps) => {
    return (
        <div className={style.header}>
            <div className={style.description}>
                <Text typography="body1">{description}</Text>
            </div>
        </div>
    );
};

export default Heading;
