import type { ReactNode } from 'react';
import React from 'react';

import { PHRASING_CONTENT } from './Button.constants';

const isPhrasingContent = (element: ReactNode): boolean => {
    if (typeof element === 'string' || typeof element === 'number') {
        return true;
    }

    if (React.isValidElement(element)) {
        if (
            typeof element.type === 'function' ||
            typeof element.type === 'object'
        )
            // 리액트 컴포넌트는 phrasing content인지 체크할 수 없음
            return true;
        if (
            typeof element.type === 'string' &&
            (PHRASING_CONTENT as ReadonlyArray<string>).includes(element.type)
        ) {
            return true;
        }
    }

    return false;
};

const validatePhrasingContent = (children: ReactNode): boolean => {
    let isValid = true;

    React.Children.forEach(children, (child) => {
        if (!isPhrasingContent(child)) {
            isValid = false;
            return isValid;
        }
    });

    return isValid;
};

const usePhrasingContentValidator = (children: ReactNode) => {
    if (!validatePhrasingContent(children)) {
        // eslint-disable-next-line no-console
        console.warn(
            `Button component only accepts phrasing content as children.`,
        );
        return null;
    }
};

export default usePhrasingContentValidator;
