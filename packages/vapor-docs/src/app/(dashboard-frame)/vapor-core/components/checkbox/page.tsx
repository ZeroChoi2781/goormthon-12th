'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Checkbox.data';
import CheckboxHistory from './(contents)/Checkbox.history.mdx';
import CheckboxUsage from './(contents)/Checkbox.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Checkbox"
            meta={META}
            usageComp={<CheckboxUsage />}
            historyComp={<CheckboxHistory />}
        />
    );
};

export default Page;
