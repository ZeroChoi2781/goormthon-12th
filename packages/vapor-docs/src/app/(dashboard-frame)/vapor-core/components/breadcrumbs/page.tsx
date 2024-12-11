'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Breadcrumbs.data';
import BreadcrumbsHistory from './(contents)/Breadcrumbs.history.mdx';
import BreadcrumbsUsage from './(contents)/Breadcrumbs.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Breadcrumbs"
            meta={META}
            usageComp={<BreadcrumbsUsage />}
            historyComp={<BreadcrumbsHistory />}
        />
    );
};

export default Page;
