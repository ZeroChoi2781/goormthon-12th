import type {
    CheckedState,
    CheckboxProps as RadixCheckboxProps,
} from '@radix-ui/react-checkbox';
import type { CommonSizeToken } from '@vapor-core/src/types/common';

export type CheckboxSize = Extract<CommonSizeToken, 'md' | 'lg'>;

export type CheckboxProps = RadixCheckboxProps & {
    invalid?: boolean;
    size?: CheckboxSize;
    setChecked?: React.Dispatch<React.SetStateAction<CheckedState | undefined>>;
    checked?: CheckedState;
};

export type CheckboxContextState = Required<
    Pick<CheckboxProps, 'invalid' | 'size' | 'disabled' | 'id'>
> & {
    checked?: CheckedState;
};

export type CheckboxContextProps = {
    children: React.ReactNode;
    value: CheckboxContextState;
    rootClassName?: string;
};

export type CheckboxIndicatorIconProps = {
    width: string;
    height: string;
};
