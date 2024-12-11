'use client';

import React from 'react';

import { Radio, SideNav, Switch } from '@goorm-dev/vapor-components';
import camelCase from 'lodash/camelCase';

import { KNOB_TYPE } from '../LiveDemo.constants';
import { useKnob, useLiveDemo } from '../LiveDemo.hooks';
import type * as types from '../LiveDemo.types';
import { getControlMenuList } from '../LiveDemo.utils';
import styles from './ControlUnit.module.scss';
import type * as controlTypes from './ControlUnit.types';

const ControlToggle = (props: controlTypes.Controller) => {
    const { knobKey, onChange, componentName = '' } = props;
    const { knobObject } = useLiveDemo();
    const defaultValue = knobObject[`${componentName}_default`][knobKey];
    const controlValue = knobObject[componentName][knobKey];
    const boolVal = controlValue || defaultValue;
    const isChecked = !!boolVal;
    const ref = React.useRef<HTMLLIElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();

        const { checked } = e.target;
        onChange(checked);
    };

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (e.target === ref.current) return;
        ref.current?.click();
    };

    return (
        <SideNav.Group className={styles.sideGroup}>
            <SideNav.Item onClick={handleClick}>
                <SideNav.Link className={styles.sideHeader}>
                    {camelCase(knobKey)}
                    <SideNav.Item.RightArea>
                        <Switch
                            className={styles.switch}
                            id={knobKey}
                            onChange={handleChange}
                            innerRef={ref}
                            checked={isChecked}
                        />
                    </SideNav.Item.RightArea>
                </SideNav.Link>
            </SideNav.Item>
        </SideNav.Group>
    );
};

const ControlCollapse = (props: controlTypes.Controller) => {
    const { knobKey, list, onChange, componentName = '' } = props;
    const { knobObject } = useLiveDemo();
    const defaultValue = knobObject[`${componentName}_default`][knobKey];
    const controlValue = knobObject[componentName][knobKey];
    const activeItem = controlValue ?? defaultValue ?? '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const links = list.map((l) => {
        return {
            children: (
                <Radio
                    checked={activeItem === l}
                    id={l as string}
                    label={l as string}
                    onChange={handleChange}
                    className={styles.controlRadio}
                    value={l as string}
                    disabled={false}
                    helpLabel=""
                    helpPlacement="top"
                />
            ),
            className: 'p-0',
        };
    });

    return (
        <SideNav.Group className={styles.sideGroup}>
            <SideNav.Item>
                <SideNav.Collapse
                    links={links}
                    className={styles.sideHeader}
                    collapseClassName={styles.sideCollapse}
                >
                    {knobKey.toUpperCase()}
                </SideNav.Collapse>
            </SideNav.Item>
        </SideNav.Group>
    );
};

const ControlToggleIcon = (props: controlTypes.Controller) => {
    const { onChange } = props;
    const handleChange = (checked: boolean) => {
        onChange(checked ? { value: 'HeartIcon', type: KNOB_TYPE.ICON } : null);
    };

    return <ControlToggle {...props} onChange={handleChange} />;
};

const ControlToggleFunction = (props: controlTypes.Controller) => {
    const { onChange } = props;
    const [, setShow] = React.useState(false);
    const handleChange = (checked: boolean) => {
        onChange(
            checked
                ? () => {
                      setShow(false);
                  }
                : null,
        );
    };

    return <ControlToggle {...props} onChange={handleChange} />;
};

const getController = (type: types.type) => {
    switch (type) {
        case KNOB_TYPE.ICON:
            return ControlToggleIcon;
        case KNOB_TYPE.BOOLEAN:
            return ControlToggle;
        case KNOB_TYPE.FUNCTION:
            return ControlToggleFunction;
        default:
            return ControlCollapse;
    }
};

const ControlUnit = (props: controlTypes.ControlUnit) => {
    const { componentName, knobKey, type, list = [] } = props;

    const { onChange } = useKnob({ componentName, knobKey });
    const Controller = getController(type);
    const menuList = getControlMenuList(type) ?? list;
    const concatedList = Array.from(new Set([...menuList, ...list]));

    return (
        <Controller
            componentName={componentName}
            onChange={onChange}
            knobKey={knobKey}
            list={concatedList}
        />
    );
};

export default ControlUnit;
