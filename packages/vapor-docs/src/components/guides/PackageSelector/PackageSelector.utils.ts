import { COMMAND_PREFIX } from './PackageSelector.constants';
import type { CommandPrefix, PackageInfo } from './PackageSelector.types';

export const getCommand = (
    type: CommandPrefix,
    checkedPackages: Record<string, PackageInfo>,
) =>
    `${COMMAND_PREFIX[type]} ${Object.keys(checkedPackages)
        .filter((packageName) => checkedPackages[packageName].checked)
        .map((packageName) => packageName)
        .join(' ')}`;
