'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Button.data';
import ButtonHistory from './(contents)/Button.history.mdx';
import ButtonUsage from './(contents)/Button.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Button"
            meta={META}
            usageComp={<ButtonUsage />}
            historyComp={<ButtonHistory />}
        />
    );
};

export default Page;
