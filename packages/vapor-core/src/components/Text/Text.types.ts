import type {
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
    ElementType,
    HTMLAttributes,
    ReactNode,
    Ref,
} from 'react';

import type { TEXT_COLORS, TYPOGRAPHY } from './Text.constants';

export type TypographyValue = (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY];
type ColorValue = (typeof TEXT_COLORS)[keyof typeof TEXT_COLORS];
type Align = 'left' | 'center' | 'right';

export type TextRef<E extends ElementType = 'span'> =
    ComponentPropsWithRef<E>['ref'];
export type TextElement<E extends ElementType = 'span'> = Ref<TextRef<E>>;

export type TextProps<E extends ElementType = 'span'> = {
    as?: E;
    asChild?: boolean;
    typography?: TypographyValue;
    color?: ColorValue;
    align?: Align;

    // ElementType에 제네릭 타입 사용으로 인해 타입 추론이 불가하여 명시적으로 타입 선언
    className?: HTMLAttributes<HTMLElement>['className'];
    children?: HTMLAttributes<HTMLElement>['children'];
} & ComponentPropsWithoutRef<E>;

export type TextComponent = <E extends ElementType = 'span'>(
    props: TextProps<E> & {
        ref?: TextRef<E>;
    },
) => ReactNode | null;
