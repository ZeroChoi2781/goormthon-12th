import styles from './RulesOfUseDescription.module.scss';

const RulesOfUseDescription = ({ children }) => {
    return <div className={styles.description}>{children}</div>;
};

export default RulesOfUseDescription;
