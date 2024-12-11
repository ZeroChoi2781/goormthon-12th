import type { ComponentPropsWithoutRef, ElementRef, ReactElement } from 'react';

import type Primitive from '../Primitive';
import type {
    COLOR_OPTIONS,
    PHRASING_CONTENT,
    SHAPE_OPTIONS,
    SIZE_OPTIONS,
} from './Button.constants';

type ButtonColor = (typeof COLOR_OPTIONS)[number];
type ButtonSize = (typeof SIZE_OPTIONS)[number];
type ButtonShape = (typeof SHAPE_OPTIONS)[number];
type PhrasingContentTag = (typeof PHRASING_CONTENT)[number];
type PhrasingContent = string | number | ReactElement<PhrasingContentTag>;

export type ButtonProps = {
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    shape?: ButtonShape;
    stretch?: boolean;
    children?: PhrasingContent | PhrasingContent[];
} & ComponentPropsWithoutRef<typeof Primitive.button>;

export type ButtonElement = ElementRef<typeof Primitive.button>;
