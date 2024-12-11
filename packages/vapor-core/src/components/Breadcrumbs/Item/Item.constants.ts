import { BreadcrumbsSizeValue } from '../Breadcrumbs.constants';
import type { VariantsType } from '../Breadcrumbs.types';

export const VARIANTS_FONT_SIZE: VariantsType = {
    [BreadcrumbsSizeValue.XS]: 'var(--font-size-025)',
    [BreadcrumbsSizeValue.SM]: 'var(--font-size-050)',
    [BreadcrumbsSizeValue.MD]: 'var(--font-size-075)',
    [BreadcrumbsSizeValue.LG]: 'var(--font-size-100)',
};

export const VARIANTS_LETTER_SPACING: VariantsType = {
    [BreadcrumbsSizeValue.XS]: 'var(--letter-spacing-100)',
    [BreadcrumbsSizeValue.SM]: 'var(--letter-spacing-100)',
    [BreadcrumbsSizeValue.MD]: 'var(--letter-spacing-200)',
    [BreadcrumbsSizeValue.LG]: 'var(--letter-spacing-200)',
};
