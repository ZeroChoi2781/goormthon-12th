import React from 'react';

import { Badge, Table } from '@goorm-dev/vapor-components';
import { Text } from '@goorm-dev/vapor-core';

import style from './KeyboardInteractionsTable.module.scss';
import type { KeyboardInteractionsTableProps } from './KeyboardInteractionsTable.types';

const KeyboardInteractionsTable = ({
    keyboardInteractionsPropsTableData,
}: KeyboardInteractionsTableProps) => {
    return (
        <Table className={style.container}>
            <thead>
                <tr>
                    <Text
                        typography="subtitle1"
                        color="text-alternative"
                        asChild
                    >
                        <th>Key</th>
                    </Text>
                    <Text
                        typography="subtitle1"
                        color="text-alternative"
                        asChild
                    >
                        <th>Interaction</th>
                    </Text>
                </tr>
            </thead>
            <tbody>
                {keyboardInteractionsPropsTableData.map((tableData) => (
                    <tr key={tableData.name}>
                        <th>
                            <Badge>{tableData.name}</Badge>
                        </th>
                        <th>
                            {tableData.descriptions.map((descriptionData) => (
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

export default KeyboardInteractionsTable;
