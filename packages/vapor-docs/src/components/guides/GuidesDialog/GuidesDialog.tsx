'use client';

import { Button } from '@goorm-dev/vapor-components';
import { Dialog } from '@goorm-dev/vapor-core';
import { CloseOutlineIcon } from '@goorm-dev/vapor-icons';

import { usePackageTabsAccordionContext } from '../PackageTabsAccordion/PackageTabsAccordion.context';
import type { GuidesDialogContent } from '../PackageTabsAccordion/PackageTabsAccordion.types';
import style from './GuidesDialog.module.scss';

// goormthon 배포 후 삭제
// import GuidesReferenceContents from './GuidesReferenceContents';

const GuidesDialog = () => {
    const {
        isPakcageDialogOpen,
        setIsPackageDialogOpen,
        dialogContents,
        setSelectedTabItemKey,
        selectedTabItemKey,
    } = usePackageTabsAccordionContext();

    const {
        title = '',
        contents = null,
        footer: { prev = null, next = null },
    } = dialogContents[
        selectedTabItemKey
    ] as GuidesDialogContent[keyof GuidesDialogContent];

    return (
        <Dialog open={isPakcageDialogOpen} size="lg">
            <Dialog.Contents>
                <Dialog.Header>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Close>
                        <Button
                            close
                            aria-label="Close"
                            icon={CloseOutlineIcon}
                            onClick={() => {
                                setIsPackageDialogOpen(false);
                            }}
                            style={{
                                position: 'absolute',
                                right: 0,
                                transform: 'translateX(-50%)',
                            }}
                        />
                    </Dialog.Close>
                </Dialog.Header>
                <Dialog.Body className={style.body}>
                    <div>{contents}</div>
                </Dialog.Body>
                <Dialog.Footer className={style.footer}>
                    {prev !== null && (
                        <Button
                            onClick={() => setSelectedTabItemKey(prev)}
                            className={style.button_prev}
                            size="lg"
                            shape="fill"
                            color="secondary"
                        >
                            {`이전: ${dialogContents[prev as keyof GuidesDialogContent].title}`}
                        </Button>
                    )}
                    {next !== null ? (
                        <Button
                            size="lg"
                            color="primary"
                            onClick={() => setSelectedTabItemKey(next)}
                            className={style.button_next}
                        >
                            {`다음: ${dialogContents[next as keyof GuidesDialogContent].title}`}
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            color="primary"
                            href="/vapor-core"
                            className={style.button_next}
                        >
                            Vapor 시작하기
                        </Button>
                    )}
                </Dialog.Footer>
            </Dialog.Contents>
        </Dialog>
    );
};

export default GuidesDialog;
