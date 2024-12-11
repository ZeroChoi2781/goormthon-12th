import { Tabs } from '@goorm-dev/vapor-core';
import { GUIDES_DIALOG_CONTENTS_STEP } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.constants';

import PackageListTab from '../../PackageListTab';
import style from './PackageListContentTabs.module.scss';

const PackageListContentTabs = () => {
    // const { setSelectedLibrary } = usePackageTabsAccordionContext(); 다른 라이브러리 사용하는 경우 주석 제거
    return (
        <Tabs
            size="md"
            defaultValue={Object.keys(GUIDES_DIALOG_CONTENTS_STEP)[0]}
            className={style.tabs}
        >
            {/* <Tabs.List hasBorder> 다른 라이브러리 사용하는 경우 주석 제거
                {Object.keys(GUIDES_DIALOG_CONTENTS_STEP).map((packageName) => {
                    const typedPackageName =
                        packageName as keyof typeof GUIDES_DIALOG_CONTENTS_STEP;
                    return (
                        <Tabs.Button
                            key={typedPackageName}
                            value={typedPackageName}
                            onClick={() => {
                                setSelectedLibrary(typedPackageName);
                            }}
                        >
                            {upperFirst(packageName)}
                        </Tabs.Button>
                    );
                })}
            </Tabs.List> */}
            {Object.keys(GUIDES_DIALOG_CONTENTS_STEP).map((packageName) => {
                const typedPackageName =
                    packageName as keyof typeof GUIDES_DIALOG_CONTENTS_STEP;
                return (
                    <Tabs.Panel
                        key={typedPackageName}
                        value={typedPackageName}
                        className={style.panel}
                    >
                        <PackageListTab packageName={typedPackageName} />
                    </Tabs.Panel>
                );
            })}
        </Tabs>
    );
};

export default PackageListContentTabs;
