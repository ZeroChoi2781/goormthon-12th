'use client';

import { Text } from '@goorm-dev/vapor-components';
import { Badge, Card } from '@goorm-dev/vapor-core';
import Image from 'next/image';

import styles from './ComponentCard.module.scss';

const ComponentCard = ({
    imageUrl,
    alt = 'alert',
    name,
    description,
    href,
    componentType,
}: {
    imageUrl: string;
    alt: string;
    name: string;
    description: string;
    href?: string;
    componentType?: string;
}) => {
    return (
        <Card className={styles.card}>
            <a href={href}>
                <Card.Header className={styles.header}>
                    <Image
                        className={styles.image}
                        src={imageUrl}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </Card.Header>
                <Card.Body className={styles.body}>
                    <div className={styles.componentName}>
                        <Text typography="heading5">{name}</Text>
                        {componentType && (
                            <Badge color="primary" size="md" pill>
                                {componentType}
                            </Badge>
                        )}
                    </div>
                    <Text typography="body2" color="text-alternative">
                        {description}
                    </Text>
                </Card.Body>
            </a>
        </Card>
    );
};

export default ComponentCard;
