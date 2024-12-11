import type {
    AriaAttributes,
    ComponentPropsWithoutRef,
    ElementRef,
} from 'react';

import type { IconProps } from '@goorm-dev/vapor-icons';

import type Primitive from '../Primitive';
import type {
    BUTTON_SHAPE,
    COLOR_OPTIONS,
    SIZE_OPTIONS,
} from './IconButton.constants';

type ButtonColor = (typeof COLOR_OPTIONS)[number];
type ButtonSize = (typeof SIZE_OPTIONS)[number];
type ButtonShape = (typeof BUTTON_SHAPE)[number];

export type IconButtonProps = ComponentPropsWithoutRef<
    typeof Primitive.button
> & {
    icon: (props: IconProps) => React.JSX.Element;
    className?: string;
    size?: ButtonSize;
    color?: ButtonColor;
    rounded?: boolean;
    shape?: ButtonShape;
    /**
     * IconButton에서 aria-label은 IconButton의 의미를 설명하는 텍스트로, 스크린 리더 사용자에게 버튼의 목적을 알려줍니다.
     */
    'aria-label': AriaAttributes['aria-label'];
    iconClassName?: string;
};

export type IconButtonRef = ElementRef<typeof Primitive.button>;
