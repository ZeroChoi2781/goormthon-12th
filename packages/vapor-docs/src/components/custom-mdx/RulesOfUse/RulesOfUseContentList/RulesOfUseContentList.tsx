import styles from './RulesOfUseContentList.module.scss';

const RulesOfUseContentList = ({ children }) => {
    return <ul className={styles.contentList}>{children}</ul>;
};

export default RulesOfUseContentList;
