'use client';

import { Table } from 'reactstrap';

import SemanticSizeRow from '@vapor-docs/src/components/foundations/SemanticSizeRow';

type SemanticSizeTemplateProps = {
    header: string;
    description: string;
    sizes: Array<{ primitive: string; semantic: string }>;
    sizeType?: 'width' | 'height' | 'borderRadius';
};

function SemanticSizeTemplate({
    sizes,
    sizeType = 'width',
}: SemanticSizeTemplateProps) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Primitive</th>
                    <th>Value</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                {sizes.map(({ primitive, semantic }) => (
                    <SemanticSizeRow
                        key={semantic}
                        sizeType={sizeType}
                        primitive={primitive}
                        semantic={semantic}
                    />
                ))}
            </tbody>
        </Table>
    );
}

export default SemanticSizeTemplate;
