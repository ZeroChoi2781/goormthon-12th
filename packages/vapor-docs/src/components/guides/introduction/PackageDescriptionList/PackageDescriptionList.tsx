'use client';

import React from 'react';

import { Text } from '@goorm-dev/vapor-components';
import { snakeCase } from 'lodash';

import { PACKAGE_DESCRIPTION_LIST } from './PackageDescriptionList.constants';
import style from './PackageDescriptionList.module.scss';

const PackageDescriptionList = () => {
    return (
        <div>
            {PACKAGE_DESCRIPTION_LIST.map((item, index) => {
                return (
                    <div key={snakeCase(item.name)} className={style.item}>
                        <Text
                            typography="heading6"
                            color="text-normal"
                            className={style.header}
                        >
                            {`${index + 1}. ${item.name}`}
                        </Text>
                        <ul className={style.description}>
                            <>
                                {item.description.map(({ text, key }) => {
                                    return (
                                        <li key={key}>
                                            <Text
                                                typography="subtitle1"
                                                color="text-normal"
                                            >
                                                {text}
                                            </Text>
                                        </li>
                                    );
                                })}
                            </>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default PackageDescriptionList;
