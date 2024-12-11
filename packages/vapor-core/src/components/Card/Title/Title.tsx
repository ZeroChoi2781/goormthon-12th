import React from 'react';

import Primitive from '../../Primitive';
import Text from '../../Text';
import { DISPLAY_NAME } from '../Card.constants';
import { useCardContext } from '../Card.context';
import type { TitleProps } from './Title.types';

const Title = ({
    children,
    typography = 'heading5',
    color = 'text-normal',
    ...props
}: TitleProps) => {
    const { titleId } = useCardContext();
    return (
        <Text
            as={Primitive.h5}
            id={titleId}
            typography={typography}
            color={color}
            {...props}
        >
            {children}
        </Text>
    );
};
Title.displayName = DISPLAY_NAME.title;

export default Title;
