import React from 'react';

import {
    DialogContent,
    DialogOverlay,
    DialogPortal,
} from '@radix-ui/react-dialog';
import useScrimClickable from '@vapor-core/src/hooks/useScrimClickable';
import useSortedComponents from '@vapor-core/src/hooks/useSortedComponents';
import { formatCssValue } from '@vapor-core/src/utils/styles';
import cn from 'classnames';

import { DISPLAY_NAME } from '../Dialog.constants';
import { useDialogContext } from '../Dialog.context';
import styles from './Contents.module.scss';
import type { ContentsProps } from './Contents.types';

// 현재 vapor-foundation에서 [tabIndex]:focus-visible인 모든 요소에 outline이 적용되어 있음
// [tabIndex]:not([tabIndex="-1"])로 수정하여 해결할 수 있음
const Contents = ({
    maxHeight = '80vh',
    className,
    children,
    ...props
}: ContentsProps) => {
    const { size, scrimClickable } = useDialogContext();
    const handleScrimClickable = useScrimClickable(scrimClickable);

    const filteredChildren = useSortedComponents(children, [
        DISPLAY_NAME.header,
        DISPLAY_NAME.body,
        DISPLAY_NAME.footer,
    ]);

    return (
        <DialogPortal>
            <DialogOverlay className={styles.overlay} />
            <DialogContent
                {...props}
                {...handleScrimClickable}
                style={{ maxHeight: `min(80vh, ${formatCssValue(maxHeight)})` }}
                className={cn(
                    styles.contents,
                    styles[`contents_${size}`],
                    className,
                )}
            >
                {filteredChildren}
            </DialogContent>
        </DialogPortal>
    );
};
Contents.displayName = DISPLAY_NAME.contents;

export default Contents;
