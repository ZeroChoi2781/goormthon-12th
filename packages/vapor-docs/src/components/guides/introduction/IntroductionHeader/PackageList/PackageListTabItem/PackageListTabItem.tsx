import { Text } from '@goorm-dev/vapor-components';
import { Badge } from '@goorm-dev/vapor-core';
import { usePackageTabsAccordionContext } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.context';
import type { AllPackageStepKeys } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.types';
import Image from 'next/image';

import style from './PackageListTabItem.module.scss';
import type { PackageListTabItemProps } from './PackageListTabItem.types';

const PackageListTabItem = ({ index, tabItem }: PackageListTabItemProps) => {
    const { setSelectedTabItemKey, setIsPackageDialogOpen, dialogContents } =
        usePackageTabsAccordionContext();
    const { title, imageUrl, imageAlt } = tabItem;

    const itemKey = Object.keys(dialogContents)[index] as AllPackageStepKeys;

    return (
        <button
            className={style.card}
            onClick={() => {
                setSelectedTabItemKey(itemKey);
                setIsPackageDialogOpen(true);
            }}
        >
            <div className={style.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                    className={style.image}
                />
            </div>
            <div className={style.title}>
                <Badge color="success" size="sm" pill>
                    {index + 1}
                </Badge>
                <Text typography="heading6" color="text-normal">
                    {title}
                </Text>
            </div>
        </button>
    );
};

export default PackageListTabItem;
