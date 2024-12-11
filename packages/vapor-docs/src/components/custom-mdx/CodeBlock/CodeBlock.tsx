import styles from './CodeBlock.module.scss';

const CodeBlock = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default CodeBlock;
