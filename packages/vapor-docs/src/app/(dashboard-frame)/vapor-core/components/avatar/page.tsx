'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Avatar.data';
import AvatarHistory from './(contents)/Avatar.history.mdx';
import AvatarUsage from './(contents)/Avatar.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Avatar"
            meta={META}
            usageComp={<AvatarUsage />}
            historyComp={<AvatarHistory />}
        />
    );
};

export default Page;
