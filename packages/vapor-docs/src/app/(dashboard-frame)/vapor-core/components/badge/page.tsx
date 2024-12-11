'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Badge.data';
import BadgeHistory from './(contents)/Badge.history.mdx';
import BadgeUsage from './(contents)/Badge.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Badge"
            meta={META}
            usageComp={<BadgeUsage />}
            historyComp={<BadgeHistory />}
        />
    );
};

export default Page;
