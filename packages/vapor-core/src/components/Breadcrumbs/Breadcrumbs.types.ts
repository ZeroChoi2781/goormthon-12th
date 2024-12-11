import type {
    BreadcrumbsSizeValue,
    BreadcrumbsSlashOutlineIconDimensionValue,
} from './Breadcrumbs.constants';

export type BreadcrumbsSize =
    (typeof BreadcrumbsSizeValue)[keyof typeof BreadcrumbsSizeValue];

export type BreadcrumbsSlashOutlineIconSize =
    (typeof BreadcrumbsSlashOutlineIconDimensionValue)[keyof typeof BreadcrumbsSlashOutlineIconDimensionValue];

export type BreadcrumbsProps = {
    size: BreadcrumbsSize;
    className?: string;
    children: React.ReactNode;
};

export type VariantsType = { [key in BreadcrumbsSize]: string };
