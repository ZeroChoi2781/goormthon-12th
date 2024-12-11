/* eslint-disable @typescript-eslint/no-duplicate-type-constituents */
import type {
    COMPONENTS_PACKAGE_ITEM_LIST,
    CORE_PACKAGE_ITEM_LIST,
    FOUNDATION_PACKAGE_ITEM_LIST,
    GUIDES_DIALOG_CONTENTS_STEP,
    PACKAGES_LIST,
} from './PackageTabsAccordion.constants';

export type AllPackageStepKeys =
    | keyof (typeof GUIDES_DIALOG_CONTENTS_STEP)['core']
    | keyof (typeof GUIDES_DIALOG_CONTENTS_STEP)['components']
    | keyof (typeof GUIDES_DIALOG_CONTENTS_STEP)['foundation']
    | '';

export type GuidesDialogContentsFooter = {
    prev: AllPackageStepKeys | null;
    next: AllPackageStepKeys | null;
};

export type ReferenceType = 'notion' | 'figma' | 'github';

export type GuidesDialogContentsStep = {
    title: string;
    contents: React.ReactNode;
    footer: GuidesDialogContentsFooter;
    imageUrl: string;
    imageAlt: string;
    reference: {
        [key in ReferenceType]?: {
            title: string;
            url: string;
        };
    };
};

export type CoreGuidesDialogContentsStep = Record<
    keyof typeof CORE_PACKAGE_ITEM_LIST,
    GuidesDialogContentsStep
>;

export type ComponentsGuidesDialogContentsStep = Record<
    keyof typeof COMPONENTS_PACKAGE_ITEM_LIST,
    GuidesDialogContentsStep
>;

export type FoundationGuidesDialogContentsStep = Record<
    keyof typeof FOUNDATION_PACKAGE_ITEM_LIST,
    GuidesDialogContentsStep
>;

export type PackageKey = keyof typeof PACKAGES_LIST;

export type GuidesDialogContent =
    | ComponentsGuidesDialogContentsStep
    | CoreGuidesDialogContentsStep
    | FoundationGuidesDialogContentsStep;

export type GuidesDialogContents = {
    [K in PackageKey]: K extends 'core'
        ? CoreGuidesDialogContentsStep
        : K extends 'components'
          ? ComponentsGuidesDialogContentsStep
          : K extends 'foundation'
            ? FoundationGuidesDialogContentsStep
            : never;
};
export type PackageTabsAccordionContextState = {
    selectedLibrary: (typeof PACKAGES_LIST)[keyof typeof PACKAGES_LIST];
    setSelectedLibrary: (
        library: (typeof PACKAGES_LIST)[keyof typeof PACKAGES_LIST],
    ) => void;
    selectedTabItemKey: AllPackageStepKeys;
    setSelectedTabItemKey: (tabItem: AllPackageStepKeys) => void;
    dialogContents: GuidesDialogContent;
    isPakcageDialogOpen: boolean;
    setIsPackageDialogOpen: (isOpen: boolean) => void;
};

export type PackageTabsAccordionContextProps = {
    children: React.ReactNode;
};
