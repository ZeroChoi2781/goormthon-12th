import styles from './MdxLayout.module.scss';

const MdxLayout = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default MdxLayout;
