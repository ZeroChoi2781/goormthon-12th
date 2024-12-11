'use client';

import { useMemo, useState } from 'react';

import { Checkbox, Text } from '@goorm-dev/vapor-components';

import Pre from '../../custom-mdx/Pre';
import { PACKAGES } from './PackageSelector.constants';
import type { PackageInfo } from './PackageSelector.types';
import { getCommand } from './PackageSelector.utils';

const PackageSelector = () => {
    const [checkedPackages, setCheckedPackages] = useState<
        Record<string, PackageInfo>
    >({
        ...PACKAGES,
    });
    const yarnCommand = useMemo(
        () => `${getCommand('yarn', checkedPackages)}`,
        [checkedPackages],
    );
    const npmCommand = useMemo(
        () => `${getCommand('npm', checkedPackages)}`,
        [checkedPackages],
    );
    const checkedCount = useMemo(
        () =>
            Object.keys(checkedPackages).filter(
                (packageName) => checkedPackages[packageName].checked,
            ).length,
        [checkedPackages],
    );
    const totalCheckedCount = useMemo(
        () => Object.keys(checkedPackages).length,
        [checkedPackages],
    );

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const { id, checked } = e.currentTarget;

        setCheckedPackages({
            ...checkedPackages,
            [id]: {
                ...checkedPackages[id],
                checked,
            },
        });
    };

    const handleClickTotalCheck = () => {
        const allChecked = checkedCount === totalCheckedCount;

        setCheckedPackages(
            Object.keys(checkedPackages).reduce(
                (acc, packageName) => ({
                    ...acc,
                    [packageName]: {
                        ...checkedPackages[packageName],
                        checked: !allChecked,
                    },
                }),
                {},
            ),
        );
    };

    return (
        <>
            <table className="mb-4">
                <thead>
                    <tr>
                        <th>
                            <Checkbox
                                indeterminate={
                                    checkedCount > 0 &&
                                    checkedCount < totalCheckedCount
                                }
                                checked={checkedCount === totalCheckedCount}
                                onClick={handleClickTotalCheck}
                            />
                        </th>
                        <th>Package</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(PACKAGES).map((packageName) => {
                        const { description } = PACKAGES[packageName];

                        return (
                            <tr key={packageName}>
                                <td>
                                    <Checkbox
                                        id={packageName}
                                        checked={
                                            checkedPackages[packageName].checked
                                        }
                                        onClick={handleClick}
                                    />
                                </td>
                                <td>
                                    <code>{packageName}</code>
                                </td>
                                <td>
                                    <Text>{description}</Text>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pre raw={yarnCommand}>{yarnCommand}</Pre>
            <Pre raw={npmCommand}>{npmCommand}</Pre>
        </>
    );
};

export default PackageSelector;
