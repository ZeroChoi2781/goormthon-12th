'use client';

import { Table } from '@goorm-dev/vapor-components';
import { Tabs } from '@goorm-dev/vapor-core';
import useSessionStorage from '@vapor-docs/libs/hooks/useSessionStorage';
import FoundationTemplate from '@vapor-docs/src/components/foundations/FoundationTemplate';
import SemanticSizeTemplate from '@vapor-docs/src/components/foundations/SemanticSizeTemplate';
import SizeRow from '@vapor-docs/src/components/foundations/SizeRow';
import {
    BORDER_RADIUSES,
    DIMENSIONS,
    SIZES,
    SPACES,
} from '@vapor-docs/src/constants/sizes';
import { FOUNDATION_TAB_SIZE_SESSION_KEY } from '@vapor-docs/src/constants/webStorage';
import type { SizeTabs } from '@vapor-docs/src/types/foundation.types';

import styles from '../foundation.module.scss';

const Page = () => {
    const { storedValue: activeTab, setValue: setActiveTab } =
        useSessionStorage<SizeTabs>(
            FOUNDATION_TAB_SIZE_SESSION_KEY,
            'Primitive',
        );
    const toggle = (tab: SizeTabs) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <FoundationTemplate
            title="Size"
            description="요소의 크기,여백과 관련된 값을 정의하여 일관된 디자인을 유지하는 데 도움을 줍니다."
        >
            <Tabs
                size="xl"
                value={activeTab}
                onValueChange={(value: string) => toggle(value as SizeTabs)}
            >
                <Tabs.List className={styles.tabsList}>
                    <Tabs.Button value="Primitive">Primitive Size</Tabs.Button>
                    <Tabs.Button value="Dimension">Dimension</Tabs.Button>
                    <Tabs.Button value="Space">Space</Tabs.Button>
                    <Tabs.Button value="BorderRadius">
                        Border Radius
                    </Tabs.Button>
                </Tabs.List>
                <Tabs.Panel value="Primitive" className={styles.tabsPanel}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SIZES.map((size) => (
                                <SizeRow key={size} token={size} />
                            ))}
                        </tbody>
                    </Table>
                </Tabs.Panel>
                <Tabs.Panel value="Dimension" className={styles.tabsPanel}>
                    <SemanticSizeTemplate
                        header="Dimension"
                        description="UI의 width, height 값을 정의하는데 사용합니다."
                        sizes={DIMENSIONS}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="Space" className={styles.tabsPanel}>
                    <SemanticSizeTemplate
                        header="Space"
                        description="UI의 체계적인 배열 구성을 위해 일정한 요소와 간격을 사용합니다."
                        sizes={SPACES}
                    />
                </Tabs.Panel>
                <Tabs.Panel value="BorderRadius" className={styles.tabsPanel}>
                    <SemanticSizeTemplate
                        header="Border Radius"
                        description="버튼, 텍스트 입력 상자 등 디자인 구성 요소 컨테이너에 적용되는 모서리 스타일 속성을 정의합니다."
                        sizes={BORDER_RADIUSES}
                        sizeType="borderRadius"
                    />
                </Tabs.Panel>
            </Tabs>
        </FoundationTemplate>
    );
};

export default Page;
