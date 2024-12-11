'use client';

import ContentLayout from '@vapor-docs/src/components/common/ContentLayout';

import { META } from './(contents)/Card.data';
import CardHistory from './(contents)/Card.history.mdx';
import CardUsage from './(contents)/Card.usage.mdx';

const Page = () => {
    return (
        <ContentLayout
            componentName="Card"
            meta={META}
            usageComp={<CardUsage />}
            historyComp={<CardHistory />}
        />
    );
};

export default Page;
