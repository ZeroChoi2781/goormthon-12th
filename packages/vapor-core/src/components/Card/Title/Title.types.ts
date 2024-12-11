import type { ComponentPropsWithoutRef } from 'react';

import type Primitive from '../../Primitive';
import type { TextProps } from '../../Text';

export type TitleProps = ComponentPropsWithoutRef<typeof Primitive.h5> &
    TextProps;
