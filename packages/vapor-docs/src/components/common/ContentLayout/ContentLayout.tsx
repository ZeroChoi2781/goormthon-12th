'use client';

import {
    Badge,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Text,
} from '@goorm-dev/vapor-components';
import {
    ConfirmOutlineIcon,
    ErrorCircleIcon,
    GithubIcon,
    NoticeBoardIcon,
    OpenInNewOutlineIcon,
    StorybookColorIcon,
} from '@goorm-dev/vapor-icons';
import useSessionStorage from '@vapor-docs/libs/hooks/useSessionStorage';
import { CONTENT_LAYOUT_TAB_KEY } from '@vapor-docs/src/constants/webStorage';
import type { Tab } from '@vapor-docs/src/types/toc';
import cn from 'classnames';

import LinkButton from '../LinkButton';
import TableOfContents from '../TableOfContents';
import { useTableOfContentsContext } from '../TableOfContents/TableOfContents.hooks';
import { META_OPTIONS } from './ContentLayout.constants';
import styles from './ContentLayout.module.scss';
import type { ContentLayoutProps } from './ContentLayout.types';

const linkArr = [
    {
        key: 'githubIssue',
        name: 'Report issues',
        icon: NoticeBoardIcon,
    },
    {
        key: 'library',
        name: 'Api reference',
        icon: OpenInNewOutlineIcon,
    },
    {
        key: 'github',
        name: null,
        icon: GithubIcon,
    },
    {
        key: 'storybook',
        name: null,
        icon: StorybookColorIcon,
    },
] as const;

const ContentLayout = ({
    componentName,
    meta,
    usageComp,
    historyComp,
}: ContentLayoutProps) => {
    const { storedValue: activeTab, setValue: setActiveTab } =
        useSessionStorage<Tab>(CONTENT_LAYOUT_TAB_KEY, 'Usage');
    const { mdxHeadings } = useTableOfContentsContext();
    const toggle = (tab: Tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const isActive = (tab: Tab) => activeTab === tab;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.header_description}>
                    <h1 className={styles.header_description_h1}>
                        {componentName}
                    </h1>
                    <Text typography="body1">{meta.desc}</Text>
                </div>
                <div className={styles.header_componentLinkInfo}>
                    <span className={styles.headerGroup}>
                        {META_OPTIONS.map((option) => {
                            const isCheckOption =
                                meta.options && meta.options.includes(option);

                            return (
                                <Badge
                                    key={option}
                                    color={isCheckOption ? 'primary' : 'hint'}
                                    leftIcon={
                                        isCheckOption
                                            ? ConfirmOutlineIcon
                                            : ErrorCircleIcon
                                    }
                                    size="lg"
                                    pill
                                >
                                    {option}
                                </Badge>
                            );
                        })}
                    </span>
                    <span className={styles.headerGroup}>
                        {linkArr.map(
                            ({ key, name, icon }) =>
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                                meta.outLink[key] && (
                                    <LinkButton
                                        key={key}
                                        linkProps={{
                                            href: meta.outLink[key],
                                            target: '__blank',
                                        }}
                                    >
                                        {icon({})}
                                        {name}
                                    </LinkButton>
                                ),
                        )}
                    </span>
                </div>
                <Nav tabs className={styles.navTabs}>
                    <NavItem>
                        <NavLink
                            className={cn({
                                active: isActive('Usage'),
                            })}
                            onClick={() => {
                                toggle('Usage');
                            }}
                        >
                            Usage
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={cn({
                                active: isActive('History'),
                            })}
                            onClick={() => {
                                toggle('History');
                            }}
                        >
                            History
                        </NavLink>
                    </NavItem>
                </Nav>
            </header>

            <TabContent activeTab={activeTab} className={styles.tabContent}>
                <TabPane tabId="Usage" className={styles.tabPane}>
                    {usageComp}
                </TabPane>
                <TabPane tabId="History" className={styles.tabPane}>
                    {historyComp}
                </TabPane>
                <TableOfContents mdxHeading={mdxHeadings[activeTab]} />
            </TabContent>
        </div>
    );
};

export default ContentLayout;
