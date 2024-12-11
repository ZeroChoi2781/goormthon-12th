import React from 'react';

import GuidesDialogContentsTemplate from '../../GuidesDialogContentsTemplate';
import { DEVELOPMENT_CORE_CHARACTERISTICS_CONTENTS } from './DevelopmentCoreCharacteristicsContents.constants';

const DevelopmentCoreCharacteristicsContents = () => {
    return (
        <GuidesDialogContentsTemplate
            templateItem={DEVELOPMENT_CORE_CHARACTERISTICS_CONTENTS}
        />
    );
};

export default DevelopmentCoreCharacteristicsContents;
