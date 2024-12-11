'use client';

import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

import {
    FONT_FAMILY,
    FONT_SIZE,
    FONT_WEIGHT,
    LETTER_SPACING,
    LINE_HEIGHT,
} from '@vapor-docs/src/constants/typography';
import { getCssVariableValue } from '@vapor-docs/src/utils/style';

import type {
    PropertyValue,
    TypographyPropertyMap,
    TypographyTemplateProps,
} from './TypographyTemplate.types';

const TYPOGRAPHY_PROPERTY: TypographyPropertyMap = {
    'font-family': FONT_FAMILY,
    'font-size': FONT_SIZE,
    'font-weight': FONT_WEIGHT,
    'letter-spacing': LETTER_SPACING,
    'line-height': LINE_HEIGHT,
};

function TypographyTemplate({
    property = 'font-family',
}: TypographyTemplateProps) {
    const [values, setValues] = useState<PropertyValue[]>(FONT_FAMILY);

    useEffect(() => {
        if (property === 'font-family') return;

        const temp: PropertyValue[] = [];
        const typographyVariables = TYPOGRAPHY_PROPERTY[property];

        typographyVariables.forEach((variable) =>
            temp.push({
                variable,
                value: getCssVariableValue(`--${variable}`),
            }),
        );

        setValues(temp);
    }, [property]);

    if (values.length === 0) return null;

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {values.map(({ variable, value }) => (
                    <tr key={variable}>
                        <td>
                            <code>{variable}</code>
                        </td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TypographyTemplate;
