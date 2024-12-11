import type { GUIDES_DIALOG_CONTENTS_STEP } from '../../../PackageTabsAccordion/PackageTabsAccordion.constants';

export type PackageItemList = {
    title: string;
    imageUrl: string;
    imageAlt: string;
};

export type PackageList = keyof typeof GUIDES_DIALOG_CONTENTS_STEP;
