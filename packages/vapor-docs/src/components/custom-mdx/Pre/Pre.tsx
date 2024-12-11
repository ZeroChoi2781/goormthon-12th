import CopyButton from '../../common/CopyButton';
import styles from './Pre.module.scss';
import type { PreProps } from './Pre.types';

const Pre = ({ children, raw = '', ...props }: PreProps) => {
    return (
        <div className={styles.container}>
            <pre className={styles.wrapper} {...props}>
                {children}
            </pre>
            <CopyButton text={raw} className={styles.copyButton} />
        </div>
    );
};

export default Pre;
