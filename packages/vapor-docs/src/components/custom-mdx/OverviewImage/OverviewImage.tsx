import Image from 'next/image';

import styles from './OverviewImage.module.scss';

const OverviewImage = ({
    src = '',
    alt = '',
}: {
    src?: string;
    alt?: string;
}) => {
    return (
        <figure className={styles.imageContainer}>
            <Image
                src={src}
                alt={alt}
                className={styles.image}
                width={1}
                height={1}
                layout="responsive"
            />
        </figure>
    );
};

export default OverviewImage;
