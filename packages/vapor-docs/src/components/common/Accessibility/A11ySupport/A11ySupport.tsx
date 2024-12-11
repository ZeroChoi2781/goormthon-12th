import React from 'react';

import { Text } from '@goorm-dev/vapor-core';

import style from './A11ySupport.module.scss';
import type { A11ySupportTableProps } from './A11ySupport.types';
import A11ySupportPropsTable from './A11ySupportPropsTable';

const A11ySupport = ({ a11ySupportTableData }: A11ySupportTableProps) => {
    return (
        <div className={style.container}>
            <Text typography="body1" color="text-alternative">
                {a11ySupportTableData.a11ySupportTitle}
            </Text>
            <A11ySupportPropsTable
                a11ySupportTable={a11ySupportTableData.a11ySupportTable}
            />
        </div>
    );
};

export default A11ySupport;
