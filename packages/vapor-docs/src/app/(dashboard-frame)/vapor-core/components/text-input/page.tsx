'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/TextInput.data';
import TextInputHistory from './(contents)/TextInput.history.mdx';
import TextInputUsage from './(contents)/TextInput.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="TextInput"
            meta={META}
            usageComp={<TextInputUsage />}
            historyComp={<TextInputHistory />}
        />
    );
};

export default Page;
