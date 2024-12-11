import type { TypographyValue } from '../../Text/Text.types';
import type { TabsSize } from '../Tabs.types';

export const SIZE_TO_TEXT_TYPO: { [size in TabsSize]: TypographyValue } = {
    sm: 'body3',
    md: 'body2',
    lg: 'body2',
    xl: 'body1',
};
