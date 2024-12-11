import React from 'react';

import { SlashOutlineIcon } from '@goorm-dev/vapor-icons';

import BreadcrumbsBase from './Base';
import { BreadcrumbsSlashOutlineIconDimensionValue } from './Breadcrumbs.constants';
import { BreadcrumbsProvider } from './Breadcrumbs.context';
import styles from './Breadcrumbs.module.scss';
import type { BreadcrumbsProps } from './Breadcrumbs.types';
import BreadcrumbsItem from './Item';
import BreadcrumbsItemWrapper from './Wrapper';

const Breadcrumbs = ({
    className,
    children,
    size = 'md',
}: BreadcrumbsProps) => {
    const wrappedChildren = React.Children.map(children, (child, index) => {
        const isLastChild = index === React.Children.count(children) - 1;
        return (
            <>
                <BreadcrumbsItemWrapper>
                    {child}
                    {!isLastChild && (
                        <SlashOutlineIcon
                            aria-hidden="true"
                            height={
                                BreadcrumbsSlashOutlineIconDimensionValue[size]
                            }
                            width={
                                BreadcrumbsSlashOutlineIconDimensionValue[size]
                            }
                            color="var(--text-hint)"
                        />
                    )}
                </BreadcrumbsItemWrapper>
            </>
        );
    });

    return (
        <BreadcrumbsProvider
            value={{
                size,
            }}
        >
            <BreadcrumbsBase className={className}>
                <ol className={styles.container}>{wrappedChildren}</ol>
            </BreadcrumbsBase>
        </BreadcrumbsProvider>
    );
};

Breadcrumbs.Item = BreadcrumbsItem;

export default Breadcrumbs;
