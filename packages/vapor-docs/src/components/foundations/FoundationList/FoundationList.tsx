import FoundationCard from '../FoundationCard';
import styles from './FoundationList.module.scss';
import type { FoundationListProps } from './FoundationList.types';

const FoundationList = ({ elements }: FoundationListProps) => {
    return (
        <div className={styles.container}>
            {elements.map(({ title, description, imageUrl, href }) => (
                <FoundationCard
                    key={title}
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    href={href}
                />
            ))}
        </div>
    );
};

export default FoundationList;
