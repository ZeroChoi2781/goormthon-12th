import type { ReactNode } from 'react';

export type RadioGroupItemSize = 'md' | 'lg';
export type RadioGroupItemProps = {
    disabled?: boolean;
    children: ReactNode;
};

export type RadioGroupItemState = {
    disabled: RadioGroupItemProps['disabled'];
    indicatorId: string;
};

export type RadioGroupItemContextProps = {
    children: ReactNode;
    value: RadioGroupItemState;
};
