import type { GuidesDialogContentsStep } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.types';

export type PackageListTabItem = Pick<
    GuidesDialogContentsStep,
    'title' | 'imageUrl' | 'imageAlt'
>;

export type PackageListTabItemProps = {
    index: number;
    tabItem: PackageListTabItem;
};
