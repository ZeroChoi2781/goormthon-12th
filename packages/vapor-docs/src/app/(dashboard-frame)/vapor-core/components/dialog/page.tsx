'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Dialog.data';
import DialogHistory from './(contents)/Dialog.history.mdx';
import DialogUsage from './(contents)/Dialog.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Dialog"
            meta={META}
            usageComp={<DialogUsage />}
            historyComp={<DialogHistory />}
        />
    );
};

export default Page;
