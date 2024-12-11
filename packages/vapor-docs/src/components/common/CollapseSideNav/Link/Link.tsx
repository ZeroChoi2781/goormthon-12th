'use client';

import type { MouseEvent } from 'react';
import React, { Children, cloneElement, isValidElement, useState } from 'react';

import { IconButton, Nav } from '@goorm-dev/vapor-core';
import {
    ChevronRightOutlineIcon,
    FileOutlineIcon,
} from '@goorm-dev/vapor-icons';
import useHover from '@vapor-docs/src/hooks/useHover';
import cn from 'classnames';
import NextLink from 'next/link';

import Collapse from '../../Collapse';
import styles from './Link.module.scss';
import type { LinkProps } from './Link.types';

const Leaf = ({
    active,
    href,
    title,
    nestingLevel,
}: {
    active?: boolean;
    href: string;
    title: string;
    nestingLevel: number;
}) => {
    const xLeftPadding = `calc(var(--space-100) + var(--space-150) * ${nestingLevel})`;

    return (
        <Nav.Item
            className={styles.item}
            style={{ paddingLeft: `${xLeftPadding}` }}
        >
            <div className={styles.plainIconWrapper}>
                <FileOutlineIcon />
            </div>
            <Nav.Link asChild active={active} className={cn(styles.title)}>
                <NextLink href={href}>{title}</NextLink>
            </Nav.Link>
        </Nav.Item>
    );
};

const Link = ({
    children,
    title,
    href,
    active,
    icon,
    nestingLevel = 0,
}: LinkProps) => {
    const [open, setOpen] = useState(false);
    const isNested = !!children;
    const Icon = icon || FileOutlineIcon;

    const [isHovered, hoverRef] = useHover<HTMLElement>();

    const handleTriggerClick = (event: MouseEvent) => {
        event.preventDefault(); // a 태그의 링크 기본 이벤트 방지

        setOpen((prevOpen) => !prevOpen);
    };

    const xLeftPadding = `calc(var(--space-100) + var(--space-150) * ${nestingLevel})`;

    return (
        <>
            {isNested ? (
                <Collapse open={open} className={styles.container} asChild>
                    <Nav.Item className={styles.categoryWrapper}>
                        <div
                            ref={hoverRef}
                            className={styles.category}
                            style={{ paddingLeft: xLeftPadding }}
                        >
                            <Collapse.Trigger asChild>
                                <IconButton
                                    icon={
                                        isHovered
                                            ? ChevronRightOutlineIcon
                                            : Icon
                                    }
                                    size="sm"
                                    aria-label="open category"
                                    shape="invisible"
                                    color="secondary"
                                    className={cn(styles.iconButton, {
                                        [styles.iconButton_active]: active,
                                        [styles.iconButton_open]:
                                            isHovered && open,
                                    })}
                                    onClick={handleTriggerClick}
                                />
                            </Collapse.Trigger>

                            <Nav.Link
                                active={active}
                                href={href}
                                className={styles.title}
                            >
                                {title}
                            </Nav.Link>
                        </div>

                        <Collapse.Content asChild>
                            <Nav.List>
                                {Children.map(children, (child) =>
                                    isValidElement(child)
                                        ? cloneElement(
                                              child as React.ReactElement<LinkProps>,
                                              {
                                                  nestingLevel:
                                                      (nestingLevel || 0) + 1,
                                              },
                                          )
                                        : child,
                                )}
                            </Nav.List>
                        </Collapse.Content>
                    </Nav.Item>
                </Collapse>
            ) : (
                <Leaf
                    nestingLevel={nestingLevel}
                    active={active}
                    href={href}
                    title={title}
                />
            )}
        </>
    );
};

export default Link;
