import React from 'react';

import { Text } from '@goorm-dev/vapor-core';

import style from './KeyboardInteractions.module.scss';
import type { KeyboardInteractionsProps } from './KeyboardInteractions.types';
import KeyboardInteractionsTable from './KeyboardInteractionsTable';

const KeyboardInteractions = ({
    keyboardInteractionsTable,
}: KeyboardInteractionsProps) => {
    return (
        <div className={style.container}>
            <Text typography="heading5" color="text-normal">
                Keyboard Interactions
            </Text>
            <KeyboardInteractionsTable
                keyboardInteractionsPropsTableData={
                    keyboardInteractionsTable.keyboardTable
                }
            />
        </div>
    );
};

export default KeyboardInteractions;
