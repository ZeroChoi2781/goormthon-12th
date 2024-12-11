'use client';

import { Badge, Table } from '@goorm-dev/vapor-components';
import Text from '@vapor-core/src/components/Text';

import styles from './PropTable.module.scss';
import type { PropTableProps, TRowProps } from './PropTable.types';

const RequiredBadge = ({ isRequire = false }) => {
    if (!isRequire) return null;
    return (
        <Badge color="danger" className={styles.PropTable__badge}>
            required
        </Badge>
    );
};

const TR_LIST = [
    {
        name: 'Name',
        propsKey: 'name',
        defaultValue: '',
    },
    {
        name: 'Description',
        propsKey: 'description',
        defaultValue: '',
    },
    {
        name: 'Default',
        propsKey: 'defaultValue',
        defaultValue: '-',
        className: styles.tableHeader_short,
    },
];

const THead = () => {
    return (
        <thead>
            <tr>
                {TR_LIST.map(({ name }) => {
                    return (
                        <th key={name}>
                            <Text typography="subtitle1">{name}</Text>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

const getDefaultProps = (value: any = '') => {
    if (typeof value === 'function') return '';
    return String(value);
};

const getDescriptionType = (propsKey: string, value: TRowProps['value']) => {
    if (propsKey !== 'description') return;
    return (
        <>
            {value.type && (
                <Badge size="md" color="hint">
                    {value.type}
                </Badge>
            )}
            {value.valueList && (
                <div className={styles.valueList}>
                    {value.valueList.map((item) => (
                        <span key={item}>&apos;{item}&apos;</span>
                    ))}
                </div>
            )}
        </>
    );
};

const TRow = ({ name, value }: TRowProps) => {
    return (
        <tr>
            <th className="position-relative">
                <Text typography="body2">{name}</Text>
                <RequiredBadge isRequire={value.options?.required} />
            </th>
            {TR_LIST.slice(1).map(({ className, propsKey, defaultValue }) => {
                const defaultProps =
                    getDefaultProps(value[propsKey]) || defaultValue;
                return (
                    <td key={propsKey} className={className}>
                        <div className={styles.tRow}>
                            {getDescriptionType(propsKey, value)}
                            {defaultProps && (
                                <Text typography="body2">{defaultProps}</Text>
                            )}
                        </div>
                    </td>
                );
            })}
        </tr>
    );
};

function PropTable({ props, target }: PropTableProps) {
    return (
        <Table className={styles.table}>
            <THead />
            <tbody>
                {Object.entries(props).map(([name, value]) => {
                    return (
                        <TRow
                            key={name}
                            name={name}
                            value={value}
                            target={target}
                        />
                    );
                })}
            </tbody>
        </Table>
    );
}

export default PropTable;
