import React from 'react';

import styles from './Wrapper.module.scss';
import type { WrapperProps } from './Wrapper.types';

const Wrapper = ({ children }: WrapperProps) => {
    return <li className={styles.wrapper}>{children}</li>;
};

export default Wrapper;
