import { Text } from '@goorm-dev/vapor-components';

import styles from './FoundationTemplate.module.scss';

const FoundationTemplate = ({ children, title, description }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Text typography="heading1">{title}</Text>
                <Text typography="body1">{description}</Text>
            </header>
            {children}
        </div>
    );
};

export default FoundationTemplate;
