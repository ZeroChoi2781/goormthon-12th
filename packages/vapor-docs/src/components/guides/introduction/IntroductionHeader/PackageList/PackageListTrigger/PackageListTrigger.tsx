import React from 'react';

import { Badge, Text } from '@goorm-dev/vapor-components';
import { BookIcon, ChevronDownOutlineIcon } from '@goorm-dev/vapor-icons';
import { AccordionTrigger } from '@radix-ui/react-accordion';

import style from './PackageListTrigger.module.scss';

const PackageListTrigger = () => {
    return (
        <AccordionTrigger className={style.trigger}>
            <div className={style.trigger_left}>
                <div>
                    <BookIcon color="var(--text-hint)" size="16" />
                    <Text typography="subtitle1" color="text-hint">
                        주요 패키지에 대해 알아보아요.
                    </Text>
                </div>
                <Badge color="success" pill size="sm">
                    Onboarding
                </Badge>
            </div>
            <div className={style.trigger_icon} aria-hidden>
                <ChevronDownOutlineIcon
                    className={style.trigger_icon}
                    color="var(--text-secondary)"
                    size="16"
                />
            </div>
        </AccordionTrigger>
    );
};

export default PackageListTrigger;
