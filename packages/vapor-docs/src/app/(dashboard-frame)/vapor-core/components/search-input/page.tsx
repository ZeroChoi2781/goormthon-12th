'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/SearchInput.data';
import SearchInputHistory from './(contents)/SearchInput.history.mdx';
import SearchInputUsage from './(contents)/SearchInput.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="SearchInput"
            meta={META}
            usageComp={<SearchInputUsage />}
            historyComp={<SearchInputHistory />}
        />
    );
};

export default Page;
