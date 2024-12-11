'use client';

import React from 'react';

import { DashboardFrameNew, Text } from '@goorm-dev/vapor-components';
import type { AllComponentsScriptsTarget } from '@vapor-docs/src/types/allComponents.types';
import { upperFirst } from 'lodash';

import styles from './AllComponentsContainer.module.scss';

const AllComponentsContainer = ({
    library,
    libraryDescription,
    children,
}: {
    library: AllComponentsScriptsTarget;
    libraryDescription: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <div className={styles.container}>
            <DashboardFrameNew.ContentsHeader className={styles.header}>
                <Text typography="heading1" color="gray-900" as="h1">
                    {`Vapor ${upperFirst(library)}`}
                </Text>
                <Text typography="body1" color="gray-900">
                    {libraryDescription}
                </Text>
            </DashboardFrameNew.ContentsHeader>
            {children}
        </div>
    );
};

export default AllComponentsContainer;
