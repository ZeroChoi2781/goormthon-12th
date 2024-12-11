'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Dropdown.data';
import DropdownHistory from './(contents)/Dropdown.history.mdx';
import DropdownUsage from './(contents)/Dropdown.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Dropdown"
            meta={META}
            usageComp={<DropdownUsage />}
            historyComp={<DropdownHistory />}
        />
    );
};

export default Page;
