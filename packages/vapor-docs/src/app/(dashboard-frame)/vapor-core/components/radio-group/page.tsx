'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/RadioGroup.data';
import RadioGroupHistory from './(contents)/RadioGroup.history.mdx';
import RadioGroupUsage from './(contents)/RadioGroup.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="RadioGroup"
            meta={META}
            historyComp={<RadioGroupHistory />}
            usageComp={<RadioGroupUsage />}
        />
    );
};

export default Page;
