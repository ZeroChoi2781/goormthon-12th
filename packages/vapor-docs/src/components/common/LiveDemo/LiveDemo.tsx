'use client';

import React from 'react';
import { LiveProvider } from 'react-live';

import * as GDS from '@goorm-dev/vapor-components';
import { SideNav } from '@goorm-dev/vapor-components';
import * as VAPOR_CORE from '@goorm-dev/vapor-core';
import * as GDSIcon from '@goorm-dev/vapor-icons';
import * as VAPOR_TOOLS from '@goorm-dev/vapor-tools';

import ControlUnit from './ControlUnit';
import Frame from './Frame';
import {
    LiveDemoProvider,
    LiveDemoUnitControlProvider,
} from './LiveDemo.context';
import { useLiveDemo, useLiveUnitControl } from './LiveDemo.hooks';
import styles from './LiveDemo.module.scss';
import type * as types from './LiveDemo.types';

const LiveDemoItem = ({ children }: types.LiveDemoItemProps) => {
    return <div>{children}</div>;
};

const LiveDemoUnitControlSection = () => {
    const { arrayKnobObject } = useLiveUnitControl();

    return (
        <SideNav>
            <SideNav.List className={styles.navList}>
                {arrayKnobObject.map(([componentName, props]) => {
                    return Object.entries(props).map(
                        ([knobKey, { list, type }], idx) => {
                            const key = `${componentName}_${idx}`;
                            return (
                                <ControlUnit
                                    key={key}
                                    componentName={componentName}
                                    knobKey={knobKey}
                                    list={list}
                                    type={type}
                                />
                            );
                        },
                    );
                })}
            </SideNav.List>
        </SideNav>
    );
};

const LiveDemoUnitChild = ({
    scope,
    noInline,
    core,
    tools,
}: types.LiveDemoUnitChildProps) => {
    const { code } = useLiveDemo();
    return (
        <LiveProvider
            noInline={noInline}
            code={code}
            scope={{
                ...GDS,
                ...GDSIcon,
                ...(core && VAPOR_CORE),
                ...(tools && VAPOR_TOOLS),
                ...scope,
            }}
        >
            <Frame
                sidePanel={<LiveDemoUnitControlSection />}
                noInline={noInline}
            />
        </LiveProvider>
    );
};

const LiveDemoUnit = ({
    code,
    knobs,
    scope = {},
    noInline,
    foundationLinks,
    propsTable,
    core,
    tools,
}: types.LiveDemoUnitProps) => {
    const componentName = Object.keys(knobs)[0];
    const defaultKnobsObject: types.knobObject = {
        [componentName]: {},
        [`${componentName}_default`]: {},
    };
    if (propsTable) {
        const keys = Object.keys(propsTable);
        keys.forEach((key) => {
            const defaultVal = propsTable[key].defaultValue;
            if (defaultVal) {
                switch (defaultVal) {
                    case 'true':
                    case 'false':
                        defaultKnobsObject[`${componentName}_default`][key] =
                            defaultVal === 'true';
                        break;
                    default:
                        defaultKnobsObject[`${componentName}_default`][key] =
                            defaultVal;
                        break;
                }
            }
        });
    }

    return (
        <LiveDemoUnitControlProvider knobs={knobs}>
            <LiveDemoProvider
                code={code}
                foundationLinks={foundationLinks}
                defaultKnobsObject={defaultKnobsObject}
            >
                <LiveDemoUnitChild
                    scope={scope}
                    noInline={noInline}
                    core={core}
                    tools={tools}
                />
            </LiveDemoProvider>
        </LiveDemoUnitControlProvider>
    );
};

const LiveDemo = ({
    children,
    noInline = false,
    foundationLinks,
}: types.LiveDemoProps): React.JSX.Element => {
    const childrenToArray = React.Children.toArray(
        children,
    ) as React.ReactElement<types.LiveDemoItemProps, typeof LiveDemoItem>[];

    const tabs = childrenToArray.map(
        (
            child: React.ReactElement<
                types.LiveDemoItemProps,
                typeof LiveDemoItem
            >,
            idx,
        ) => {
            const {
                children: propsChildren,
                scope,
                knobs,
                propsTable,
                core = false,
                tools = false,
            } = child.props;
            const key = `tabs_${idx}`;
            return (
                <LiveDemoUnit
                    key={key}
                    code={propsChildren}
                    knobs={knobs}
                    scope={scope as types.scope}
                    noInline={noInline}
                    foundationLinks={foundationLinks}
                    propsTable={propsTable}
                    core={core}
                    tools={tools}
                />
            );
        },
    );

    return tabs[0] ?? null;
};

LiveDemo.LiveDemoItem = LiveDemoItem;
export default LiveDemo;
