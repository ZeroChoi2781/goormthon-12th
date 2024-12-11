import { GUIDES_DIALOG_CONTENTS_STEP } from '@vapor-docs/src/components/guides/PackageTabsAccordion/PackageTabsAccordion.constants';

import type { PackageList } from '../PackageList.types';
import PackageListTabItem from '../PackageListTabItem';
import type { PackageListTabItem as PackageListTabItemType } from '../PackageListTabItem/PackageListTabItem.types';
import style from './PackageListTab.module.scss';

const PackageListTab = ({ packageName }: { packageName: PackageList }) => {
    return (
        <div className={style.container}>
            {Object.values(GUIDES_DIALOG_CONTENTS_STEP[packageName]).map(
                (_, index) => {
                    const tabItem = Object.values(
                        GUIDES_DIALOG_CONTENTS_STEP[packageName],
                    )[index] as PackageListTabItemType;

                    return (
                        <PackageListTabItem
                            key={index}
                            index={index}
                            tabItem={tabItem}
                        />
                    );
                },
            )}
        </div>
    );
};

export default PackageListTab;
