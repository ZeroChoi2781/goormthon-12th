import type * as types from '../LiveDemo.types';

export interface Controller {
    knobKey: types.knobKey;
    list: types.knobOptionList;
    onChange: (value: any) => void;
    componentName?: types.componentName;
}

export interface ControlUnit {
    componentName: types.componentName;
    knobKey: types.knobKey;
    type: string;
    list?: types.knobOptionList;
}
