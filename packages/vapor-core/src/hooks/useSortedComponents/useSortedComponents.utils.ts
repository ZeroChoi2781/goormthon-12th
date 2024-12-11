import type { ReactNode } from 'react';
import { isValidElement } from 'react';

const getDisplayName = (component: ReactNode) => {
    if (!isValidElement(component)) return '';
    if (typeof component.type === 'string') return '';
    if (!('displayName' in component.type)) return '';

    return component.type.displayName;
};

export const getChildrenIndex = (childrenList: ReactNode[], name: string) => {
    return childrenList.findIndex((child) => getDisplayName(child) === name);
};
