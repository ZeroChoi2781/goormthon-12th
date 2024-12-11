'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Alert.data';
import AlertHistory from './(contents)/Alert.history.mdx';
import AlertUsage from './(contents)/Alert.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Alert"
            meta={META}
            usageComp={<AlertUsage />}
            historyComp={<AlertHistory />}
        />
    );
};

export default Page;
