'use client';

import React from 'react';

import { Text } from '@goorm-dev/vapor-components';

import style from './IntroductionHeader.module.scss';

const IntroductionHeader = () => {
    return (
        <header className={style.header}>
            <Text typography="heading1" color="gray-900">
                Welcome, Vapor
            </Text>
            <Text typography="heading6" color="gray-900">
                Vapor는 구름의 세 번째 디자인 시스템으로, 다양한 서브 패키지들로
                구성되어 있습니다. 각 서브 패키지는 다음과 같은 역할을
                수행합니다.
            </Text>
        </header>
    );
};

export default IntroductionHeader;
