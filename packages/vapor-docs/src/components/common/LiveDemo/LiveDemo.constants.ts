import { SEMANTIC_COLORS as COLORS } from '@vapor-components';

import map from '_constants/map';

import type { Foundations } from './LiveDemo.types';

export const KNOB_TYPE = {
    COLOR_TOKENS: 'color_tokens',
    SIZES: 'sizes',
    BOOLEAN: 'boolean',
    ICON: 'icon',
    FUNCTION: 'function',
};

export const colors = Object.values(COLORS);
export const booleans = [true, false] as boolean[];
export const sizes = Object.values(map.size);

export const FOUNDATION = {
    COMMON_LIGHT: 'CommonLight',
    COMMON_DARK: 'CommonDark',
    KIDKIT: 'Kidkit',
} as const;

export const FOUNDATION_MAP: { [key in Foundations]: string } = {
    [FOUNDATION.COMMON_LIGHT]: '/styles/foundations/vapor-foundation.css',
    [FOUNDATION.COMMON_DARK]: '/styles/foundations/vapor-foundation.dark.css',
    [FOUNDATION.KIDKIT]: '/styles/foundations/vapor-foundation-kid.css',
};

export const FOUNDATIONS = Object.keys(FOUNDATION_MAP) as Foundations[];
