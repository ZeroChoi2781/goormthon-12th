'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Label.data';
import LabelHistory from './(contents)/Label.history.mdx';
import LabelUsage from './(contents)/Label.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Label"
            meta={META}
            usageComp={<LabelUsage />}
            historyComp={<LabelHistory />}
        />
    );
};

export default Page;
