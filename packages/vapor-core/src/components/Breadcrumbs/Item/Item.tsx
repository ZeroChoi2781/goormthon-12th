import React from 'react';

import useStyles from '@vapor-core/src/hooks/useStyles';
import cn from 'classnames';

import { useBreadcrumbsContext } from '../Breadcrumbs.context';
import { VARIANTS_FONT_SIZE, VARIANTS_LETTER_SPACING } from './Item.constants';
import styles from './Item.module.scss';
import type { ItemProps } from './Item.types';

const Item = ({ children, href, active, as: Component = 'a' }: ItemProps) => {
    const { size } = useBreadcrumbsContext();

    const classNames = useStyles('Item', {
        items: {
            fontSize: VARIANTS_FONT_SIZE[size],
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: VARIANTS_LETTER_SPACING[size],
        },
    });
    return active ? (
        <Component
            aria-current="page"
            className={cn(styles.item, styles.active, classNames.items)}
            href={href}
        >
            {children}
        </Component>
    ) : (
        <Component className={cn(styles.item, classNames.items)} href={href}>
            {children}
        </Component>
    );
};

export default Item;
