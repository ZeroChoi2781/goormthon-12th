'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/IconButton.data';
import IconButtonHistory from './(contents)/IconButton.history.mdx';
import IconButtonUsage from './(contents)/IconButton.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="IconButton"
            meta={META}
            usageComp={<IconButtonUsage />}
            historyComp={<IconButtonHistory />}
        />
    );
};

export default Page;
