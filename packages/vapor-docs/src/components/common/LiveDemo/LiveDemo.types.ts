/* eslint-disable */
import React from 'react';

export type knobKey = string;
export type componentName = string;
export type code = string;
export type type = string;
export type scope = { [componentName: componentName]: React.ReactNode };
export type iconKnob = { value: string; type: type };
export type knob = string | boolean | React.ReactNode | number | iconKnob;
export type knobOptionList = knob[];

export type knobObject = {
    [ComponentName: componentName]: {
        [propName: string]: knob;
    };
};

export type knobControlItem = {
    [propName: string]: {
        type: type;
        list?: knobOptionList;
        defaultValue?: string;
    };
};

export type knobControl = {
    [ComponentName: componentName]: knobControlItem;
};

export type Foundations = 'CommonLight' | 'CommonDark' | 'Kidkit';

export type FoundationController = {
    foundation: Foundations;
    selectFoundation: React.Dispatch<Foundations>;
};

export type Context = {
    code: code;
    knobObject: knobObject;
    setCode: React.Dispatch<code>;
    setKnobObject: React.Dispatch<knobObject>;
    initialCode: code;
    foundationLinks: LiveDemoProps['foundationLinks'];
} & FoundationController;

export interface LiveDemoUnitControlContext {
    knobs: knobControl;
    arrayKnobObject: [componentName, knobControlItem][];
    isEmptyKnobs: boolean;
}

export interface LiveDemoProvider extends React.PropsWithChildren {
    code: code;
    foundationLinks: LiveDemoProps['foundationLinks'];
    defaultKnobsObject: knobObject;
}

export interface LiveDemoUnitProvider extends React.PropsWithChildren {
    knobs: knobControl;
}

export interface LiveDemoItemProps {
    children: code;
    knobs: knobControl;
    scope?: scope;
    propsTable?: PropsTable;
    core?: boolean;
    tools?: boolean;
}

export type FoundationMap = { [key in Foundations]?: string };
export interface LiveDemoProps {
    children: React.ReactNode | React.ReactNode[];
    noInline?: boolean;
    foundationLinks: FoundationMap;
}

export interface LiveDemoUnitProps {
    code: code;
    knobs: knobControl;
    scope?: scope;
    noInline: boolean;
    foundationLinks: LiveDemoProps['foundationLinks'];
    propsTable?: PropsTable;
    core: boolean;
    tools: boolean;
}

export type LiveDemoUnitChildProps = {
    scope: scope;
    noInline: boolean;
    core: boolean;
    tools?: boolean;
};

export type PropsTableValue = {
    description?: string;
    valueList?: string[];
    defaultValue?: string | number | boolean;
    options?: {
        required?: boolean;
        a11y?: boolean;
    };
    type?: string;
};

export type PropsTable = {
    [prop: string]: PropsTableValue;
};
