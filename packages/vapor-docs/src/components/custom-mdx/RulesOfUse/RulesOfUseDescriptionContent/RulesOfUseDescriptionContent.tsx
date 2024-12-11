'use client';

import { Text } from '@goorm-dev/vapor-components';

import styles from './RulesOfUseDescriptionContent.module.scss';

const RulesOfUseDescriptionContent = ({ children }) => {
    return (
        <Text as="p" typography="body2" className={styles.text}>
            {children}
        </Text>
    );
};

export default RulesOfUseDescriptionContent;
