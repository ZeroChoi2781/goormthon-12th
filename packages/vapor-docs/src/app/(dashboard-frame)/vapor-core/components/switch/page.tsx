'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Switch.data';
import SwitchHistory from './(contents)/Switch.history.mdx';
import SwitchUsage from './(contents)/Switch.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Switch"
            meta={META}
            historyComp={<SwitchHistory />}
            usageComp={<SwitchUsage />}
        />
    );
};

export default Page;
