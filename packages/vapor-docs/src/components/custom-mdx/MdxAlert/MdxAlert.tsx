import styles from './MdxAlert.module.scss';

const MdxAlert = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default MdxAlert;
