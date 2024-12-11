import React from 'react';

import GuidesDialogContentsTemplate from '../../GuidesDialogContentsTemplate';
import { MINIMALISM_CORE_CONTENTS } from './MinimalismCoreContents.constants';

const MinimalismCoreContents = () => {
    return (
        <GuidesDialogContentsTemplate templateItem={MINIMALISM_CORE_CONTENTS} />
    );
};

export default MinimalismCoreContents;
