import React from 'react';

import { TabsList } from '@radix-ui/react-tabs';
import cn from 'classnames';

import { useTabsContext } from '../Tabs.context';
import styles from './List.module.scss';
import type { ListProps } from './List.types';

const List = ({
    loop = true,
    hasBorder = true,
    children,
    className,
    ...props
}: ListProps) => {
    const { position } = useTabsContext();

    return (
        <TabsList
            className={cn(
                styles.list,
                styles[`list_${position}`],
                {
                    [styles.list_hasBorder]: hasBorder,
                },
                className,
            )}
            loop={loop}
            {...props}
        >
            {children}
        </TabsList>
    );
};

export default List;
