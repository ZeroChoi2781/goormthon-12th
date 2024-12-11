'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Nav.data';
import NavHistory from './(contents)/Nav.history.mdx';
import NavUsage from './(contents)/Nav.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Nav"
            meta={META}
            usageComp={<NavUsage />}
            historyComp={<NavHistory />}
        />
    );
};

export default Page;
