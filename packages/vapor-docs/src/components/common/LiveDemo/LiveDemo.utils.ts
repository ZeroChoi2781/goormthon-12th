import { KNOB_TYPE, booleans, colors, sizes } from './LiveDemo.constants';
import type * as types from './LiveDemo.types';

export function getDefaultProps(code: types.code, componentPropsRegex: RegExp) {
    const match = code.match(componentPropsRegex);
    const res = match ? match[1] ?? '' : '';

    return res;
}

/** controls패널로 조작하는 prop이 parsedProps에 있는 경우, parsedProps에서 해당 prop을 제거한 값을 반환 */
export const removeProps = (
    parsedProps: string,
    propsToRemove: types.knobKey[],
): string => {
    const propsArray = parsedProps.split(' ').filter(Boolean);

    propsToRemove.forEach((propToRemove) => {
        for (let i = 0; i < propsArray.length; i += 1) {
            if (propsArray[i].startsWith(propToRemove)) {
                propsArray.splice(i, 1);
                break;
            }
        }
    });
    return propsArray.join(' ');
};

export const getPropString = (
    parsedProps: string,
    targetKnobObject: [types.knobKey, types.knob][],
) => {
    const updatedProps = removeProps(
        parsedProps,
        targetKnobObject.map(([prop]) => prop),
    );

    return updatedProps.concat(
        targetKnobObject.reduce((propString, [prop, value]) => {
            switch (typeof value) {
                case 'string': {
                    if (value.includes('<')) {
                        return `${propString} ${prop}={${value}}`;
                    }
                    return `${propString} ${prop}="${value}"`;
                }
                case 'boolean': {
                    if (value) {
                        return `${propString} ${prop}`;
                    }
                    return `${propString} ${prop}={${value.toString()}}`;
                }
                case 'object': {
                    if ((value as types.iconKnob)?.type !== KNOB_TYPE.ICON) {
                        return `${propString} ${prop}={${String(value)}}`;
                    }
                    return `${propString} ${prop}={${(value as types.iconKnob).value}}`;
                }
                default: {
                    return `${propString} ${prop}={${String(value)}}`;
                }
            }
        }, ''),
    );
};

/** 첫 칸이 빈 칸이 아니라면 빈칸을 넣어주는 함수 */
export const addLeadingBlank = (str: string): string => {
    if (str.length > 0 && str[0] !== ' ') {
        return ' '.concat(str);
    }
    return str;
};

const getControlMenuMap = {
    [KNOB_TYPE.COLOR_TOKENS]: colors,
    [KNOB_TYPE.SIZES]: sizes,
    [KNOB_TYPE.BOOLEAN]: booleans,
};

export function getControlMenuList(type: types.type): types.knobOptionList {
    const menus = getControlMenuMap[type] ?? [];
    return menus;
}
