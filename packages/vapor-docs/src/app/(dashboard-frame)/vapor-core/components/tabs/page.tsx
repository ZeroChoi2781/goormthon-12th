'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Tabs.data';
import TabsHistory from './(contents)/Tabs.history.mdx';
import TabsUsage from './(contents)/Tabs.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Tabs"
            meta={META}
            usageComp={<TabsUsage />}
            historyComp={<TabsHistory />}
        />
    );
};

export default Page;
