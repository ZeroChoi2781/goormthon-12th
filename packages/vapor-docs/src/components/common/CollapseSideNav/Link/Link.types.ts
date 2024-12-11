import type { NavItemProps } from '@goorm-dev/vapor-core';
import type { IconProps } from '@goorm-dev/vapor-icons';

export type LinkProps = {
    children?: React.ReactNode;
    href: string;
    title: string;
    nestingLevel?: number;
    icon?: (props: IconProps) => React.ReactNode;
    active?: boolean;
};

export type ItemProps = {
    children: React.ReactNode;
    nestingLevel: number;
} & NavItemProps;
