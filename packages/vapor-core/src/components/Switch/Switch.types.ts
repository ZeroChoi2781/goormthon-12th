import type { ReactNode } from 'react';

import type { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export type SwitchSize = 'sm' | 'md' | 'lg';

type RadixSwitchEssentialProps = Pick<
    RadixSwitchProps,
    'disabled' | 'checked' | 'defaultChecked' | 'onCheckedChange' | 'className'
>;

export type SwitchProps = RadixSwitchEssentialProps & {
    size?: SwitchSize;
    children: ReactNode;
};

export type SwitchContextType = Required<
    Pick<SwitchProps, 'disabled' | 'size'> & {
        indicatorId: string;
    }
> &
    Pick<SwitchProps, 'checked' | 'defaultChecked' | 'onCheckedChange'>;

export type SwitchProviderProps = {
    children: ReactNode;
    value: SwitchContextType;
};
