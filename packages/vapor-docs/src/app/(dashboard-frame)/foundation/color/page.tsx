'use client';

import { Tabs } from '@goorm-dev/vapor-core';
import useSessionStorage from '@vapor-docs/libs/hooks/useSessionStorage';
import ColorBoxes from '@vapor-docs/src/components/foundations/ColorBoxes';
import FoundationTemplate from '@vapor-docs/src/components/foundations/FoundationTemplate';
import {
    COLOR_PRIMITIVE,
    COLOR_SEMANTIC,
} from '@vapor-docs/src/constants/colors';
import { FOUNDATION_TAB_COLOR_SESSION_KEY } from '@vapor-docs/src/constants/webStorage';
import type { ColorTabs } from '@vapor-docs/src/types/foundation.types';

import styles from '../foundation.module.scss';

const Page = () => {
    const { storedValue: activeTab, setValue: setActiveTab } =
        useSessionStorage<ColorTabs>(
            FOUNDATION_TAB_COLOR_SESSION_KEY,
            'Primitive',
        );
    const toggle = (tab: ColorTabs) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <FoundationTemplate
            title="Color"
            description="컬러 토큰은 브랜드의 정체성과 사용자 경험을 지원하는 다양한 색상을 정의합니다."
        >
            <Tabs
                size="xl"
                value={activeTab}
                onValueChange={(value: string) => toggle(value as ColorTabs)}
            >
                <Tabs.List className={styles.tabsList}>
                    <Tabs.Button value="Primitive">Primitive Color</Tabs.Button>
                    <Tabs.Button value="Semantic">Semantic Color</Tabs.Button>
                </Tabs.List>
                <Tabs.Panel value="Primitive" className={styles.tabsPanel}>
                    <ColorBoxes tokens={COLOR_PRIMITIVE} />
                </Tabs.Panel>
                <Tabs.Panel value="Semantic" className={styles.tabsPanel}>
                    <ColorBoxes tokens={COLOR_SEMANTIC} />
                </Tabs.Panel>
            </Tabs>
        </FoundationTemplate>
    );
};

export default Page;
