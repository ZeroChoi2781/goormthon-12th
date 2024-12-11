'use client';

import type { TextProps } from '@goorm-dev/vapor-components';
import { Text } from '@goorm-dev/vapor-components';
import Link from 'next/link';

const Heading = ({ id, as, children, ...props }: TextProps) => {
    if (as === 'p') {
        return (
            <Text as={as} {...props}>
                {children}
            </Text>
        );
    }
    return (
        <Link href={`#${id}`}>
            <Text id={id} as={as} {...props}>
                {children}
            </Text>
        </Link>
    );
};

export default Heading;
