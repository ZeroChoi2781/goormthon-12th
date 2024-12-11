import type { ComponentPropsWithoutRef } from 'react';

import type Primitive from '../../Primitive';

export type BodyProps = ComponentPropsWithoutRef<typeof Primitive.div> & {
    expanded?: boolean;
};
