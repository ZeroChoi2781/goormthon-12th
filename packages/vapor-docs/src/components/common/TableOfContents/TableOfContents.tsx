import { Text } from '@goorm-dev/vapor-components';
import { track } from '@vercel/analytics';
import cn from 'classnames';
import { toLower } from 'lodash';
import Link from 'next/link';

import styles from './TableOfContents.module.scss';
import type { TableOfContentsProps } from './TableOfContents.types';

const TOC = ({ mdxHeading }: TableOfContentsProps) => {
    return (
        <aside
            className={cn(styles.container, {
                [styles['container-hidden']]: !mdxHeading.length,
            })}
        >
            <header className={styles.container_header}>
                <Text typography="subtitle1" fontWeight="bold">
                    On this page
                </Text>
            </header>
            <ul className={styles.container_list}>
                {mdxHeading.map(({ title, tag }) => (
                    <li
                        key={title}
                        className={cn(
                            styles.container_listItem,
                            styles[`container_listItem-${toLower(tag)}`],
                        )}
                    >
                        <Link
                            href={`#${toLower(title).split(' ').join('-')}`}
                            onClick={() => {
                                track('TableOfContents Click Events', {
                                    title,
                                });
                            }}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
export default TOC;
