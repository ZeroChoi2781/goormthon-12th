import type { LabelProps as RadixLabelProps } from '@radix-ui/react-label';

import type { TextProps } from '../Text/Text.types';

export type LabelProps = RadixLabelProps &
    Omit<TextProps, 'as'> & {
        visuallyHidden?: boolean;
    };
