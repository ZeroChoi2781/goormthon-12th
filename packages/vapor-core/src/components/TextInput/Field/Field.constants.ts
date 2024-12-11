import type { TextInputSize } from '../TextInput.types';

export const CSS_SIZE: {
    [size in TextInputSize]: {
        height: string;
        padding: string;
        borderRadius: string;
        fontSize: string;
    };
} = {
    sm: {
        height: 'var(--dimension-300)',
        padding: 'var(--space-000) var(--space-100)',
        borderRadius: 'var(--border-radius-300)',
        fontSize: 'var(--font-size-025)',
    },
    md: {
        height: 'var(--dimension-400)',
        padding: 'var(--space-000) var(--space-150)',
        borderRadius: 'var(--border-radius-300)',
        fontSize: 'var(--font-size-075)',
    },
    lg: {
        height: 'var(--dimension-500)',
        padding: 'var(--space-000) var(--space-200)',
        borderRadius: 'var(--border-radius-300)',
        fontSize: 'var(--font-size-075)',
    },
    xl: {
        height: 'var(--dimension-600)',
        padding: 'var(--space-000) var(--space-300)',
        borderRadius: 'var(--border-radius-300)',
        fontSize: 'var(--font-size-100)',
    },
};
