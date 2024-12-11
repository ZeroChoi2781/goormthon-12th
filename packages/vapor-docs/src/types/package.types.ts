import type { PACKAGE_LIST } from '../constants/package';

export type PackageList = (typeof PACKAGE_LIST)[keyof typeof PACKAGE_LIST];
