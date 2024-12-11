import type { ElementRef } from 'react';

import type {
    NavigationMenuLink,
    NavigationMenuLinkProps,
} from '@radix-ui/react-navigation-menu';

import type { TextProps } from '../../Text';

export type LinkElement = ElementRef<typeof NavigationMenuLink>;
export type LinkProps = {
    disabled?: boolean;
} & NavigationMenuLinkProps &
    Pick<TextProps, 'align'>;
