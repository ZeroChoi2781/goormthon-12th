import React from 'react';

import A11ySupport from './A11ySupport';
import style from './Accessibility.module.scss';
import type { AccessibilityProps } from './Accessibility.types';
import DevNote from './DevNote';
import Heading from './Heading';
import KeyboardInteractions from './KeyboardInteractions';

const HEADING_DUMMY_DATA = {
    headerTitle: 'Accessibility',
    description:
        'Slider WAI-ARIA 표준에 기반한 웹 접근성(A11y)을 준수합니다.\n Vapor Slider는 Radix 기능을 기반으로 구축되어 일부 웹 접근성은 Radix에서 제공하고 있습니다.',
    linkList: [
        {
            title: 'Slider',
            link: '/docs/slider',
        },
        {
            title: 'Radix',
            link: 'https://radix-ui.com/primitives/docs/primitives/slider',
        },
    ],
};

const Accessibility = ({ tableData }: AccessibilityProps) => {
    return (
        <div className={style.container}>
            <Heading
                description={tableData.headingDescription}
                linkList={HEADING_DUMMY_DATA.linkList}
            />
            {tableData.devNoteTable && (
                <DevNote devNoteTable={tableData.devNoteTable} />
            )}
            {tableData.a11ySupportTable && (
                <A11ySupport
                    a11ySupportTableData={tableData.a11ySupportTable}
                />
            )}
            {tableData.keyboardInteractionsTable && (
                <KeyboardInteractions
                    keyboardInteractionsTable={
                        tableData.keyboardInteractionsTable
                    }
                />
            )}
        </div>
    );
};

export default Accessibility;
