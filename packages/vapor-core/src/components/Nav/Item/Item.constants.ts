import type { TypographyValue } from '../../Text/Text.types';
import type { NavSize } from '../Nav.types';

export const SIZE_TO_TYPOGRAPHY: { [size in NavSize]: TypographyValue } = {
    sm: 'subtitle2',
    md: 'subtitle1',
    lg: 'subtitle1',
    xl: 'heading6',
};
