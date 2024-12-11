import React from 'react';

import { AccordionContent } from '@radix-ui/react-accordion';
import GuidesDialog from '@vapor-docs/src/components/guides/GuidesDialog';
import { usePackageTabsAccordionContext } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.context';

import style from './PackageListContent.module.scss';
import PackageListContentTabs from './PackageListContentTabs/PackageListContentTabs';

const PackageListContent = () => {
    const { isPakcageDialogOpen } = usePackageTabsAccordionContext();
    return (
        <AccordionContent className={style.content}>
            <PackageListContentTabs />
            {isPakcageDialogOpen && <GuidesDialog />}
        </AccordionContent>
    );
};

export default PackageListContent;
