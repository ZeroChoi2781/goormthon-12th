import React from 'react';

import styles from './RulesOfUseContent.module.scss';

const RulesOfUseContent = ({ children }) => {
    return <li className={styles.content}>{children}</li>;
};

export default RulesOfUseContent;
