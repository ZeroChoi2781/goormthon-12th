import type { BadgeColor, BadgeSize } from './Badge.types';

export const SIZE_OPTIONS: BadgeSize[] = ['sm', 'md', 'lg'];
export const COLOR_OPTIONS: BadgeColor[] = [
    'primary',
    'success',
    'warning',
    'danger',
    'hint',
    'contrast',
];

export const TYPOGRAPHY = {
    sm: 'subtitle2',
    md: 'subtitle2',
    lg: 'subtitle1',
} as const;
