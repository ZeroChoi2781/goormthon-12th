import type { ReactNode } from 'react';

import type { IconType } from '@vapor-icons';
import type { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = React.PropsWithChildren<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
        NextLinkProps
>;
export type LinkButtonProps = {
    linkProps?: LinkProps;
    icon?: IconType;
    size?: 'xl' | 'lg' | 'md' | 'sm';
    children: ReactNode;
};
