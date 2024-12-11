'use client';

import { Text } from '@goorm-dev/vapor-components';

import styles from './FoundationContentsTemplate.module.scss';
import type { FoundationContentsTemplateProps } from './FoundationContentsTemplate.types';

function FoundationContentsTemplate({
    header,
    description,
    children,
}: FoundationContentsTemplateProps) {
    return (
        <div>
            <div className="d-flex flex-column">
                <Text typography="heading1" className="mb-2">
                    {header}
                </Text>
                <Text typography="body1">{description}</Text>
            </div>

            <hr className={styles.hr} />

            {children}
        </div>
    );
}

export default FoundationContentsTemplate;
