'use client';

import { Button } from '@goorm-dev/vapor-core';
import Link from 'next/link';

import type { LinkButtonProps } from './LinkButton.types';

const LinkButton = ({
    linkProps = {
        href: '',
    },
    children,
    ...props
}: LinkButtonProps) => {
    return (
        <Link {...linkProps}>
            <Button color="secondary" shape="outline" {...props}>
                {children as string}
            </Button>
        </Link>
    );
};

export default LinkButton;
