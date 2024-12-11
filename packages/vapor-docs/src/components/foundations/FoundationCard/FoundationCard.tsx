'use client';

import { Card, CardBody, CardHeader, Text } from '@goorm-dev/vapor-components';
import Image from 'next/image';

import styles from './FoundationCard.module.scss';
import type { FoundationCardProps } from './FoundationCard.types';

const FoundationCard = ({
    title,
    description,
    imageUrl,
    href,
}: FoundationCardProps) => {
    return (
        <Card className={styles.card}>
            <a href={href}>
                <CardHeader className={styles.header}>
                    <Image
                        src={imageUrl}
                        alt={`${title} 이미지`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </CardHeader>
                <CardBody className={styles.body}>
                    <Text typography="heading5">{title}</Text>
                    <Text typography="body2">{description}</Text>
                </CardBody>
            </a>
        </Card>
    );
};

export default FoundationCard;
