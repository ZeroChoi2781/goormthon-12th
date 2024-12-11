import React from 'react';

import {
    LiveDemoContext,
    LiveDemoUnitControlContext,
} from './LiveDemo.context';
import type * as types from './LiveDemo.types';
import {
    addLeadingBlank,
    getDefaultProps,
    getPropString,
} from './LiveDemo.utils';

export const useLiveUnitControl = () => {
    const context = React.useContext(LiveDemoUnitControlContext);
    if (!context) throw new Error('[LiveDemoControl] Uncaught State');
    return context;
};

export const useLiveDemo = () => {
    const context = React.useContext(LiveDemoContext);
    if (!context) throw new Error('[LiveDemo] Uncaught State');
    return context;
};

export const useKnob = ({
    componentName,
    knobKey,
}: {
    componentName: types.componentName;
    knobKey: types.knobKey;
}) => {
    const { code, knobObject, setCode, setKnobObject, initialCode } =
        useLiveDemo();
    const pattern = `^<${componentName}((?:[^<]*<[^>]*>[^<]*)*[^<]*)>`;
    const componentPropsRegex = new RegExp(pattern);
    const globalComponentPropsRegex = new RegExp(
        componentPropsRegex.source,
        'g',
    );

    const defaultProps = getDefaultProps(initialCode, componentPropsRegex);
    const isSelfClosingTag = !code.includes(`</${componentName}>`);
    const parsedProps = isSelfClosingTag
        ? defaultProps.slice(0, -1).trim()
        : defaultProps.trim();

    const handleChange = (value: types.knob) => {
        if (knobObject[`${componentName}_default`][knobKey])
            delete knobObject[`${componentName}_default`][knobKey];
        const newKnobObject = {
            ...knobObject,
            [componentName]: {
                ...knobObject[componentName],
                [knobKey]: value,
            },
        };

        const arrayNewKnobObject = Object.entries(newKnobObject[componentName]);
        const nextPropString = getPropString(parsedProps, arrayNewKnobObject);

        setKnobObject(newKnobObject);
        const closingTag = isSelfClosingTag ? ' />' : '>';
        const nextCode = code.replace(
            globalComponentPropsRegex,
            `<${componentName}${addLeadingBlank(nextPropString)}${closingTag}`,
        );
        setCode(nextCode);
    };

    return {
        onChange: handleChange,
    };
};
