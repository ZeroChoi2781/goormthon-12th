'use client';

import { Text } from '@goorm-dev/vapor-components';

const ContentHeaderDescription = ({ description }: { description: string }) => {
    return (
        <Text as="p" typography="body1">
            {description}
        </Text>
    );
};

export default ContentHeaderDescription;
