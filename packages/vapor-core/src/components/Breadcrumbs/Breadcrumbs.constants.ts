export const BreadcrumbsSizeValue = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
} as const;

export const BreadcrumbsSlashOutlineIconDimensionValue: {
    [key in (typeof BreadcrumbsSizeValue)[keyof typeof BreadcrumbsSizeValue]]: number;
} = {
    [BreadcrumbsSizeValue.XS]: 12,
    [BreadcrumbsSizeValue.SM]: 14,
    [BreadcrumbsSizeValue.MD]: 14,
    [BreadcrumbsSizeValue.LG]: 16,
} as const;
