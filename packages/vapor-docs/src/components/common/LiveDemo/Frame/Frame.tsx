'use client';

import React from 'react';
import { LiveEditor, LivePreview } from 'react-live';

import {
    Button,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    TextButton,
} from '@goorm-dev/vapor-components';
import {
    CaretDownIcon,
    ChevronDoubleLeftOutlineIcon,
    ChevronDoubleRightOutlineIcon,
    FigmaColorIcon,
} from '@goorm-dev/vapor-icons';
import cn from 'classnames';

import { FOUNDATION, FOUNDATIONS, FOUNDATION_MAP } from '../LiveDemo.constants';
import { useLiveDemo, useLiveUnitControl } from '../LiveDemo.hooks';
import styles from './Frame.module.scss';

const useToggle = (init) => {
    const [isOpen, setOpen] = React.useState(!!init);
    const toggle = () => {
        setOpen((prev) => !prev);
    };
    return {
        isOpen,
        setOpen,
        toggle,
    };
};

const FoundationDropdown = ({ isDarkMode = false }) => {
    const { foundation, selectFoundation, foundationLinks } = useLiveDemo();
    const { isOpen, toggle } = useToggle(false);

    return (
        <div className="d-flex align-items-center justify-content-between">
            <span className="d-flex align-items-center">
                <span
                    className={cn(styles.foundationLabel, {
                        [styles.foundationLabel_dark]: isDarkMode,
                    })}
                >
                    Foundation
                </span>
                <Dropdown isOpen={isOpen} toggle={toggle} inNavbar>
                    <DropdownToggle
                        caret
                        size="sm"
                        toggle={toggle}
                        className={cn(styles.dropdownToggle, {
                            [styles.dropdownToggle_light]: !isDarkMode,
                            [styles.dropdownToggle_dark]: isDarkMode,
                        })}
                    >
                        {foundation}
                    </DropdownToggle>
                    <DropdownMenu className={styles.dropdownMenu}>
                        {FOUNDATIONS.map((foundationKey) => {
                            return (
                                <DropdownItem
                                    className={styles.dropdownItem}
                                    key={FOUNDATION_MAP[foundationKey]}
                                    onClick={() =>
                                        selectFoundation(foundationKey)
                                    }
                                >
                                    {foundationKey}
                                </DropdownItem>
                            );
                        })}
                    </DropdownMenu>
                </Dropdown>
            </span>
            {foundationLinks[foundation] && (
                <TextButton
                    href={foundationLinks[foundation]}
                    color="contrast"
                    size="md"
                    target="__blank"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                >
                    <FigmaColorIcon size={20} style={{ marginRight: '4px' }} />
                    피그마 바로가기
                </TextButton>
            )}
        </div>
    );
};

const SidePanel = ({
    sidePanel,
    isSidePanelOpen,
    sidePanelOpenToggle = () => {},
}) => {
    const { isEmptyKnobs } = useLiveUnitControl();
    if (isEmptyKnobs) return null;

    return (
        <div
            className={cn(
                styles.sidePanel,
                !isSidePanelOpen && styles.sidePanel_close,
                'p-3 bg-white border-left',
            )}
        >
            <div
                className={cn(
                    'd-flex align-items-center pb-3 border-bottom',
                    styles.sidePanelHead,
                )}
                role="button"
                tabIndex={0}
                onClick={sidePanelOpenToggle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        sidePanelOpenToggle();
                    }
                }}
            >
                <ChevronDoubleRightOutlineIcon className="mr-2" size={24} />
                <h4 className={styles.sidePanelHeader}>Controls</h4>
            </div>
            <div className={cn('overflow-auto ', styles.sidePanelList)}>
                {sidePanel}
            </div>
        </div>
    );
};

const Frame = ({ sidePanel, noInline }) => {
    const { isOpen: isCodeOpen, toggle: codeOpenToggle } = useToggle(!noInline);
    const { isOpen: isSidePanelOpen, toggle: sidePanelOpenToggle } =
        useToggle(true);
    const { foundation } = useLiveDemo();
    const isDarkMode = foundation === FOUNDATION.COMMON_DARK;

    const icon = () => (
        <ChevronDoubleLeftOutlineIcon className={styles.sidePanelToggle} />
    );

    return (
        <div
            className={cn(
                'd-flex w-100 border rounded overflow-hidden position-relative',
                styles.container,
                {
                    [styles.container_dark]: isDarkMode,
                },
            )}
        >
            {!isSidePanelOpen && (
                <Button
                    onClick={sidePanelOpenToggle}
                    icon={icon}
                    size="xl"
                    color="secondary"
                    className={cn(styles.backButton, 'position-absolute')}
                />
            )}
            <div
                className={cn(
                    'flex-grow-1 d-flex flex-column justify-content-between',
                )}
            >
                <div className={cn('p-4 h-100')}>
                    <FoundationDropdown isDarkMode={isDarkMode} />
                    <div
                        data-test-id="livedemo-preview"
                        className={styles.preview}
                    >
                        <LivePreview
                            className={cn(
                                'd-flex align-items-center justify-content-center w-100 h-100',
                            )}
                        />
                    </div>
                </div>

                <div className={styles.codeBox}>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={codeOpenToggle}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                codeOpenToggle();
                            }
                        }}
                        className={cn(
                            'border-top px-4 py-2 subtitle-1 mb-0 d-flex align-items-center ',
                            isCodeOpen && 'border-bottom',
                            styles.codeBox_border,
                        )}
                    >
                        <CaretDownIcon
                            className={cn(
                                'mr-2',
                                styles.caretIcon,
                                isCodeOpen && styles.caretIcon_open,
                                styles.codeBox_text,
                            )}
                        />
                        <span className={styles.codeBox_text}>코드보기</span>
                    </div>
                    <Collapse isOpen={isCodeOpen} className="px-4 py-3">
                        <LiveEditor className={styles.codeBlock} />
                    </Collapse>
                </div>
            </div>
            <SidePanel
                sidePanel={sidePanel as React.Component}
                isSidePanelOpen={isSidePanelOpen}
                sidePanelOpenToggle={sidePanelOpenToggle}
            />
        </div>
    );
};

export default Frame;
