'use client';

import { Tabs } from '@goorm-dev/vapor-core';
import useSessionStorage from '@vapor-docs/libs/hooks/useSessionStorage';
import FoundationTemplate from '@vapor-docs/src/components/foundations/FoundationTemplate';
import TypographyTemplate from '@vapor-docs/src/components/foundations/TypographyTemplate';
import { FOUNDATION_TAB_TYPOGRAPHY_SESSION_KEY } from '@vapor-docs/src/constants/webStorage';
import type { TypographyTabs } from '@vapor-docs/src/types/foundation.types';

import styles from '../foundation.module.scss';

const Page = () => {
    const { storedValue: activeTab, setValue: setActiveTab } =
        useSessionStorage<TypographyTabs>(
            FOUNDATION_TAB_TYPOGRAPHY_SESSION_KEY,
            'FontFamily',
        );
    const toggle = (tab: TypographyTabs) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <FoundationTemplate
            title="Typography"
            description="텍스트의 스타일과 형식을 정의하여 일관된 글꼴 사용과 가독성을 보장합니다."
        >
            <Tabs
                size="xl"
                value={activeTab}
                onValueChange={(value: string) =>
                    toggle(value as TypographyTabs)
                }
            >
                <Tabs.List className={styles.tabsList}>
                    <Tabs.Button value="FontFamily">Font Family</Tabs.Button>
                    <Tabs.Button value="FontSize">Font Size</Tabs.Button>
                    <Tabs.Button value="FontWeight">Font Weight</Tabs.Button>
                    <Tabs.Button value="LineHeight">Line Height</Tabs.Button>
                    <Tabs.Button value="LetterSpacing">
                        Letter Spacing
                    </Tabs.Button>
                </Tabs.List>
                <Tabs.Panel value="FontFamily" className={styles.tabsPanel}>
                    <TypographyTemplate />
                </Tabs.Panel>
                <Tabs.Panel value="FontSize" className={styles.tabsPanel}>
                    <TypographyTemplate property="font-size" />
                </Tabs.Panel>
                <Tabs.Panel value="FontWeight" className={styles.tabsPanel}>
                    <TypographyTemplate property="font-weight" />
                </Tabs.Panel>
                <Tabs.Panel value="LineHeight" className={styles.tabsPanel}>
                    <TypographyTemplate property="line-height" />
                </Tabs.Panel>
                <Tabs.Panel value="LetterSpacing" className={styles.tabsPanel}>
                    <TypographyTemplate property="letter-spacing" />
                </Tabs.Panel>
            </Tabs>
        </FoundationTemplate>
    );
};

export default Page;
