import {
    SEMANTIC_COLORS,
    SEMANTIC_TEXT_COLORS,
} from '@goorm-dev/vapor-components';

import type {
    ColorToken,
    PrimitiveColor,
    SemanticColorType,
} from '../types/tokens';

/**
 * TODO: vapor foundation 과 연동하기
 */

const transparent = [8, 16, 24, 32];
const status = ['hover', 'active'];

export const COLOR_PRIMITIVE: ColorToken<PrimitiveColor> = [
    {
        title: 'gray',
        colorShade: [
            'gray-000',
            'gray-050',
            'gray-100',
            'gray-200',
            'gray-300',
            'gray-400',
            'gray-500',
            'gray-600',
            'gray-700',
            'gray-800',
            'gray-900',
            'gray-950',
        ],
        transparent: [
            'gray-000-transparent-8',
            'gray-000-transparent-16',
            'gray-000-transparent-24',
            'gray-000-transparent-32',
            'gray-300-transparent-8',
            'gray-300-transparent-16',
            'gray-300-transparent-24',
            'gray-300-transparent-32',
            'gray-400-transparent-8',
            'gray-400-transparent-16',
            'gray-400-transparent-24',
            'gray-400-transparent-32',
            'gray-600-transparent-8',
            'gray-600-transparent-16',
            'gray-600-transparent-24',
            'gray-600-transparent-32',
            'gray-800-transparent-8',
            'gray-800-transparent-16',
            'gray-800-transparent-24',
            'gray-800-transparent-32',
            'gray-900-transparent-8',
            'gray-900-transparent-16',
            'gray-900-transparent-24',
            'gray-900-transparent-32',
        ],
    },
    {
        title: 'red',
        colorShade: [
            'red-050',
            'red-100',
            'red-200',
            'red-300',
            'red-400',
            'red-500',
            'red-600',
            'red-700',
            'red-800',
            'red-900',
        ],
        transparent: [
            'red-500-transparent-8',
            'red-500-transparent-16',
            'red-500-transparent-24',
            'red-500-transparent-32',
        ],
    },
    {
        title: 'pink',
        colorShade: [
            'pink-050',
            'pink-100',
            'pink-200',
            'pink-300',
            'pink-400',
            'pink-500',
            'pink-600',
            'pink-700',
            'pink-800',
            'pink-900',
        ],
    },
    {
        title: 'grape',
        colorShade: [
            'grape-050',
            'grape-100',
            'grape-200',
            'grape-300',
            'grape-400',
            'grape-500',
            'grape-600',
            'grape-700',
            'grape-800',
            'grape-900',
        ],
    },
    {
        title: 'violet',
        colorShade: [
            'violet-050',
            'violet-100',
            'violet-200',
            'violet-300',
            'violet-400',
            'violet-500',
            'violet-600',
            'violet-700',
            'violet-800',
            'violet-900',
        ],
    },
    {
        title: 'blue',
        colorShade: [
            'blue-050',
            'blue-100',
            'blue-200',
            'blue-300',
            'blue-400',
            'blue-500',
            'blue-600',
            'blue-700',
            'blue-800',
            'blue-900',
        ],
        transparent: [
            'blue-500-transparent-8',
            'blue-500-transparent-16',
            'blue-500-transparent-24',
            'blue-500-transparent-32',
            'blue-700-transparent-8',
            'blue-700-transparent-16',
            'blue-700-transparent-24',
            'blue-700-transparent-32',
        ],
    },
    {
        title: 'cyan',
        colorShade: [
            'cyan-050',
            'cyan-100',
            'cyan-200',
            'cyan-300',
            'cyan-400',
            'cyan-500',
            'cyan-600',
            'cyan-700',
            'cyan-800',
            'cyan-900',
        ],
    },
    {
        title: 'green',
        colorShade: [
            'green-050',
            'green-100',
            'green-200',
            'green-300',
            'green-400',
            'green-500',
            'green-600',
            'green-700',
            'green-800',
            'green-900',
        ],
        transparent: [
            'green-500-transparent-8',
            'green-500-transparent-16',
            'green-500-transparent-24',
            'green-500-transparent-32',
        ],
    },
    {
        title: 'lime',
        colorShade: [
            'lime-050',
            'lime-100',
            'lime-200',
            'lime-300',
            'lime-400',
            'lime-500',
            'lime-600',
            'lime-700',
            'lime-800',
            'lime-900',
        ],
    },
    {
        title: 'yellow',
        colorShade: [
            'yellow-050',
            'yellow-100',
            'yellow-200',
            'yellow-300',
            'yellow-400',
            'yellow-500',
            'yellow-600',
            'yellow-700',
            'yellow-800',
            'yellow-900',
        ],
    },
    {
        title: 'orange',
        colorShade: [
            'orange-050',
            'orange-100',
            'orange-200',
            'orange-300',
            'orange-400',
            'orange-500',
            'orange-600',
            'orange-700',
            'orange-800',
            'orange-900',
        ],
        transparent: [
            'orange-500-transparent-8',
            'orange-500-transparent-16',
            'orange-500-transparent-24',
            'orange-500-transparent-32',
        ],
    },
];

export const COLOR_SEMANTIC: ColorToken<SemanticColorType> = [
    {
        title: 'theme',
        colorShade: Object.values(SEMANTIC_COLORS),
        transparent: Object.values(SEMANTIC_COLORS).flatMap((themeColor) =>
            transparent.map((value) => `${themeColor}-transparent-${value}`),
        ),
    },
    {
        title: 'status',
        colorShade: Object.values(SEMANTIC_COLORS).flatMap((themeColor) =>
            status.map((value) => `${themeColor}-${value}`),
        ),
    },
    {
        title: 'text',
        colorShade: [
            ...Object.values(SEMANTIC_TEXT_COLORS).flatMap((themeColor) => [
                themeColor,
            ]),
        ],
    },
    {
        title: 'background',
        colorShade: [
            'background-normal',
            'background-alternative-01',
            'background-alternative-02',
        ],
    },
    {
        title: 'border',
        colorShade: ['border-color', 'border-hover'],
    },
    {
        title: 'gradient',
        colorShade: ['linear-gradient'],
    },
];
