import React from 'react';

import { Text } from '@goorm-dev/vapor-components';
import {
    FigmaColorIcon,
    FileIcon,
    GithubIcon,
    NotionIcon,
    OpenInNewOutlineIcon,
} from '@goorm-dev/vapor-icons';
import { isEmpty, upperFirst } from 'lodash';
import Link from 'next/link';

import style from './GuidesReferenceContents.module.scss';
import type { GuidesReferenceContentsProps } from './GuidesReferenceContents.types';

const GuidesReferenceContents = ({
    referenceItems,
}: GuidesReferenceContentsProps) => {
    const referenceIcons = {
        notion: {
            type: 'notion',
            icon: <NotionIcon />,
        },
        figma: {
            type: 'figma',
            icon: <FigmaColorIcon />,
        },
        github: {
            type: 'github',
            icon: <GithubIcon />,
        },
    } as const;
    return (
        !isEmpty(referenceItems) && (
            <div className={style.container}>
                <div className={style.header}>
                    <FileIcon color="var(--text-hint)" />
                    <Text typography="subtitle1" color="text-hint">
                        참고 문서
                    </Text>
                </div>
                <div className={style.list}>
                    {Object.values(referenceItems).map((item, index) => {
                        const referenceType = Object.keys(referenceItems)[
                            index
                        ] as keyof typeof referenceItems;
                        const { title, url } = item;
                        return (
                            <Link
                                href={url}
                                className={style.reference}
                                key={title}
                                target="_blank"
                            >
                                <div className={style.content}>
                                    <div className={style.icon}>
                                        {referenceIcons[referenceType].icon}
                                    </div>
                                    <div className={style.referenceInfo}>
                                        <Text
                                            typography="subtitle2"
                                            color="text-normal"
                                        >
                                            {title}
                                        </Text>
                                        <Text
                                            typography="body3"
                                            color="text-alternative"
                                        >
                                            {upperFirst(referenceType)}
                                        </Text>
                                    </div>
                                </div>
                                <OpenInNewOutlineIcon
                                    color="var(--text-hint)"
                                    className={style.openInNewIcon}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        )
    );
};

export default GuidesReferenceContents;
