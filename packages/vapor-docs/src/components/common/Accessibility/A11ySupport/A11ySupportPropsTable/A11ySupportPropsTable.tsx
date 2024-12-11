import React from 'react';

import { Badge, Table } from '@goorm-dev/vapor-components';
import { Text } from '@goorm-dev/vapor-core';

import type { A11ySupportTableProps } from '../A11ySupport.types';
import style from './A11ySupportPropsTable.module.scss';

const A11ySupportPropsTable = ({
    a11ySupportTable,
}: Pick<A11ySupportTableProps['a11ySupportTableData'], 'a11ySupportTable'>) => {
    return (
        <Table className={style.container}>
            <thead>
                <tr>
                    <Text
                        typography="subtitle1"
                        color="text-alternative"
                        asChild
                    >
                        <th>Accessibility</th>
                    </Text>
                    <Text
                        typography="subtitle1"
                        color="text-alternative"
                        asChild
                    >
                        <th>Description</th>
                    </Text>
                </tr>
            </thead>
            <tbody>
                {a11ySupportTable.map((data) => (
                    <tr key={data.accessibility}>
                        <th>
                            <Badge>{data.accessibility}</Badge>
                        </th>
                        <th>
                            {data.descriptions.map((descriptionData) => (
                                <Text
                                    key={descriptionData}
                                    typography="body2"
                                    color="text-normal"
                                >
                                    {descriptionData}
                                </Text>
                            ))}
                        </th>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default A11ySupportPropsTable;
