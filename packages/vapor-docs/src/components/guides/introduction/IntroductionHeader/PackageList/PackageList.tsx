'use client';

import PackageListContainer from './PackageListContainer';
import PackageListContent from './PackageListContent';
import PackageListTrigger from './PackageListTrigger';

const PackageList = () => {
    return (
        <PackageListContainer>
            <PackageListTrigger />
            <PackageListContent />
        </PackageListContainer>
    );
};

export default PackageList;
