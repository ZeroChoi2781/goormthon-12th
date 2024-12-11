import type { ElementRef } from 'react';

import type { TabsTriggerProps } from '@radix-ui/react-tabs';

import type Primitive from '../../Primitive';
import type { TextProps } from '../../Text';

export type ButtonElement = ElementRef<typeof Primitive.button>;
export type ButtonProps = TabsTriggerProps & Pick<TextProps, 'align'>;
