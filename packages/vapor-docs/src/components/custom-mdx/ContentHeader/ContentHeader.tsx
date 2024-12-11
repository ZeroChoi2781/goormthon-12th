import type { ReactNode } from 'react';

import styles from './ContentHeader.module.scss';

const ContentHeader = ({ children }: { children: ReactNode }) => {
    return <header className={styles.container}>{children} </header>;
};

export default ContentHeader;
