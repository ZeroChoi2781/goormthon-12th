'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Text.data';
import TextHistory from './(contents)/Text.history.mdx';
import TextUsage from './(contents)/Text.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Text"
            meta={META}
            usageComp={<TextUsage />}
            historyComp={<TextHistory />}
        />
    );
};

export default Page;
