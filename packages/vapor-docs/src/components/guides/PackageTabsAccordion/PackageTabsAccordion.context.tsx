'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { GUIDES_DIALOG_CONTENTS_STEP } from './PackageTabsAccordion.constants';
import type {
    GuidesDialogContent,
    PackageTabsAccordionContextProps,
    PackageTabsAccordionContextState,
} from './PackageTabsAccordion.types';

const defaultValue: PackageTabsAccordionContextState = {
    selectedLibrary: 'core',
    setSelectedLibrary: () => {},
    selectedTabItemKey: 'about',
    setSelectedTabItemKey: () => {},
    dialogContents: GUIDES_DIALOG_CONTENTS_STEP.core,
    isPakcageDialogOpen: false,
    setIsPackageDialogOpen: () => {},
};

const PackageTabsAccordionContext =
    createContext<PackageTabsAccordionContextState>(defaultValue);

export const PackageTabsAccordionProvider = ({
    children,
}: PackageTabsAccordionContextProps) => {
    const [selectedLibrary, setSelectedLibrary] = useState(
        defaultValue.selectedLibrary,
    );
    const [selectedTabItemKey, setSelectedTabItemKey] = useState(
        defaultValue.selectedTabItemKey,
    );

    const [dialogContents, setDialogContents] = useState<GuidesDialogContent>(
        defaultValue.dialogContents,
    );

    const [isPakcageDialogOpen, setIsPackageDialogOpen] = useState(
        defaultValue.isPakcageDialogOpen,
    );

    useEffect(() => {
        const newDialogContents = GUIDES_DIALOG_CONTENTS_STEP[selectedLibrary];
        setDialogContents(newDialogContents);
    }, [selectedLibrary, selectedTabItemKey]);

    const value = {
        selectedLibrary,
        setSelectedLibrary,
        selectedTabItemKey,
        setSelectedTabItemKey,
        dialogContents,
        isPakcageDialogOpen,
        setIsPackageDialogOpen,
    };

    return (
        <PackageTabsAccordionContext.Provider value={value}>
            {children}
        </PackageTabsAccordionContext.Provider>
    );
};

export const usePackageTabsAccordionContext = () => {
    const context = useContext(PackageTabsAccordionContext);
    if (context === null) {
        throw new Error(
            'usePackageTabsAccordionContext must be used within a PackageTabsAccordionProvider',
        );
    }
    return context;
};
