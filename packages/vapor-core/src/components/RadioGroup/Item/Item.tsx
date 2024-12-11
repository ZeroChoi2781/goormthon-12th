import React from 'react';

import { useId } from '@radix-ui/react-id';
import cn from 'classnames';

import { RadioGroupItemProvider } from './Item.context';
import styles from './Item.module.scss';
import type { RadioGroupItemProps } from './Item.types';

const Item = ({ disabled = false, children }: RadioGroupItemProps) => {
    const indicatorId = useId();

    return (
        <RadioGroupItemProvider
            value={{
                disabled,
                indicatorId,
            }}
        >
            <div
                className={cn(styles.item, {
                    [styles.item_disabled]: disabled,
                })}
            >
                {children}
            </div>
        </RadioGroupItemProvider>
    );
};

Item.displayName = 'RadioGroup.Item';
export default Item;
