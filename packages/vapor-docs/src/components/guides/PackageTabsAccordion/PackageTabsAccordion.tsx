'use client';

import PackageList from '../introduction/IntroductionHeader/PackageList';
import { PackageTabsAccordionProvider } from './PackageTabsAccordion.context';

const PackageTabsAccordion = () => {
    return (
        <PackageTabsAccordionProvider>
            <PackageList />
        </PackageTabsAccordionProvider>
    );
};

export default PackageTabsAccordion;
