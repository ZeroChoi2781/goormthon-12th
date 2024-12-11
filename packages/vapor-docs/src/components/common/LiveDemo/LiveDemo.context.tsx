import React from 'react';

import useSessionStorage from '@vapor-docs/libs/hooks/useSessionStorage';
import { FOUNDATION_SESSION_KEY } from '@vapor-docs/src/constants/webStorage';

import { FOUNDATIONS, FOUNDATION_MAP } from './LiveDemo.constants';
import type * as types from './LiveDemo.types';

export const LiveDemoContext = React.createContext<types.Context | null>(null);
export const LiveDemoUnitControlContext =
    React.createContext<types.LiveDemoUnitControlContext | null>(null);

// NOTE: dependency cycle을 회피하기 위해 context에 훅 생성
const useFoundation = (): types.FoundationController => {
    const { storedValue: foundation, setValue: setFoundation } =
        useSessionStorage<types.Foundations>(
            FOUNDATION_SESSION_KEY,
            FOUNDATIONS[0],
        );

    const selectFoundation = (foundationKey: types.Foundations) => {
        setFoundation(foundationKey);
    };

    React.useEffect(() => {
        const styleLinks = document.querySelectorAll('link');
        styleLinks?.forEach((link) => {
            const href = link.getAttribute('href');
            if (href?.includes('vapor-foundation')) {
                link.setAttribute(
                    'href',
                    FOUNDATION_MAP[foundation] || FOUNDATION_MAP.CommonLight,
                );
            }
        });
    }, [foundation]);

    return { foundation, selectFoundation };
};

export const LiveDemoProvider = ({
    children,
    code: initialCode,
    foundationLinks,
    defaultKnobsObject,
}: types.LiveDemoProvider) => {
    const [code, setCode] = React.useState(initialCode);
    const [knobObject, setKnobObject] = React.useState(defaultKnobsObject);
    const foundationController = useFoundation();

    return (
        <LiveDemoContext.Provider
            value={{
                code,
                knobObject,
                initialCode,
                setCode,
                setKnobObject,
                ...foundationController,
                foundationLinks,
            }}
        >
            {children}
        </LiveDemoContext.Provider>
    );
};

export const LiveDemoUnitControlProvider = ({
    knobs,
    children,
}: types.LiveDemoUnitProvider) => {
    const arrayKnobObject = Object.entries(knobs);
    const componentName = arrayKnobObject[0][0];
    const isEmptyKnobs = Object.keys(knobs[componentName]).length === 0;
    return (
        <LiveDemoUnitControlContext.Provider
            value={{ knobs, arrayKnobObject, isEmptyKnobs }}
        >
            {children}
        </LiveDemoUnitControlContext.Provider>
    );
};
