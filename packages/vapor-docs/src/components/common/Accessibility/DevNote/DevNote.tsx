import React from 'react';

import { Text } from '@goorm-dev/vapor-core';

import style from './DevNote.module.scss';
import type { DevNoteProps } from './DevNote.types';
import DevNotePropsTable from './DevNotePropsTable';

const DevNote = ({ devNoteTable }: { devNoteTable: DevNoteProps }) => {
    return (
        <div className={style.container}>
            <Text typography="body1" color="text-alternative">
                {devNoteTable.devNoteTitle}
            </Text>
            <DevNotePropsTable
                devNotePropsTableData={devNoteTable.devNoteTable}
            />
        </div>
    );
};

export default DevNote;
