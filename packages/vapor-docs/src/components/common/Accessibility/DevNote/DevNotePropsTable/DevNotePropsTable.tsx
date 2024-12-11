import React from 'react';

import { Badge, Table } from '@goorm-dev/vapor-components';
import { Text } from '@goorm-dev/vapor-core';

import style from './DevNotePropsTable.module.scss';
import type { DevNotePropsTableDataProps } from './DevNotePropsTable.types';

const DevNotePropsTable = ({
    devNotePropsTableData,
}: DevNotePropsTableDataProps) => {
    return (
        <Table className={style.container}>
            <thead>
                <tr>
                    <Text
                        typography="subtitle1"
                        color="text-alternative"
                        asChild
                    >
                        <th>Props</th>
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
                {devNotePropsTableData.map((data) => (
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

export default DevNotePropsTable;
