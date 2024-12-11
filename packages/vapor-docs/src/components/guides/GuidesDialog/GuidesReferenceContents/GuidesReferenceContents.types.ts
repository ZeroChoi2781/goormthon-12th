import type { ReferenceType } from '../../PackageTabsAccordion/PackageTabsAccordion.types';

export type GuidesReferenceContentsProps = {
    referenceItems: {
        [key in ReferenceType]?: {
            title: string;
            url: string;
        };
    };
};
